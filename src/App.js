import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Recipes from './pages/Recipes/Recipes';
import Fridge from './pages/Fridge/Fridge';
import WeeklyMenu from './pages/WeeklyMenu/WeeklyMenu';
import GroceryList from './pages/GroceryList/GroceryList';
import BudgetPlanner from './pages/BudgetPlanner/BudgetPlanner';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
    background: {
      default: '#f5f5f5',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/recipes" element={<Recipes />} />
            <Route path="/fridge" element={<Fridge />} />
            <Route path="/weekly-menu" element={<WeeklyMenu />} />
            <Route path="/grocery-list" element={<GroceryList />} />
            <Route path="/budget-planner" element={<BudgetPlanner />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
