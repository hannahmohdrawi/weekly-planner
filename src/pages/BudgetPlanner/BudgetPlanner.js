import React from 'react';
import { Container, Typography } from '@mui/material';

const BudgetPlanner = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" sx={{ fontWeight: 'bold', mb: 2 }}>
        Budget Planner
      </Typography>
      <Typography variant="body1" color="text.secondary">
        Your budget planning tools will appear here.
      </Typography>
    </Container>
  );
};

export default BudgetPlanner;
