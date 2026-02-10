import React from 'react';
import { Container, Typography } from '@mui/material';

const Recipes = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" sx={{ fontWeight: 'bold', mb: 2 }}>
        Recipes
      </Typography>
      <Typography variant="body1" color="text.secondary">
        Your recipe collection will appear here.
      </Typography>
    </Container>
  );
};

export default Recipes;
