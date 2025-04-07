import { NavLink } from 'react-router-dom';

export default function Header() {
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
      </div>
    </header>
  );
}
