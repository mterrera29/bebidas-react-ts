import { z } from 'zod';

import {
  CategoriesAPIResponseSchema,
  DrinkAPIResponse,
  DrinksArrayAPIResponse,
  RecipeAPIResponseSchema,
  SearchRecipeSchema,
} from '../utils/recipes-schema';

export type Categories = z.infer<typeof CategoriesAPIResponseSchema>;

export type SearchFilter = z.infer<typeof SearchRecipeSchema>;

export type Drinks = z.infer<typeof DrinksArrayAPIResponse>;

export type Drink = z.infer<typeof DrinkAPIResponse>;

export type Recipe = z.infer<typeof RecipeAPIResponseSchema>;
