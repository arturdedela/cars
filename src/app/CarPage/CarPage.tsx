import React from 'react';
import { Box, Container, Skeleton, Typography } from '@mui/material';
import { Navigate, useParams } from 'react-router-dom';
import { ApiError } from 'openapi-typescript-fetch';
import { useQuery } from 'react-query';
import { getCarByStockNumber } from '../../api';
import CarDetails from '../CarDetails';

export interface CarPageProps {}

const CarPage: React.FC<CarPageProps> = () => {
  const { carId } = useParams<'carId'>();

  const carStockNumber = Number(carId);
  const isValidStockNumber = !isNaN(carStockNumber);

  const { data, error } = useQuery({
    queryKey: ['car', carId],
    queryFn: () => getCarByStockNumber({ stockNumber: carStockNumber }),
    enabled: isValidStockNumber,
    retry: (failureCount, error: ApiError) => {
      if (error.status === 404) {
        return false;
      }

      return failureCount < 3;
    },
  });

  if (!isValidStockNumber || error?.status === 404) {
    return <Navigate to="/404" />;
  }

  const car = data?.data.car;

  return (
    <Container maxWidth="lg">
      {car ? (
        <>
          <Typography variant="h2">
            {car.manufacturerName} {car.modelName}
          </Typography>
          <Box my={1}>
            <CarDetails variant="body1" car={car} />
          </Box>
        </>
      ) : (
        <Skeleton />
      )}
    </Container>
  );
};

export default CarPage;
