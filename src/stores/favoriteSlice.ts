import { StateCreator } from 'zustand';
import { Recipe } from '../types';

export type FavoritesSliceType = {
  favorites: Recipe[];
  handleClickFavorite: (recipe: Recipe) => void;
  loadFromStorage: () => void;
  favoriteExist: (id: Recipe['idDrink']) => boolean;
};

export const createFavoritesSlice: StateCreator<FavoritesSliceType> = (
  set,
  get
) => ({
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
    } else {
      set((state) => ({
        favorites: [...state.favorites, recipe],
      }));
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
