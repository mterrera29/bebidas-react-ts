import { NavLink, useLocation } from 'react-router-dom';

export default function Header() {
  const { pathname } = useLocation();

  const isHome = pathname === '/';

  console.log(isHome);
  return (
    <header className=' bg-slate-800'>
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
          <form className='md:w-1/2 2xl:w-1/3 bg-orange-400 my-32 p-10 rounded-lg shadow space-y-6'>
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
              />
            </div>
            <div className='space-y-4'>
              <label
                htmlFor='ingredient'
                className=' block text-white uppercase font-extrabold text-lg'
              >
                Categoría
              </label>
              <select
                id='ingredient'
                name='ingredient'
                className='p-3 w-full rounded-lg focus:outline-none bg-amber-50'
              >
                <option value=''>-- Seleccione --</option>
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
