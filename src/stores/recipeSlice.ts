import { StateCreator } from 'zustand';
import { getCategoriesAxios } from '../services/RecipeService';
import { Categories } from '../types';

export type RecipeSliceType = {
  categories: Categories;
  fetchCategories: () => Promise<void>;
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
});
