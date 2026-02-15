import { Container, Typography, Grid, Card, CardContent, CardMedia, IconButton, Box } from '@mui/material';
import * as styles from './Recipes.styles';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddIcon from '@mui/icons-material/Add';
import CheckIcon from '@mui/icons-material/Check';
import React, { useState } from 'react';
import AddToMenuModal from '../../components/Modals/AddToMenuModal';

interface Recipe {
  id: number;
  title: string;
  description: string;
  image: string;
  isFavorite: boolean;
  isAdded: boolean;
}

const initialRecipes: Recipe[] = [
  // TODO: Map this into a database
  {
    id: 1,
    title: 'Avocado Toast',
    description: 'Toasted sourdough topped with smashed avocado and chili flakes.',
    image: 'https://gimmedelicious.com/wp-content/uploads/2016/07/avocado-toast-7-of-13.jpg',
    isFavorite: false,
    isAdded: false
  },
  {
    id: 2,
    title: 'Beef Tacos',
    description: 'Soft tortillas filled with seasoned beef and fresh toppings.',
    image: 'https://tse3.mm.bing.net/th/id/OIP.XshzlcsE2bGWql2QELtpMwHaLH?rs=1&pid=ImgDetMain&o=7&rm=3',  
    isFavorite: false,
    isAdded: false
  },
  {
    id: 3,
    title: 'Grilled Salmon',
    description: 'Salmon fillet grilled with lemon and herbs.',
    image: 'https://www.cookingclassy.com/wp-content/uploads/2018/05/grilled-lemon-herb-salmon-7.jpg',  
    isFavorite: false,
    isAdded: false,
  },
  {
    id: 4,
    title: 'Massaman Curry',
    description: 'Chicken marinated and cooked in a rich and aromatic curry sauce.',
    image: 'https://tse3.mm.bing.net/th/id/OIP.7re2SAK6PB769LpYC1L9mQHaJ4?rs=1&pid=ImgDetMain&o=7&rm=3',  
    isFavorite: false,
    isAdded: false
  },
  {
    id: 5,
    title: 'Chicken Pot Pie',
    description: 'Creamy Chicken wrapped in flaky pastry.',
    image: 'https://tse3.mm.bing.net/th/id/OIP.BJT8aOJ3qn3PZUQwRuRuDAHaLH?rs=1&pid=ImgDetMain&o=7&rm=3',  
    isFavorite: false,
    isAdded: false
  },
  {
    id: 6,
    title: 'Nasi Lemak',
    description: 'Fragrant coconut rice served with a side of spicy sambal and a fried egg.',
    image: 'https://farahjeats.com/wp-content/uploads/2023/03/IMG_6683_jpg-1.jpg',  
    isFavorite: false,
    isAdded: false
  },
];

const Recipes: React.FC = () => {
  const [recipes, setRecipes] = useState<Recipe[]>(initialRecipes);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);

  const toggleFavorite = (id: number) => {
    setRecipes(recipes.map(recipe => 
      recipe.id === id ? { ...recipe, isFavorite: !recipe.isFavorite } : recipe
    ));
  };

  const handleAddClick = (recipe: Recipe) => {
    setSelectedRecipe(recipe);
    setModalOpen(true);
  };

  const handleAddToMenu = (day: string, mealType: string) => {
    if (selectedRecipe) {
      // Saving to LocalStorage TODO add to backend
      const weeklyMenu = JSON.parse(localStorage.getItem('weeklyMenu') || '{}');
      
      if (!weeklyMenu[day]) {
        weeklyMenu[day] = {};
      }
      
      weeklyMenu[day][mealType] = {
        id: selectedRecipe.id,
        title: selectedRecipe.title,
        description: selectedRecipe.description,
        image: selectedRecipe.image
      };
      
      localStorage.setItem('weeklyMenu', JSON.stringify(weeklyMenu));
      
      // Mark recipe as added
      setRecipes(recipes.map(recipe => 
        recipe.id === selectedRecipe.id ? { ...recipe, isAdded: true } : recipe
      ));
      
      console.log(`Added ${selectedRecipe.title} to ${day} - ${mealType}`);
    }
  };

  return (
    <Container maxWidth="lg" sx={styles.container}>
      <Typography variant="h4" component="h1" sx={styles.title}>
        Recipes
      </Typography>

      {/* Favorites Section */}
      {recipes.some(recipe => recipe.isFavorite) && (
        <>
          <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2, mt: 2 }}>
            Favorites
          </Typography>
          <Grid container spacing={2} sx={{ mb: 4 }}>
            {recipes
              .filter(recipe => recipe.isFavorite)
              .map((recipe) => (
                <Grid item xs={6} sm={4} md={3} key={`fav-${recipe.id}`}>
                  <Card sx={{ ...styles.card }}>
                    <CardContent sx={{ ...styles.cardContent, p: 1.5, pb: 5 }}>
                      <Typography variant="subtitle2" sx={{ ...styles.cardTitle, fontSize: 16 }}>
                        {recipe.title}
                      </Typography>
                      <Typography sx={{ ...styles.cardDescription, fontSize: 12 }}>
                        {recipe.description}
                      </Typography>
                    </CardContent>
                    <CardMedia
                      component="img"
                      image={recipe.image}
                      alt={recipe.title}
                      sx={{ ...styles.cardMedia, width: 100 }}
                    />
                  </Card>
                </Grid>
              ))}
          </Grid>
        </>
      )}

      {/* All Recipes Section */}
      <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
        All Recipes
      </Typography>
      <Grid container spacing={3} sx={styles.grid}>
        {recipes.map((recipe) => (
          <Grid item xs={12} sm={6} md={4} key={recipe.id}>
            <Card sx={styles.card}>
              <CardContent sx={styles.cardContent}>
                <Typography variant="h6" sx={styles.cardTitle}>
                  {recipe.title}
                </Typography>
                <Typography sx={styles.cardDescription}>
                  {recipe.description}
                </Typography>
                <Box sx={styles.box}>
                  <IconButton sx={styles.buttons} 
                  size='small' 
                  onClick={() => toggleFavorite(recipe.id)}
                  >
                    {recipe.isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                  </IconButton>
                  <IconButton sx={styles.buttons} 
                  size='small' 
                  onClick={() => handleAddClick(recipe)}
                  > 
                    {recipe.isAdded ? <CheckIcon /> : <AddIcon />}
                  </IconButton>
                </Box>
              </CardContent>
              <CardMedia
                component="img"
                image={recipe.image}
                alt={recipe.title}
                sx={styles.cardMedia}
              />
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Add to Menu Modal */}
      <AddToMenuModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        onAdd={handleAddToMenu}
        recipeName={selectedRecipe?.title || ''}
      />
    </Container>
  );
};

export default Recipes;
