import { NavLink, useLocation } from 'react-router-dom';
import { useAppStore } from '../stores/useAppStore';
import { ChangeEvent, useEffect, useState } from 'react';

export default function Header() {
  const [searchFilter, setSearchFilters] = useState({
    ingredient: '',
    category: '',
  });
  const { pathname } = useLocation();

  const isHome = pathname === '/';

  const fetchCategories = useAppStore((state) => state.fetchCategories);
  const categories = useAppStore((state) => state.categories);

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>
  ) => {
    setSearchFilters({
      ...searchFilter,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <header
      className={
        isHome ? 'bg-[url(/bg.jpg)] bg-cover bg-center' : 'bg-slate-800'
      }
    >
      <div className=' mx-auto container px-5 py-16'>
        <div className='flex justify-between items-center'>
          <div>
            <img className='w-32' src='/logo.svg' alt='Logo' />
          </div>
          <nav className=' flex gap-5'>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? ' text-orange-400 uppercase text-2xl'
                  : 'text-white uppercase text-2xl'
              }
              to='/'
            >
              Inicio
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? ' text-orange-400 uppercase text-2xl'
                  : 'text-white uppercase text-2xl'
              }
              to='/favorites'
            >
              Favoritos
            </NavLink>
          </nav>
        </div>
        {isHome && (
          <form className='md:w-1/2 2xl:w-1/3 bg-linear-to-t from-orange-400 to-orange-600 my-32 p-10 rounded-lg shadow space-y-6'>
            <div className='space-y-4'>
              <label
                htmlFor='ingredient'
                className=' block text-white uppercase font-extrabold text-lg'
              >
                Nombre o Ingredientes
              </label>
              <input
                id='ingredient'
                type='text'
                className='p-3 w-full rounded-lg focus:outline-none bg-amber-50'
                placeholder='Nombre o Ingrediente. Ej. Vodka, Tequila, Café'
                name='ingredient'
                onChange={handleChange}
                value={searchFilter.ingredient}
              />
            </div>
            <div className='space-y-4'>
              <label
                htmlFor='category'
                className=' block text-white uppercase font-extrabold text-lg'
              >
                Categoría
              </label>
              <select
                id='category'
                name='category'
                className='p-3 w-full rounded-lg focus:outline-none bg-amber-50'
                onChange={handleChange}
                value={searchFilter.category}
              >
                <option value=''>-- Seleccione --</option>
                {categories.drinks.map((cat) => (
                  <option key={cat.strCategory} value={cat.strCategory}>
                    {cat.strCategory}
                  </option>
                ))}
              </select>
            </div>
            <input
              type='submit'
              value='Buscar Recetas'
              className='cursor-pointer bg-orange-800 hover:bg-orange-900 text-white font-extrabold w-full p-2 rounded-lg uppercase'
            />
          </form>
        )}
      </div>
    </header>
  );
}
