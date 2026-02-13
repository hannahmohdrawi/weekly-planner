import React from 'react';
import { Container, Typography } from '@mui/material';
import * as styles from './BudgetPlanner.styles';

const BudgetPlanner: React.FC = () => {
  return (
    <Container maxWidth="lg" sx={styles.container}>
      <Typography variant="h4" component="h1" sx={styles.title}>
        Budget Planner
      </Typography>
      <Typography variant="body1" color="text.secondary">
        Your budget planning tools will appear here.
      </Typography>
    </Container>
  );
};

export default BudgetPlanner;
