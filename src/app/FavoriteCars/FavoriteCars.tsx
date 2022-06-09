import React from 'react';
import { Box, Container } from '@mui/material';
import { useFavorites } from '../Favorites';
import CarCard from '../CarCard';

export interface FavoriteCarsProps {}

const FavoriteCars: React.FC<FavoriteCarsProps> = () => {
  const { favorites } = useFavorites();

  return (
    <Container maxWidth="lg" sx={{ my: 3 }}>
      {favorites.map((favoriteCar) => (
        <Box key={favoriteCar.stockNumber} sx={{ '& + &': { marginTop: 2 } }}>
          <CarCard car={favoriteCar} />
        </Box>
      ))}
    </Container>
  );
};

export default FavoriteCars;
