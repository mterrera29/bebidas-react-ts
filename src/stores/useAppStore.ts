import { create } from 'zustand';
import { createRecipeSlice, RecipeSliceType } from './recipeSlice';
import { devtools } from 'zustand/middleware';
import { FavoritesSliceType, createFavoritesSlice } from './favoriteSlice';
import {
  createNotificationSlice,
  NotificationSliceType,
} from './notificationSlice';
import { AISliceType, createAISlice } from './aiSlice';

export const useAppStore = create<
  RecipeSliceType & FavoritesSliceType & NotificationSliceType & AISliceType
>()(
  devtools((...a) => ({
    ...createRecipeSlice(...a),
    ...createFavoritesSlice(...a),
    ...createNotificationSlice(...a),
    ...createAISlice(...a),
  }))
);
