# Perpetual Withdrawal Fund Simulator

A React-based financial planning tool that simulates sustainable withdrawals from investment portfolios with inflation adjustments.

## 🚀 Live Demo
After deployment, your app will be available at: `https://yourusername.github.io/withdrawal-fund-simulator`

## 📊 Features

- **Interactive Simulation**: Adjust initial capital, withdrawal amounts, interest rates, and inflation
- **Real-time Calculations**: See how your fund balance changes over time
- **Key Insights**: 
  - Real return (interest - inflation)
  - Minimum capital required for perpetual sustainability
  - Minimum capital for positive balance at end of simulation
  - Final balance and withdrawal amounts
- **Visual Charts**: Interactive charts showing fund balance projections
- **Mathematical Formula**: Based on growing perpetuity formula: C₀ = W₁ / (r - g)

## 🛠️ Step-by-Step GitHub Pages Deployment

### Step 1: Create GitHub Repository

1. Go to [GitHub.com](https://github.com) and sign in (or create account)
2. Click the "+" icon in top right → "New repository"
3. Name it `withdrawal-simulator` (or your preferred name)
4. Make it **Public** (required for free GitHub Pages)
5. Check "Add a README file"
6. Click "Create repository"

### Step 2: Upload Files

1. In your new repository, click "uploading an existing file"
2. Create the following file structure by uploading/creating files:

```
withdrawal-simulator/
├── .github/
│   └── workflows/
│       └── deploy.yml
├── src/
│   ├── App.js
│   └── index.js
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

3. Copy the content from each artifact file into the corresponding file in your repository

### Step 3: Update Configuration

**Important**: Edit these files with your specific details:

1. **package.json**: Update the `homepage` field:
   ```json
   "homepage": "https://YOURUSERNAME.github.io/YOURREPOSITORYNAME"
   ```

2. **vite.config.js**: Update the `base` field:
   ```javascript
   base: '/YOURREPOSITORYNAME/'
   ```

### Step 4: Enable GitHub Pages

1. Go to your repository **Settings** tab
2. Scroll down to **Pages** section (left sidebar)
3. Under "Source", select **GitHub Actions**
4. That's it! GitHub will automatically deploy when you push to main branch

### Step 5: Deploy

1. Commit all your files to the main branch
2. GitHub Actions will automatically build and deploy your app
3. Check the **Actions** tab to see deployment progress
4. Once complete, your app will be live at `https://yourusername.github.io/withdrawal-simulator`

## 🔧 Local Development

To run locally:

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 📱 Mobile Responsive

The app is fully responsive and works on:
- Desktop computers
- Tablets
- Mobile phones

## 🧮 How It Works

### Mathematical Foundation
The simulator uses the growing perpetuity formula for calculating minimum sustainable capital:

**C₀ = W₁ / (r - g)**

Where:
- C₀ = Initial capital required
- W₁ = First year withdrawal
- r = Annual interest rate
- g = Annual inflation rate

### Simulation Logic
1. Apply annual interest to fund balance
2. Calculate inflation-adjusted withdrawal for the year
3. Subtract withdrawal from balance
4. Repeat for specified number of years

## 🎯 Use Cases

- **Retirement Planning**: Calculate safe withdrawal rates
- **FIRE Movement**: Plan for Financial Independence, Retire Early
- **Investment Strategy**: Test different portfolio return scenarios
- **Educational**: Understand compound interest and inflation impact

## 📊 Technical Details

- **Frontend**: React 18 with Hooks
- **Charts**: Recharts library
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Deployment**: GitHub Actions + GitHub Pages

## 🆘 Troubleshooting

### Common Issues:

1. **App not loading**: Check browser console for errors
2. **Chart not displaying**: Ensure Recharts library loaded properly
3. **Deployment failing**: Check GitHub Actions logs in repository

### Support:
- Check GitHub Actions logs for deployment issues
- Verify all file paths are correct
- Ensure repository is public for GitHub Pages

## 📄 License

MIT License - feel free to modify and redistribute.

---

**Built with ❤️ for the financial planning community**
