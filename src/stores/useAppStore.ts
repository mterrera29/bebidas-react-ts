import { create } from 'zustand';
import { createRecipeSlice, RecipeSliceType } from './recipeSlice';

export const useAppStore = create<RecipeSliceType>((...a) => ({
  ...createRecipeSlice(...a),
}));
