import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { CircularProgress, Container, Grid, Skeleton, Typography } from '@mui/material';
import { getCars } from '../../api';
import CarsList from '../CarsList';
import CarsFilters from '../CarsFilters';
import { useCarsFiltersState } from './useCarsFiltersState';

export interface CarsPageProps {}

const CarsPage: React.FC<CarsPageProps> = ({}) => {
  const { filters, changeFilter } = useCarsFiltersState();
  const [sort, setSort] = useState();
  // TODO: Pagination
  // TODO: Error Handling
  const { data } = useQuery(
    ['cars', filters, sort],
    (context) => getCars({ page: context.pageParam, ...filters, sort }),
    { keepPreviousData: true },
  );

  const cars = data?.data.cars;
  const totalCarsCount = data?.data.totalCarsCount;

  return (
    <Container maxWidth="lg" sx={{ marginTop: 3 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4} lg={3}>
          <CarsFilters filters={filters} onChange={changeFilter} />
        </Grid>
        <Grid item xs={12} md={8} lg={9} sx={{ '& > * + *': { marginTop: 2 } }}>
          <Typography variant="h2">Available cars</Typography>
          {cars ? (
            <>
              <Typography variant="body1">
                Showing {cars.length} of {totalCarsCount} results
              </Typography>
              <CarsList cars={cars} />
            </>
          ) : (
            <>
              {/*TODO: Upgrade skeleton*/}
              <Skeleton variant="text" />
              {new Array(10).fill(0).map((_, i) => (
                <Skeleton variant="rectangular" height={106} key={i} />
              ))}
            </>
          )}
        </Grid>
      </Grid>
    </Container>
  );
};

export default CarsPage;
