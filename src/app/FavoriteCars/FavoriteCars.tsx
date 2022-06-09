import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { useFavorites } from '../Favorites';
import CarCard from '../CarCard';
import { Link } from '../../ui';

export interface FavoriteCarsProps {}

const FavoriteCars: React.FC<FavoriteCarsProps> = () => {
  const { favorites } = useFavorites();

  return (
    <Container maxWidth="lg" sx={{ my: 3 }}>
      {favorites.length === 0 && (
        <Box textAlign="center">
          <Typography variant="h2">No cars in favorites yet.</Typography>
          <Link to="/cars">Go to Homepage</Link>
        </Box>
      )}
      {favorites.map((favoriteCar) => (
        <Box key={favoriteCar.stockNumber} sx={{ '& + &': { marginTop: 2 } }}>
          <CarCard car={favoriteCar} />
        </Box>
      ))}
    </Container>
  );
};

export default FavoriteCars;
