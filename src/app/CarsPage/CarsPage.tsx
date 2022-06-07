import React from 'react';
import { useQuery } from 'react-query';
import { Box, Container, Grid, Skeleton, Typography, Hidden } from '@mui/material';
import { getCars } from '../../api';
import CarsFilters from '../CarsFilters';
import CarCard from '../CarCard';
import { Pagination } from '../../ui';
import { useSearchParams } from 'react-router-dom';

export interface CarsPageProps {}

function isValidSort(sort?: string): sort is 'asc' | 'des' {
  return Boolean(sort && ['asc', 'des'].includes(sort));
}

const CarsPage: React.FC<CarsPageProps> = ({}) => {
  const [searchParams, setSearchParams] = useSearchParams({ page: '1' });
  const currentPage = searchParams.get('page');
  const color = searchParams.get('color') || undefined;
  const manufacturer = searchParams.get('manufacturer') || undefined;
  const rawSort = searchParams.get('sort') || undefined;
  const sort = isValidSort(rawSort) ? rawSort : undefined;

  const { data } = useQuery(
    ['cars', color, manufacturer, sort, currentPage],
    () => getCars({ page: Number(currentPage), color, manufacturer, sort }),
    { keepPreviousData: true },
  );

  const handleChangePage = (page: number) => {
    setSearchParams({ ...Object.fromEntries(searchParams.entries()), page: page.toString() });
  };

  const changeFilter = (name: string, value: string = '') => {
    if (!value) {
      searchParams.delete(name);
    } else {
      searchParams.set(name, value);
    }

    setSearchParams({
      ...Object.fromEntries(searchParams.entries()),
      page: '1',
    });
  };

  const cars = data?.data.cars;
  const totalPageCount = data?.data.totalPageCount;
  const totalCarsCount = data?.data.totalCarsCount;

  const pagination = currentPage && totalPageCount && (
    <Pagination currentPage={Number(currentPage)} totalPages={totalPageCount} onChangePage={handleChangePage} />
  );

  return (
    <Container maxWidth="lg" sx={{ marginTop: 3 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4} lg={3}>
          <CarsFilters
            filters={{ color, manufacturer, sort }}
            onChange={changeFilter}
            sx={{ position: 'sticky', top: 24 }}
          />
        </Grid>
        <Grid item xs={12} md={8} lg={9} sx={{ '& > * + *': { marginTop: 2 } }}>
          <Typography variant="h2">Available cars</Typography>
          {cars ? (
            <>
              <Box display="flex" justifyContent="space-between">
                <Typography variant="body1">
                  Showing {cars.length} of {totalCarsCount} results
                </Typography>
                <Hidden mdDown>{pagination}</Hidden>
              </Box>
              {cars.map((car) => (
                <CarCard key={car.stockNumber} car={car} />
              ))}
            </>
          ) : (
            <>
              <Skeleton variant="text" />
              {new Array(10).fill(0).map((_, i) => (
                <CarCard key={i} />
              ))}
            </>
          )}

          <Box py={3} mt={0}>
            {pagination}
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CarsPage;
