import React from 'react';
import { styled } from '@mui/material';
import { Schema } from '../../api';

export interface CarDetailsProps {
  car: Schema['Car'];
}

const Capitalize = styled('span')({ textTransform: 'capitalize' });

const CarDetails: React.FC<CarDetailsProps> = ({ car }) => {
  return (
    <>
      Stock # {car.stockNumber} - {car.mileage?.number?.toString().match(/\d{3}/g)?.join('.')} {car.mileage?.unit} -{' '}
      {car.fuelType} - <Capitalize>{car.color}</Capitalize>
    </>
  );
};

export default CarDetails;
