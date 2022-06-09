import { act, renderHook } from '@testing-library/react';
import { useFavorites } from './useFavorites';
import FavoritesProvider, { FAVORITES_STORAGE_KEY } from './FavoritesProvider';
import { Schema } from '../../api';

const CAR_MOCK: Schema['Car'] = {
  stockNumber: 1,
  color: 'black',
  fuelType: 'Petrol',
  mileage: { number: 50000, unit: 'km' },
  modelName: 'M5',
  manufacturerName: 'BMW',
  pictureUrl: '',
};

describe('useFavorites', () => {
  test('should save favorites to local storage', () => {
    const { result } = renderHook(useFavorites, { wrapper: FavoritesProvider });

    act(() => {
      result.current.addFavorite(CAR_MOCK);
    });

    const localStorageRaw = localStorage.getItem(FAVORITES_STORAGE_KEY);
    expect(localStorageRaw).not.toBeNull();

    const localStorageData = JSON.parse(localStorageRaw!);
    expect(localStorageData).toEqual({ [CAR_MOCK.stockNumber!]: CAR_MOCK });
  });

  test('should set to null when remove from favorite', () => {
    const { result } = renderHook(useFavorites, { wrapper: FavoritesProvider });

    act(() => {
      result.current.addFavorite(CAR_MOCK);
    });

    act(() => {
      result.current.removeFavorite(CAR_MOCK.stockNumber!);
    });

    const localStorageRaw = localStorage.getItem(FAVORITES_STORAGE_KEY);
    expect(localStorageRaw).not.toBeNull();

    const localStorageData = JSON.parse(localStorageRaw!);
    expect(localStorageData).toEqual({ [CAR_MOCK.stockNumber!]: null });
  });

  test('should not crash when invalid JSON in localStorage', () => {
    localStorage.setItem(FAVORITES_STORAGE_KEY, '}{@#*R#$%');
    console.error = jest.fn();

    const { result } = renderHook(useFavorites, { wrapper: FavoritesProvider });

    expect(console.error).toBeCalled();

    expect(result.current.favorites).toEqual([]);
  });

  test('should initialize from localStorage', () => {
    localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify({ [CAR_MOCK.stockNumber!]: CAR_MOCK }));

    const { result } = renderHook(useFavorites, { wrapper: FavoritesProvider });

    expect(result.current.favorites).toEqual([CAR_MOCK]);
    expect(result.current.isFavorite(CAR_MOCK.stockNumber!)).toEqual(true);
  });
});
