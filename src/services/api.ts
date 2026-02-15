const API_BASE_URL = 'http://localhost:8080/api';

export const recipeAPI = {
  // Get all fridge items
  getAllItems: async () => {
    const response = await fetch(`${API_BASE_URL}/recipe`);
    if (!response.ok) throw new Error('Failed to fetch items');
    return response.json();
  },

  // Add new item
  addItem: async (item: { ingredient: string; quantity: number; unit: string }) => {
    const response = await fetch(`${API_BASE_URL}/recipe`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(item),
    });
    if (!response.ok) throw new Error('Failed to add item');
    return response.json();
  },

  // Delete item
  deleteItem: async (id: number) => {
    const response = await fetch(`${API_BASE_URL}/recipe/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) throw new Error('Failed to delete item');
  },

  // Update item
  updateItem: async (id: number, item: { ingredient: string; quantity: number; unit: string }) => {
    const response = await fetch(`${API_BASE_URL}/recipe/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(item),
    });
    if (!response.ok) throw new Error('Failed to update item');
    return response.json();
  },
};