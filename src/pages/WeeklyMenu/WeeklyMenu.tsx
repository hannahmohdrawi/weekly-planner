import React, { useState, useEffect } from 'react';
import { Container, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import * as styles from './WeeklyMenu.styles';

const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const WeeklyMenu: React.FC = () => {
  const [weeklyMenu, setWeeklyMenu] = useState<any>({});

  useEffect(() => {
    // TODO: Loading menu from local storage will be backend
    const savedMenu = JSON.parse(localStorage.getItem('weeklyMenu') || '{}');
    setWeeklyMenu(savedMenu);
  }, []);

  const getMeal = (day: string, mealType: string) => {
    return weeklyMenu[day]?.[mealType]?.title || '-';
  }

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
                <TableCell>{getMeal(day, 'Breakfast')}</TableCell>
                <TableCell>{getMeal(day, 'Lunch')}</TableCell>
                <TableCell>{getMeal(day, 'Dinner')}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default WeeklyMenu;