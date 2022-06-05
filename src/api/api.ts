// https://github.com/drwpow/openapi-typescript#openapi-typescript-fetch
import { Fetcher } from 'openapi-typescript-fetch';
import { paths } from './schema';

const fetcher = Fetcher.for<paths>();

fetcher.configure({
  baseUrl: process.env.REACT_APP_BASE_URL,
});

const getCars = fetcher.path('/api/cars').method('get').create();
const getCarByStockNumber = fetcher.path('/api/cars/{stockNumber}').method('get').create();
const getColors = fetcher.path('/api/colors').method('get').create();
const getManufacturers = fetcher.path('/api/manufacturers').method('get').create();

export { getCars, getCarByStockNumber, getColors, getManufacturers };
