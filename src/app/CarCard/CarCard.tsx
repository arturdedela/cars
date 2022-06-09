import React from 'react';
import { Grid, Paper, Skeleton, Typography } from '@mui/material';
import { Schema } from '../../api';
import { Link, Image, FavoriteButton } from '../../ui';
import CarDetails from '../CarDetails';
import { useFavorites } from '../Favorites';

export interface CarCardProps {
  car?: Schema['Car'];
}

const CarCard: React.FC<CarCardProps> = ({ car }) => {
  const { isFavorite, addFavorite, removeFavorite } = useFavorites();

  return (
    <Paper sx={{ padding: 2, border: 1, borderColor: '#EDEDED', position: 'relative' }} elevation={0}>
      <Grid container spacing={3}>
        <Grid item>
          {car ? (
            <Image src={car.pictureUrl} width={100} height={80} alt={car.modelName} />
          ) : (
            <Skeleton variant="rectangular" width={100} height={80} />
          )}
        </Grid>
        <Grid item flex={1}>
          <Typography variant="h2">{car ? `${car.manufacturerName} ${car.modelName}` : <Skeleton />}</Typography>
          <Typography variant="body2" my={1}>
            {car ? <CarDetails car={car} /> : <Skeleton />}
          </Typography>
          {car ? (
            <Typography variant="body2">
              <Link to={`/cars/${car.stockNumber}`}>View details</Link>
            </Typography>
          ) : (
            <Skeleton />
          )}
        </Grid>
      </Grid>
      {car && (
        <FavoriteButton
          sx={{ position: 'absolute', bottom: 5, right: 5 }}
          isFavorite={isFavorite(car.stockNumber!)}
          onClick={(favorite) => (favorite ? removeFavorite(car.stockNumber!) : addFavorite(car))}
        />
      )}
    </Paper>
  );
};

export default CarCard;
