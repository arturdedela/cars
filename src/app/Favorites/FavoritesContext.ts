import React from 'react';
import { Schema } from '../../api';

export interface IFavoritesContext {
  readonly favorites: Schema['Car'][];
  readonly addFavorite: (favoriteItem: Schema['Car']) => void;
  readonly removeFavorite: (id: number) => void;
  readonly isFavorite: (id: number) => boolean;
}

export const FavoritesContext = React.createContext<IFavoritesContext | null>(null);
