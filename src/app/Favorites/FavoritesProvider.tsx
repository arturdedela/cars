import React, { PropsWithChildren, useEffect, useState } from 'react';
import { FavoritesContext } from './FavoritesContext';
import { Schema } from '../../api';

export const FAVORITES_STORAGE_KEY = 'FAVORITES_CARS';

type FavoritesState<TFavorite> = Record<string | number, TFavorite | null>;

const FavoritesProvider: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  let initialState: FavoritesState<Schema['Car']> = {};

  const storageString = localStorage.getItem(FAVORITES_STORAGE_KEY);
  if (storageString) {
    try {
      initialState = JSON.parse(storageString);
    } catch (error) {
      console.error('Favorites storage state is corrupted.', error);
    }
  }

  const [favoritesMap, setFavoritesMap] = useState<FavoritesState<Schema['Car']>>(initialState);

  useEffect(() => {
    localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(favoritesMap));
  }, [favoritesMap]);

  function addFavorite(favorite: Schema['Car']) {
    setFavoritesMap((prevState) => ({ ...prevState, [favorite.stockNumber!]: favorite }));
  }

  function removeFavorite(favoriteId: string | number) {
    setFavoritesMap({ ...favoritesMap, [favoriteId]: null });
  }

  function isFavorite(favoriteId: string | number): boolean {
    return Boolean(favoritesMap[favoriteId]);
  }

  const favorites = Array.from(Object.values(favoritesMap)).filter((notNull): notNull is Schema['Car'] =>
    Boolean(notNull),
  );

  return (
    <FavoritesContext.Provider value={{ favorites, isFavorite, addFavorite, removeFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesProvider;
