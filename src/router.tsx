import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layouts from './layouts/Layouts';

const FavoritesRoute = lazy(() => import('./views/FavoritesRoute'));
const IndexPage = lazy(() => import('./views/IndexPage'));

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layouts />}>
          <Route
            path='/'
            element={
              <Suspense>
                <IndexPage />
              </Suspense>
            }
            index
          />
          <Route
            path='/favorites'
            element={
              <Suspense>
                <FavoritesRoute />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
