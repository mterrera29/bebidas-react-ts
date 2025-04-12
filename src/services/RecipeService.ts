import axios from 'axios';
import { CategoriesAPIResponseSchema } from '../utils/recipes-schema';
import { SearchFilter } from '../types';

export const getCategories = async () => {
  const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
  const response = await fetch(url)
    .then(async (res) => {
      if (!res.ok) throw new Error('hubo un rerror');
      return await res.json();
    })
    .then((res) => {
      return res;
    })
    .catch((err) => console.error(err));
  const result = CategoriesAPIResponseSchema.safeParse(response);
  if (result.success) {
    return result.data;
  }
};

export const getCategoriesAxios = async () => {
  const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';

  const { data } = await axios(url);

  const result = CategoriesAPIResponseSchema.safeParse(data);

  if (result.success) {
    return result.data;
  }
};

export async function getFilters(searchFilter: SearchFilter) {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${searchFilter.category}&i=${searchFilter.ingredient}`;
  const { data } = await axios(url);
  console.log(data);
}

export async function getFiltersFetch(searchFilter: SearchFilter) {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${searchFilter.category}&i=${searchFilter.ingredient}`;
  const response = fetch(url)
    .then(async (res) => {
      if (!res.ok) throw new Error('hay error');
      return await res.json();
    })
    .then((res) => res)
    .catch((err) => console.error(err));
  console.log(response);
  return await response;
}
