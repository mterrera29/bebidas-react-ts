import { z } from 'zod';

export const CategoriesAPIResponseSchema = z.object({
  drinks: z.array(
    z.object({
      strCategory: z.string(),
    })
  ),
});

export const SearchRecipeSchema = z.object({
  ingredient: z.string(),
  category: z.string(),
});

export const DrinkAPIResponse = z.object({
  idDrink: z.string(),
  strDrink: z.string(),
  strDrinkThumb: z.string(),
});

export const DrinksArrayAPIResponse = z.object({
  drinks: z.array(DrinkAPIResponse),
});
