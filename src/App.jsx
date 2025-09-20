import React, { useState, useMemo } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts';

const WithdrawalSimulator = () => {
  const [C0, setC0] = useState(1000000);
  const [W1, setW1] = useState(40000);
  const [r, setR] = useState(7);
  const [g, setG] = useState(3);
  const [years, setYears] = useState(50);

  const simulation = useMemo(() => {
    const rDecimal = r / 100;
    const gDecimal = g / 100;
    
    // Calculate theoretical minimum C0 for perpetual sustainability
    const minC0 = rDecimal > gDecimal ? W1 / (rDecimal - gDecimal) : null;
    
    // Calculate minimum C0 for positive balance in final year using numerical approach
    const calculateMinC0ForFinalYear = () => {
      let testC0 = W1;
      let increment = W1;
      let iterations = 0;
      const maxIterations = 50;
      
      while (iterations < maxIterations) {
        let testBalance = testC0;
        
        // Simulate to final year
        for (let year = 1; year <= years; year++) {
          testBalance = testBalance * (1 + rDecimal);
          const withdrawal = W1 * Math.pow(1 + gDecimal, year - 1);
          testBalance = testBalance - withdrawal;
        }
        
        if (testBalance > 0) {
          if (increment < 1000) break; // Close enough
          testC0 -= increment;
          increment /= 2;
        } else {
          testC0 += increment;
        }
        iterations++;
      }
      
      return testC0;
    };
    
    const minC0FinalYear = calculateMinC0ForFinalYear();
    
    // Generate simulation data
    const data = [];
    let balance = C0;
    
    // Year 0 (initial)
    data.push({
      year: 0,
      balance: balance,
      withdrawal: 0,
      cumulativeWithdrawals: 0
    });
    
    let cumulativeWithdrawals = 0;
    
    for (let year = 1; year <= years; year++) {
      // Apply interest at beginning of year
      balance = balance * (1 + rDecimal);
      
      // Calculate withdrawal (grows with inflation)
      const withdrawal = W1 * Math.pow(1 + gDecimal, year - 1);
      
      // Subtract withdrawal at end of year
      balance = balance - withdrawal;
      cumulativeWithdrawals += withdrawal;
      
      data.push({
        year,
        balance: Math.round(balance),
        withdrawal: Math.round(withdrawal),
        cumulativeWithdrawals: Math.round(cumulativeWithdrawals)
      });
    }
    
    return { data, minC0, minC0FinalYear };
  }, [C0, W1, r, g, years]);

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(value);
  };

  const formatNumber = (value) => {
    return new Intl.NumberFormat('en-US').format(value);
  };

  const formatCurrencyInput = (value) => {
    return '$' + new Intl.NumberFormat('en-US').format(value);
  };

  const parseFormattedNumber = (value) => {
    return parseInt(value.replace(/[$,]/g, '')) || 0;
  };

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-white p-3 border border-gray-300 rounded shadow-lg">
          <p className="font-semibold">{`Year ${label}`}</p>
          <p className="text-blue-600">{`Balance: ${formatCurrency(data.balance)}`}</p>
          <p className="text-red-600">{`Withdrawal: ${formatCurrency(data.withdrawal)}`}</p>
        </div>
      );
    }
    return null;
  };

  const finalBalance = simulation.data[simulation.data.length - 1]?.balance || 0;
  const finalWithdrawal = simulation.data[simulation.data.length - 1]?.withdrawal || 0;
  const isMinC0Valid = simulation.minC0 && simulation.minC0 > 0;
  const realReturn = r - g;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="p-6 max-w-7xl mx-auto bg-gray-50">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Perpetual Withdrawal Fund Simulator</h1>
        
        {/* Input Controls */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Simulation Parameters</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Initial Capital (C₀)
              </label>
              <input
                type="text"
                value={formatCurrencyInput(C0)}
                onChange={(e) => setC0(parseFormattedNumber(e.target.value))}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                First Year Withdrawal (W₁)
              </label>
              <input
                type="text"
                value={formatCurrencyInput(W1)}
                onChange={(e) => setW1(parseFormattedNumber(e.target.value))}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Annual Interest Rate (r) %
              </label>
              <input
                type="number"
                value={r}
                onChange={(e) => setR(Number(e.target.value))}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                step="0.1"
                min="0"
                max="20"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Inflation Rate (g) %
              </label>
              <input
                type="number"
                value={g}
                onChange={(e) => setG(Number(e.target.value))}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                step="0.1"
                min="0"
                max="15"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Simulation Years
              </label>
              <input
                type="number"
                value={years}
                onChange={(e) => setYears(Number(e.target.value))}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                min="10"
                max="100"
              />
            </div>
          </div>
        </div>

        {/* Key Insights */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Key Insights</h2>
          <div className="flex flex-wrap gap-4 justify-center">
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 min-w-48">
              <h3 className="font-semibold text-blue-800 text-sm">Real Return</h3>
              <p className="text-xl font-bold text-blue-600">{realReturn.toFixed(2)}%</p>
              <p className="text-xs text-blue-700">Interest - Inflation</p>
            </div>
            
            <div className={`p-4 rounded-lg border min-w-48 ${isMinC0Valid ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'}`}>
              <h3 className={`font-semibold text-sm ${isMinC0Valid ? 'text-green-800' : 'text-red-800'}`}>
                Minimum C₀ Required
              </h3>
              <p className={`text-xl font-bold ${isMinC0Valid ? 'text-green-600' : 'text-red-600'}`}>
                {isMinC0Valid ? formatCurrency(simulation.minC0) : 'N/A'}
              </p>
              <p className={`text-xs ${isMinC0Valid ? 'text-green-700' : 'text-red-700'}`}>
                For perpetual sustainability
              </p>
            </div>
            
            <div className="bg-purple-50 p-4 rounded-lg border border-purple-200 min-w-48">
              <h3 className="font-semibold text-purple-800 text-sm">Minimum C₀ Required</h3>
              <p className="text-xl font-bold text-purple-600">
                {formatCurrency(simulation.minC0FinalYear)}
              </p>
              <p className="text-xs text-purple-700">
                For positive balance in year {years}
              </p>
            </div>
            
            <div className={`p-4 rounded-lg border min-w-48 ${finalBalance > 0 ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'}`}>
              <h3 className={`font-semibold text-sm ${finalBalance > 0 ? 'text-green-800' : 'text-red-800'}`}>
                Final Balance
              </h3>
              <p className={`text-xl font-bold ${finalBalance > 0 ? 'text-green-600' : 'text-red-600'}`}>
                {formatCurrency(finalBalance)}
              </p>
              <p className={`text-xs ${finalBalance > 0 ? 'text-green-700' : 'text-red-700'}`}>
                After {years} years
              </p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 min-w-48">
              <h3 className="font-semibold text-gray-800 text-sm">Final Withdrawn</h3>
              <p className="text-xl font-bold text-gray-600">{formatCurrency(finalWithdrawal)}</p>
              <p className="text-xs text-gray-700">W value in year {years}</p>
            </div>
          </div>
          
          {/* Mathematical Insight */}
          <div className="mt-4 p-4 bg-amber-50 rounded-lg border border-amber-200">
            <h4 className="font-semibold text-amber-800 mb-2">💡 Mathematical Insight</h4>
            <p className="text-amber-700 text-sm">
              For perpetual sustainability, the minimum initial capital follows the growing perpetuity formula: 
              <span className="font-mono bg-amber-100 px-2 py-1 rounded ml-1">C₀ = W₁ / (r - g)</span>
              {realReturn <= 0 && (
                <span className="block mt-2 text-amber-800 font-medium">
                  ⚠️ Warning: When r ≤ g, the fund cannot sustain indefinitely regardless of initial capital.
                </span>
              )}
            </p>
          </div>
        </div>

        {/* Chart */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Projected Fund Balance Over Time</h2>
          <div style={{ width: '100%', height: '500px' }}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={simulation.data} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis 
                  dataKey="year" 
                  stroke="#666"
                  label={{ value: 'Year', position: 'insideBottom', offset: -10 }}
                />
                <YAxis 
                  stroke="#666"
                  tickFormatter={(value) => `$${(value / 1000000).toFixed(1)}M`}
                  label={{ value: 'Fund Balance', angle: -90, position: 'insideLeft' }}
                />
                <Tooltip content={<CustomTooltip />} />
                {isMinC0Valid && (
                  <ReferenceLine 
                    y={simulation.minC0} 
                    stroke="#10b981" 
                    strokeWidth={2} 
                    strokeDasharray="8 4"
                    label={{ value: "Min C₀", position: "topRight", fill: "#10b981" }}
                  />
                )}
                <Line 
                  type="monotone" 
                  dataKey="balance" 
                  stroke="#3b82f6" 
                  strokeWidth={3}
                  dot={false}
                  activeDot={{ r: 6, fill: '#3b82f6' }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
          
          <div className="mt-4 text-sm text-gray-600">
            <p>• <span className="text-blue-600 font-semibold">Blue line</span>: Fund balance over time</p>
            {isMinC0Valid && (
              <p>• <span className="text-green-600 font-semibold">Green dashed line</span>: Theoretical minimum C₀ for perpetual sustainability</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WithdrawalSimulator;
