import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { getCars } from '../../api';
import CarsList from '../CarsList';
import { Container, Grid } from '@mui/material';

export interface CarsPageProps {}

const CarsPage: React.FC<CarsPageProps> = ({}) => {
  const [color, setColor] = useState();
  const [manufacturer, setManufacturer] = useState();
  const [sort, setSort] = useState();

  const { isLoading, data } = useQuery(
    ['cars'],
    (context) => getCars({ page: context.pageParam, color, manufacturer, sort }),
    {},
  );

  return (
    <Container maxWidth="xl">
      <Grid container spacing={2}>
        <Grid item xs={12} md={4} lg={3}>
          Filters
        </Grid>
        <Grid item xs={12} md={8} lg={9}>
          {data?.data.cars && <CarsList cars={data.data.cars} />}
        </Grid>
      </Grid>
    </Container>
  );
};

export default CarsPage;
