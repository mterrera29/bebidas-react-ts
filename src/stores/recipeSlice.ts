import { StateCreator } from 'zustand';
import {
  getCategoriesAxios,
  getFilters,
  getRecipeById,
} from '../services/RecipeService';
import { Categories, Drink, Drinks, Recipe, SearchFilter } from '../types';

export type RecipeSliceType = {
  categories: Categories;
  drinks: Drinks;
  modal: boolean;
  openModal: () => void;
  fetchCategories: () => Promise<void>;
  searchRecipes: (searchFilter: SearchFilter) => Promise<void>;
  selectRecipe: (id: Drink['idDrink']) => Promise<void>;
  selectedRecipe: Recipe;
};

export const createRecipeSlice: StateCreator<RecipeSliceType> = (set) => ({
  categories: {
    drinks: [],
  },
  drinks: {
    drinks: [],
  },
  modal: false,
  fetchCategories: async () => {
    const categories = await getCategoriesAxios();
    set({
      categories: categories,
    });
  },
  searchRecipes: async (searchFilter) => {
    const drinks = await getFilters(searchFilter);
    set({
      drinks,
    });
  },
  selectRecipe: async (id) => {
    const selectedRecipe = await getRecipeById(id);
    set({
      selectedRecipe,
      modal: true,
    });
  },
  openModal: () => {
    set({
      modal: true,
    });
  },
  selectedRecipe: {} as Recipe,
});
