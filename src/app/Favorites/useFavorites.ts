import { useContext } from 'react';
import { FavoritesContext, IFavoritesContext } from './FavoritesContext';

export function useFavorites(): IFavoritesContext {
  const favoritesContext = useContext(FavoritesContext);

  if (!favoritesContext) {
    throw new Error('FavoritesContext is null. You must wrap components with FavoritesProvider.');
  }

  return favoritesContext;
}
