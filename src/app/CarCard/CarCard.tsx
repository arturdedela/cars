import React from 'react';
import { Box, Grid, Paper, styled, Typography } from '@mui/material';
import { Schema } from '../../api';
import { Link, Image } from '../../ui';

export interface CarCardProps {
  car: Schema['Car'];
}

const Capitalize = styled('span')({ textTransform: 'capitalize' });

const CarCard: React.FC<CarCardProps> = ({ car }) => {
  return (
    <Paper sx={{ padding: 2, border: 1, borderColor: '#EDEDED' }} elevation={0}>
      <Grid container spacing={3}>
        <Grid item>
          <Image src={car.pictureUrl} width={100} height={80} alt={car.modelName} />
        </Grid>
        <Grid item>
          <Typography variant="h2">
            {car.manufacturerName} {car.modelName}
          </Typography>
          <Box my={1}>
            <Typography variant="body2">
              Stock # {car.stockNumber} - {car.mileage?.number?.toString().match(/\d{3}/g)?.join('.')}{' '}
              {car.mileage?.unit} - {car.fuelType} - <Capitalize>{car.color}</Capitalize>
            </Typography>
          </Box>
          <Link to={`/cars/${car.stockNumber}`}>View details</Link>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default CarCard;
