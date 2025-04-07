import { BrowserRouter, Routes, Route } from 'react-router-dom';
import IndexPage from './views/IndexPage';
import FavoritesRoute from './views/FavoritesRoute';
import Layouts from './layouts/Layouts';

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layouts />}>
          <Route path='/' element={<IndexPage />} index />
          <Route path='/favorites' element={<FavoritesRoute />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
