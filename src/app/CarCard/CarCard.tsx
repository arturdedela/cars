import React from 'react';
import { Grid, Paper, Skeleton, Typography } from '@mui/material';
import { Schema } from '../../api';
import { Link, Image } from '../../ui';
import CarDetails from '../CarDetails';

export interface CarCardProps {
  car?: Schema['Car'];
}

const CarCard: React.FC<CarCardProps> = ({ car }) => {
  return (
    <Paper sx={{ padding: 2, border: 1, borderColor: '#EDEDED' }} elevation={0}>
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
          {car ? <Link to={`/cars/${car.stockNumber}`}>View details</Link> : <Skeleton />}
        </Grid>
      </Grid>
    </Paper>
  );
};

export default CarCard;
