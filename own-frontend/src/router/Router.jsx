import { Suspense, lazy } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

export default function Router() {
  const Home = lazy(() => import('../pages/Home/Home.jsx'));

  return (
    <Routes>
      <Route
        path='/'
        element={
          <Suspense>
            <Home />
          </Suspense>
        }
      />
    </Routes>
  );
}
