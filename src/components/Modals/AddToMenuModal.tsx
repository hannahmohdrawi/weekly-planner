import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
  Box,
  Typography
} from '@mui/material';

interface AddToMenuModalProps {
  open: boolean;
  onClose: () => void;
  onAdd: (day: string, mealType: string) => void;
  recipeName: string;
}

const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const mealTypes = ['Breakfast', 'Lunch', 'Dinner'];

const AddToMenuModal: React.FC<AddToMenuModalProps> = ({ open, onClose, onAdd, recipeName }) => {
  const [selectedDay, setSelectedDay] = useState('');
  const [selectedMealType, setSelectedMealType] = useState('');

  const handleDayChange = (event: SelectChangeEvent) => {
    setSelectedDay(event.target.value);
  };

  const handleMealTypeChange = (event: SelectChangeEvent) => {
    setSelectedMealType(event.target.value);
  };

  const handleAdd = () => {
    if (selectedDay && selectedMealType) {
      onAdd(selectedDay, selectedMealType);
      // Reset selections
      setSelectedDay('');
      setSelectedMealType('');
      onClose();
    }
  };

  const handleCancel = () => {
    // Reset selections
    setSelectedDay('');
    setSelectedMealType('');
    onClose();
  };

  return (
    <Dialog open={open} onClose={handleCancel} maxWidth="sm" fullWidth>
      <DialogTitle>Add to Weekly Menu</DialogTitle>
      <DialogContent>
        <Box sx={{ mt: 2 }}>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
            Adding: <strong>{recipeName}</strong>
          </Typography>

          <FormControl fullWidth sx={{ mb: 3 }}>
            <InputLabel>Day of Week</InputLabel>
            <Select
              value={selectedDay}
              label="Day of Week"
              onChange={handleDayChange}
            >
              {daysOfWeek.map((day) => (
                <MenuItem key={day} value={day}>
                  {day}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl fullWidth>
            <InputLabel>Meal Type</InputLabel>
            <Select
              value={selectedMealType}
              label="Meal Type"
              onChange={handleMealTypeChange}
            >
              {mealTypes.map((meal) => (
                <MenuItem key={meal} value={meal}>
                  {meal}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      </DialogContent>
      <DialogActions sx={{ px: 3, pb: 2 }}>
        <Button onClick={handleCancel} color="inherit">
          Cancel
        </Button>
        <Button 
          onClick={handleAdd} 
          variant="contained" 
          disabled={!selectedDay || !selectedMealType}
        >
          Add to Menu
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddToMenuModal;