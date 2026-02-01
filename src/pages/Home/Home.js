import React from 'react';
import { Container, Typography, Grid, Fab } from '@mui/material';
import HelpIcon from '@mui/icons-material/Help';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import KitchenIcon from '@mui/icons-material/Kitchen';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import SummaryCard from '../../components/SummaryCard/SummaryCard';
import QuickAccessButton from '../../components/QuickAccessButton/QuickAccessButton';

const Home = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h3" component="h1" sx={{ fontWeight: 'bold', mb: 2 }}>
        Welcome to Weekly Recipes
      </Typography>
      <Typography variant="body1" sx={{ mb: 4, color: 'text.secondary' }}>
        Plan your meals, track your budget, and organize your grocery shopping all in one place.
      </Typography>

      <Grid container spacing={3} sx={{ mb: 5 }}>
        <Grid item xs={12} sm={6} md={3}>
          <SummaryCard
            icon={RestaurantIcon}
            value="4"
            label="Total Recipes"
            iconColor="#1976d2"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <SummaryCard
            icon={KitchenIcon}
            value="5"
            label="Fridge Items"
            iconColor="#2e7d32"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <SummaryCard
            icon={CalendarTodayIcon}
            value="3"
            label="Planned Meals"
            iconColor="#ed6c02"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <SummaryCard
            icon={TrendingUpIcon}
            value="$133.00"
            label="Budget Remaining"
            iconColor="#2e7d32"
          />
        </Grid>
      </Grid>

      <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', mb: 3 }}>
        Quick Access
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={2.4}>
          <QuickAccessButton
            icon={RestaurantIcon}
            label="Recipes"
            path="/recipes"
            iconColor="#1976d2"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={2.4}>
          <QuickAccessButton
            icon={KitchenIcon}
            label="Fridge"
            path="/fridge"
            iconColor="#2e7d32"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={2.4}>
          <QuickAccessButton
            icon={CalendarTodayIcon}
            label="Weekly Menu"
            path="/weekly-menu"
            iconColor="#ed6c02"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={2.4}>
          <QuickAccessButton
            icon={ShoppingCartIcon}
            label="Grocery List"
            path="/grocery-list"
            iconColor="#9c27b0"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={2.4}>
          <QuickAccessButton
            icon={AccountBalanceIcon}
            label="Budget Planner"
            path="/budget-planner"
            iconColor="#d32f2f"
          />
        </Grid>
      </Grid>

      <Fab
        color="primary"
        aria-label="help"
        sx={{
          position: 'fixed',
          bottom: 16,
          right: 16,
        }}
      >
        <HelpIcon />
      </Fab>
    </Container>
  );
};

export default Home;
