import React from 'react';
import { Container, Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';
import * as styles from './Recipes.styles';

const recipes = [
  // TODO: Make this into a database
  {
    id: 1,
    title: 'Avocado Toast',
    description: 'Toasted sourdough topped with smashed avocado and chili flakes.',
    image: 'https://gimmedelicious.com/wp-content/uploads/2016/07/avocado-toast-7-of-13.jpg',
  },
  {
    id: 2,
    title: 'Beef Tacos',
    description: 'Soft tortillas filled with seasoned beef and fresh toppings.',
    image: 'https://tse3.mm.bing.net/th/id/OIP.XshzlcsE2bGWql2QELtpMwHaLH?rs=1&pid=ImgDetMain&o=7&rm=3',
  },
  {
    id: 3,
    title: 'Grilled Salmon',
    description: 'Salmon fillet grilled with lemon and herbs.',
    image: 'https://www.cookingclassy.com/wp-content/uploads/2018/05/grilled-lemon-herb-salmon-7.jpg',
  },
  {
    id: 4,
    title: 'Massaman Curry',
    description: 'Chicken marinated and cooked in a rich and aromatic curry sauce.',
    image: 'https://tse3.mm.bing.net/th/id/OIP.7re2SAK6PB769LpYC1L9mQHaJ4?rs=1&pid=ImgDetMain&o=7&rm=3',
  },
  {
    id: 5,
    title: 'Chicken Pot Pie',
    description: 'Creamy Chicken wrapped in flaky pastry.',
    image: 'https://tse3.mm.bing.net/th/id/OIP.BJT8aOJ3qn3PZUQwRuRuDAHaLH?rs=1&pid=ImgDetMain&o=7&rm=3',
  },
  {
    id: 6,
    title: 'Nasi Lemak',
    description: 'Fragrant coconut rice served with a side of spicy sambal and a fried egg.',
    image: 'https://farahjeats.com/wp-content/uploads/2023/03/IMG_6683_jpg-1.jpg',
  },
]

const Recipes = () => {
  return (
    <Container maxWidth="lg" sx={styles.container}>
    <Typography variant="h4" component="h1" sx={styles.title}>
      Recipes
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
  </Container>
  );
};

export default Recipes;
