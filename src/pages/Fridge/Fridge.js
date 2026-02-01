import React from 'react';
import { Container, Typography } from '@mui/material';

const Fridge = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" sx={{ fontWeight: 'bold', mb: 2 }}>
        Fridge
      </Typography>
      <Typography variant="body1" color="text.secondary">
        Your fridge items will appear here.
      </Typography>
    </Container>
  );
};

export default Fridge;
