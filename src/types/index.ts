import { z } from 'zod';

import {
  CategoriesAPIResponseSchema,
  DrinksArrayAPIResponse,
  SearchRecipeSchema,
} from '../utils/recipes-schema';

export type Categories = z.infer<typeof CategoriesAPIResponseSchema>;

export type SearchFilter = z.infer<typeof SearchRecipeSchema>;

export type Drinks = z.infer<typeof DrinksArrayAPIResponse>;
