import React from 'react';
import { Container, Typography } from '@mui/material';
import * as styles from './GroceryList.styles';

const GroceryList: React.FC = () => {
  return (
    <Container maxWidth="lg" sx={styles.container}>
      <Typography variant="h4" component="h1" sx={styles.title}>
        Grocery List
      </Typography>
      <Typography variant="body1" color="text.secondary">
        Your grocery list will appear here.
      </Typography>
    </Container>
  );
};

export default GroceryList;
