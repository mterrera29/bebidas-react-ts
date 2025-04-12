import { StateCreator } from 'zustand';
import { getCategoriesAxios, getFilters } from '../services/RecipeService';
import { Categories, Drinks, SearchFilter } from '../types';

export type RecipeSliceType = {
  categories: Categories;
  drinks: Drinks;
  fetchCategories: () => Promise<void>;
  searchRecipes: (searchFilter: SearchFilter) => Promise<void>;
};

export const createRecipeSlice: StateCreator<RecipeSliceType> = (set) => ({
  categories: {
    drinks: [],
  },
  drinks: {
    drinks: [],
  },
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
});
