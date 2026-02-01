import React from 'react';
import { Container, Typography } from '@mui/material';

const WeeklyMenu = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" sx={{ fontWeight: 'bold', mb: 2 }}>
        Weekly Menu
      </Typography>
      <Typography variant="body1" color="text.secondary">
        Your weekly meal plan will appear here.
      </Typography>
    </Container>
  );
};

export default WeeklyMenu;
