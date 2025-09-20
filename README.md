# Perpetual Withdrawal Fund Simulator

I built this interactive financial planning tool to help people calculate sustainable withdrawals from their investment portfolios with inflation adjustments. Whether you're planning for retirement, exploring FIRE (Financial Independence, Retire Early), or just curious about long-term portfolio sustainability, this simulator provides the mathematical insights you need.

## 🚀 Live Demo
**Try it here:** [https://oeaiaa.github.io/withdrawal-fund-simulator](https://oeaiaa.github.io/withdrawal-fund-simulator)

## 📊 What It Does

This simulator answers the critical question: *"How much can I safely withdraw from my portfolio each year?"*

### Key Features
- **Interactive Real-time Calculations**: Adjust parameters and see results instantly
- **Inflation-Adjusted Withdrawals**: All calculations account for inflation growth over time
- **Multiple Scenarios**: Compare perpetual sustainability vs. fixed time horizon planning
- **Visual Projections**: Interactive charts showing your fund balance over time
- **Mathematical Foundation**: Based on the growing perpetuity formula: C₀ = W₁ / (r - g)

### Key Insights Provided
- **Real Return Analysis**: See the impact of inflation on your actual returns
- **Minimum Capital Requirements**: Calculate exactly how much you need for perpetual sustainability
- **Time-Bound Planning**: Find minimum capital needed for positive balance over your specific timeframe
- **Withdrawal Projections**: Understand how your withdrawals will grow with inflation

## 🧮 The Math Behind It

The simulator uses the **growing perpetuity formula** for calculating minimum sustainable capital:

**C₀ = W₁ / (r - g)**

Where:
- C₀ = Initial capital required
- W₁ = First year withdrawal amount
- r = Annual investment return rate
- g = Annual inflation rate

### How the Simulation Works
1. Apply annual interest to your fund balance
2. Calculate inflation-adjusted withdrawal for each year
3. Subtract withdrawal from balance
4. Project forward for your specified time horizon
5. Show when funds would be depleted (if ever)

## 🎯 Perfect For

- **Retirement Planning**: Calculate safe withdrawal rates for your retirement funds
- **FIRE Movement**: Plan your path to Financial Independence, Retire Early
- **Investment Strategy**: Test different portfolio return scenarios
- **Financial Education**: Understand the relationship between returns, inflation, and sustainability

## 🛠️ Technical Implementation

Built with modern web technologies for a smooth, responsive experience:
- **Frontend**: React 18 with modern hooks
- **Charts**: Recharts for interactive visualizations  
- **Styling**: Tailwind CSS for clean, responsive design
- **Deployment**: GitHub Pages with automated CI/CD
- **Mobile-Friendly**: Works seamlessly on desktop, tablet, and mobile

## 📱 Features

- **Responsive Design**: Works perfectly on all device sizes
- **Real-time Updates**: Changes reflect immediately as you adjust parameters
- **Professional Visualizations**: Clean, informative charts with hover details
- **Input Validation**: Smart formatting for currency and percentage inputs
- **Export-Ready**: Perfect for screenshots and sharing with financial advisors

## 🔍 Example Use Cases

### Scenario 1: Traditional Retirement
- Initial Capital: $1,000,000
- First Year Withdrawal: $40,000
- Expected Return: 7%
- Inflation Rate: 3%
- **Result**: Sustainable indefinitely with 4% real return

### Scenario 2: Conservative Approach
- Test lower withdrawal rates to see increased fund growth
- Understand the safety margin in your retirement planning

### Scenario 3: Aggressive FIRE Planning
- Higher withdrawal rates for earlier retirement
- See exactly when funds might be depleted without course correction

## 💡 Why I Built This

Traditional retirement calculators often oversimplify the relationship between returns, inflation, and withdrawals. I wanted to create a tool that:
- Shows the mathematical reality of portfolio sustainability
- Helps people make informed decisions about withdrawal rates
- Provides both optimistic and realistic scenarios
- Makes complex financial concepts accessible and visual

## 🚀 Getting Started

Simply visit the live demo and start experimenting with different scenarios. No installation or signup required.

**Pro tip**: Start with conservative estimates and gradually adjust to see how different assumptions affect your long-term sustainability.

## 📊 Educational Value

This tool demonstrates important financial concepts:
- **Sequence of Returns Risk**: How market timing affects withdrawal sustainability
- **Inflation Impact**: Why nominal returns aren't the full story
- **Safe Withdrawal Rates**: The mathematics behind the famous "4% rule"
- **Portfolio Longevity**: When and why portfolios might be depleted

## 🎓 Background

Created using mathematical principles from portfolio theory and retirement planning research. The calculations are based on established financial formulas used by financial planners and academic researchers.

---

**Disclaimer**: This tool is for educational and planning purposes. Always consult with qualified financial professionals for personalized advice.
