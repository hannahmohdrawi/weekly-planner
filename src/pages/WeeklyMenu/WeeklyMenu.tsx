import React from 'react';
import { Container, Typography } from '@mui/material';
import * as styles from './WeeklyMenu.styles';

const WeeklyMenu: React.FC = () => {
  return (
    <Container maxWidth="lg" sx={styles.container}>
      <Typography variant="h4" component="h1" sx={styles.title}>
        Weekly Menu
      </Typography>
      <Typography variant="body1" color="text.secondary">
        Your weekly meal plan will appear here.
      </Typography>
    </Container>
  );
};

export default WeeklyMenu;
