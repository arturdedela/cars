import React from 'react';
import { Box, Button, Container, Grid, LinearProgress, Paper, Typography } from '@mui/material';
import { Navigate, useParams } from 'react-router-dom';
import { ApiError } from 'openapi-typescript-fetch';
import { useQuery } from 'react-query';
import { getCarByStockNumber } from '../../api';
import CarDetails from '../CarDetails';
import { Image } from '../../ui';

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

  if (!car) {
    return <LinearProgress />;
  }

  return (
    <>
      <Box sx={{ background: '#EDEDED', py: 2 }}>
        <Container maxWidth="md">
          <Image src={car.pictureUrl} width={310} height={260} />
        </Container>
      </Box>
      <Container maxWidth="md">
        <Grid container spacing={3} padding={3}>
          <Grid item md={8}>
            <Typography variant="h1">
              {car.manufacturerName} {car.modelName}
            </Typography>
            <Box my={1}>
              <CarDetails variant="body1" car={car} />
            </Box>
            <Typography variant="body2">
              This car is currently available and can be delivered as soon as tomorrow morning. Please be aware of that
              delivery times shown in this page are not definitive and may change due to bad weather conditions.
            </Typography>
          </Grid>
          <Grid item md={4}>
            <Paper sx={{ padding: 3 }}>
              <Typography>
                If you like this car, click the button and save it in your collection of favourite items
              </Typography>
              <Box mt={2} textAlign="right">
                <Button variant="contained" color="primary">
                  Save
                </Button>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default CarPage;
