import React from 'react';
import { Schema } from '../../api';
import CarCard from '../CarCard';

export interface CarsListProps {
  cars: Schema['Car'][];
}

const CarsList: React.FC<CarsListProps> = ({ cars }) => {
  return (
    <>
      {cars.map((car) => (
        <CarCard key={car.stockNumber} car={car} />
      ))}
    </>
  );
};

export default CarsList;
