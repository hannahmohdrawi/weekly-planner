import React from 'react';
import {
  Container,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import * as styles from './Fridge.styles';

interface FridgeItem {
  ingredient: string;
  quantity: number;
  unit: string;
}

const Fridge: React.FC = () => {
  const items: FridgeItem[] = [
    { ingredient: 'Eggs', quantity: 12, unit: 'pcs' },
    { ingredient: 'Milk', quantity: 1, unit: 'L' },
    { ingredient: 'Chicken Breast', quantity: 2, unit: 'lbs' },
  ];

  return (
    <Container maxWidth="lg" sx={styles.container}>
      <Typography variant="h4" component="h1" sx={styles.title}>
        Fridge
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={styles.subtitle}>
        Your fridge items will appear here.
      </Typography>

      <TableContainer component={Paper} sx={styles.tablePaper}>
        <Table aria-label="fridge items table">
          <TableHead>
            <TableRow>
              <TableCell sx={styles.tableHeadCell}>Ingredient</TableCell>
              <TableCell sx={styles.tableHeadCell}>Quantity</TableCell>
              <TableCell sx={styles.tableHeadCell}>Unit</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map((row) => (
              <TableRow key={row.ingredient}>
                <TableCell>{row.ingredient}</TableCell>
                <TableCell>{row.quantity}</TableCell>
                <TableCell>{row.unit}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default Fridge;
