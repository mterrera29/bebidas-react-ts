import { z } from 'zod';

import {
  CategoriesAPIResponseSchema,
  SearchRecipeSchema,
} from '../utils/recipes-schema';

export type Categories = z.infer<typeof CategoriesAPIResponseSchema>;

export type SearchFilter = z.infer<typeof SearchRecipeSchema>;
