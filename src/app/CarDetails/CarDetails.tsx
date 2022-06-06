import React from 'react';
import { styled, Typography, TypographyProps } from '@mui/material';
import { Schema } from '../../api';

export interface CarDetailsProps {
  car: Schema['Car'];
  variant: TypographyProps['variant'];
}

const Capitalize = styled('span')({ textTransform: 'capitalize' });

const CarDetails: React.FC<CarDetailsProps> = ({ car, variant }) => {
  return (
    <Typography variant={variant}>
      Stock # {car.stockNumber} - {car.mileage?.number?.toString().match(/\d{3}/g)?.join('.')} {car.mileage?.unit} -{' '}
      {car.fuelType} - <Capitalize>{car.color}</Capitalize>
    </Typography>
  );
};

export default CarDetails;
