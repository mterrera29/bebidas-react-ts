import { StateCreator } from 'zustand';
import {
  getCategoriesAxios,
  getFilters,
  getFiltersFetch,
} from '../services/RecipeService';
import { Categories, SearchFilter } from '../types';

export type RecipeSliceType = {
  categories: Categories;
  fetchCategories: () => Promise<void>;
  searchRecipes: (searchFilter: SearchFilter) => Promise<void>;
};

export const createRecipeSlice: StateCreator<RecipeSliceType> = (set) => ({
  categories: {
    drinks: [],
  },
  fetchCategories: async () => {
    const categories = await getCategoriesAxios();
    set({
      categories: categories,
    });
  },
  searchRecipes: async (searchFilter) => {
    await getFiltersFetch(searchFilter);
  },
});
