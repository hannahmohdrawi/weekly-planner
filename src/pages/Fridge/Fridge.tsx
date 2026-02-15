import React, { useState, useEffect } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';

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
  IconButton
} from '@mui/material';
import * as styles from './Fridge.styles';

interface FridgeItem {
  ingredient: string;
  quantity: number;
  unit: string;
};

const initialItems: FridgeItem[] = [
    { ingredient: 'Eggs', quantity: 12, unit: 'pcs' },
    { ingredient: 'Milk', quantity: 1, unit: 'L' },
    { ingredient: 'Chicken Breast', quantity: 2, unit: 'lbs' },
  ];

const Fridge: React.FC = () => {
  const [items, setItems] = useState<FridgeItem[]>([]);
  

  useEffect(() => {
    // TODO backend database for ingredients currently loading from localStorage
    const savedItems = localStorage.getItem('fridgeItems');
    if (savedItems) {
      setItems(JSON.parse(savedItems));
    } else {
      setItems(initialItems);
      localStorage.setItem('fridgeItems', JSON.stringify(initialItems));
    }
  }, []);

  const clearIngredient = (ingredient: string) => {
    const updatedItems = items.filter(item => item.ingredient !== ingredient);
    setItems(updatedItems);
    localStorage.setItem('fridgeItems', JSON.stringify(updatedItems));
  };

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
                <TableCell align="center">
                  <IconButton size="small" onClick={() => clearIngredient(row.ingredient)} color="error">
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default Fridge;
