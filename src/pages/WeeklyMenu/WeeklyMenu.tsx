import React, { useState, useEffect } from 'react';
import { Container, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton } from '@mui/material';
import * as styles from './WeeklyMenu.styles';
import ClearIcon from '@mui/icons-material/Clear';
import DeleteIcon from '@mui/icons-material/Delete';


const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const mealTypes = ['Breakfast', 'Lunch', 'Dinner'];

const WeeklyMenu: React.FC = () => {
  const [weeklyMenu, setWeeklyMenu] = useState<any>({});

  useEffect(() => {
    // TODO: Loading menu from local storage will be backend
    const savedMenu = JSON.parse(localStorage.getItem('weeklyMenu') || '{}');
    setWeeklyMenu(savedMenu);
  }, []);

  const clearMeal = (day: string, mealType: string) => {
    const updatedMenu = { ...weeklyMenu };
    if (updatedMenu[day]) {
      delete updatedMenu[day][mealType];
      if (Object.keys(updatedMenu[day]).length === 0) {
        delete updatedMenu[day];
      }
      localStorage.setItem('weeklyMenu', JSON.stringify(updatedMenu));
      setWeeklyMenu(updatedMenu);
    }
  };

  const clearDay = (day: string) => {
    const updatedMenu = { ...weeklyMenu };
    delete updatedMenu[day];
    localStorage.setItem('weeklyMenu', JSON.stringify(updatedMenu));
    setWeeklyMenu(updatedMenu);
  };

  const renderMeal = (day: string, mealType: string) => {
    const meal = weeklyMenu[day]?.[mealType]?.title;
    if (!meal) return '-';
    
    return (
      <span>
        {meal}
        <IconButton size="small" onClick={() => clearMeal(day, mealType)} sx={{ ml: 1 }}>
          <ClearIcon fontSize="small" />
        </IconButton>
      </span>
    );
  };

  return (
    <Container maxWidth="lg" sx={styles.container}>
      <Typography variant="h4" component="h1" sx={styles.title}>
        Weekly Menu
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
        Your weekly meal plan will appear here.
      </Typography>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><strong>Day</strong></TableCell>
              <TableCell><strong>Breakfast</strong></TableCell>
              <TableCell><strong>Lunch</strong></TableCell>
              <TableCell><strong>Dinner</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {daysOfWeek.map((day) => (
              <TableRow key={day}>
                <TableCell component="th" scope="row">
                  {day}
                </TableCell>
                <TableCell>{renderMeal(day, 'Breakfast')}</TableCell>
                <TableCell>{renderMeal(day, 'Lunch')}</TableCell>
                <TableCell>{renderMeal(day, 'Dinner')}</TableCell>
                <TableCell align="center">
                  <IconButton size="small" onClick={() => clearDay(day)} color="error">
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default WeeklyMenu;