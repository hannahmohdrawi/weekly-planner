import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import {
  Home as HomeIcon,
  Restaurant as RestaurantIcon,
  Kitchen as KitchenIcon,
  CalendarToday as CalendarIcon,
  ShoppingCart as ShoppingCartIcon,
  AccountBalance as AccountBalanceIcon,
} from '@mui/icons-material';
import * as styles from './Header.styles';

interface NavItem {
  label: string;
  path: string;
  icon: React.ElementType;
}

const navItems: NavItem[] = [
  { label: 'Home', path: '/', icon: HomeIcon },
  { label: 'Recipes', path: '/recipes', icon: RestaurantIcon },
  { label: 'Fridge', path: '/fridge', icon: KitchenIcon },
  { label: 'Weekly Menu', path: '/weekly-menu', icon: CalendarIcon },
  { label: 'Grocery List', path: '/grocery-list', icon: ShoppingCartIcon },
  { label: 'Budget Planner', path: '/budget-planner', icon: AccountBalanceIcon },
];

const Header: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <AppBar position="static" sx={styles.appBar}>
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={styles.brand}
        >
          Weekly Recipes
        </Typography>
        <Box sx={styles.navContainer}>
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <Button
                key={item.path}
                startIcon={<Icon />}
                onClick={() => navigate(item.path)}
                sx={styles.navButton(isActive)}
              >
                {!isMobile && item.label}
              </Button>
            );
          })}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
