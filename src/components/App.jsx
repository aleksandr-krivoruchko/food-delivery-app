import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import { NotFoundPage } from '../pages/NotFoundPage';
import { Layout } from './Layout';
import { Loading } from './Loading';
import { Navigation } from './Navigation';

const HomePage = lazy(() => import('../pages/HomePage'));
const ShoppingCart = lazy(() => import('../pages/ShoppingCart'));

export const App = () => (
  <>
    <Navigation />
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<ShoppingCart />} />
          <Route path="*" element={<NotFoundPage />}></Route>
        </Route>
      </Routes>
    </Suspense>
  </>
);
