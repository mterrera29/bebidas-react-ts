import { StateCreator } from 'zustand';
import { Recipe } from '../types';
import {
  createNotificationSlice,
  NotificationSliceType,
} from './notificationSlice';

export type FavoritesSliceType = {
  favorites: Recipe[];
  handleClickFavorite: (recipe: Recipe) => void;
  loadFromStorage: () => void;
  favoriteExist: (id: Recipe['idDrink']) => boolean;
};

export const createFavoritesSlice: StateCreator<
  FavoritesSliceType & NotificationSliceType,
  [],
  [],
  FavoritesSliceType
> = (set, get, api) => ({
  favorites: [],
  handleClickFavorite: (recipe) => {
    if (
      get().favorites.some((favorite) => favorite.idDrink === recipe.idDrink)
    ) {
      set((state) => ({
        favorites: state.favorites.filter(
          (fav) => fav.idDrink !== recipe.idDrink
        ),
      }));
      createNotificationSlice(set, get, api).showNotification({
        text: 'Se eliminó de favoritos',
        error: false,
      });
    } else {
      set((state) => ({
        favorites: [...state.favorites, recipe],
      }));
      createNotificationSlice(set, get, api).showNotification({
        text: 'Se agregó a favoritos',
        error: false,
      });
    }
    localStorage.setItem('favorites', JSON.stringify(get().favorites));
  },
  loadFromStorage: () => {
    const storedFavorites = localStorage.getItem('favorites');
    if (storedFavorites) {
      set({
        favorites: JSON.parse(storedFavorites),
      });
    }
  },
  favoriteExist: (id) => {
    return get().favorites.some((fav) => fav.idDrink === id);
  },
});
