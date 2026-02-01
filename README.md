# Weekly Recipes - Meal Planning App

A React application built with Material-UI (MUI) for meal planning, budget tracking, and grocery shopping organization.

## Features

- **Home Dashboard**: Overview with summary cards and quick access buttons
- **Recipes**: Manage your recipe collection
- **Fridge**: Track items in your fridge
- **Weekly Menu**: Plan your meals for the week
- **Grocery List**: Organize your shopping list
- **Budget Planner**: Track your food budget

## Project Structure

```
weekly-planner/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Header/
│   │   │   ├── Header.js
│   │   │   └── index.js
│   │   ├── SummaryCard/
│   │   │   ├── SummaryCard.js
│   │   │   └── index.js
│   │   └── QuickAccessButton/
│   │       ├── QuickAccessButton.js
│   │       └── index.js
│   ├── pages/
│   │   ├── Home/
│   │   │   ├── Home.js
│   │   │   └── index.js
│   │   ├── Recipes/
│   │   │   ├── Recipes.js
│   │   │   └── index.js
│   │   ├── Fridge/
│   │   │   ├── Fridge.js
│   │   │   └── index.js
│   │   ├── WeeklyMenu/
│   │   │   ├── WeeklyMenu.js
│   │   │   └── index.js
│   │   ├── GroceryList/
│   │   │   ├── GroceryList.js
│   │   │   └── index.js
│   │   └── BudgetPlanner/
│   │       ├── BudgetPlanner.js
│   │       └── index.js
│   ├── App.js
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

## Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000)

## Technologies Used

- React 18
- Material-UI (MUI) 5
- React Router DOM 6
- Emotion (for MUI styling)

## Folder Structure Explanation

- **components/**: Reusable UI components (Header, SummaryCard, QuickAccessButton)
- **pages/**: Page-level components for each route
- Each component/page has its own folder with the component file and an index.js for clean imports
