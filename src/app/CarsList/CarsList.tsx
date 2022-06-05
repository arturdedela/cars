import React from 'react';
import { Schema } from '../../api';

export interface CarsListProps {
  cars: Schema['Car'][];
}

const CarsList: React.FC<CarsListProps> = ({ cars }) => {
  return (
    <>
      {cars.map((car) => (
        <div key={car.stockNumber}>
          {car.manufacturerName} | {car.modelName}
        </div>
      ))}
    </>
  );
};

export default CarsList;
