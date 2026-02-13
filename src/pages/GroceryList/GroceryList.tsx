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
import * as styles from './GroceryList.styles';

interface GroceryListItem {
  ingredient: string;
  quantity: number;
  unit: string;
}

const GroceryList: React.FC = () => {
  const items: GroceryListItem[] = [
    { ingredient: 'Beef Mince', quantity: 500, unit: 'grams' },
    { ingredient: 'Milk', quantity: 1, unit: 'L' },
    { ingredient: 'Cheddar Cheese', quantity: 250, unit: 'grams' },
  ];

  return (
    <Container maxWidth="lg" sx={styles.container}>
      <Typography variant="h4" component="h1" sx={styles.title}>
        GroceryList
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={styles.subtitle}>
        Your grocery list items will appear here.
      </Typography>

      <TableContainer component={Paper} sx={styles.tablePaper}>
        <Table aria-label="grocery items table">
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

export default GroceryList;
