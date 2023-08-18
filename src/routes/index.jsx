import { createBrowserRouter } from 'react-router-dom';

import Home from '../pages/Home';
import About from '../pages/About';
import Product from '../components/Product';
import Cart from '../pages/Cart';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/product/:slug',
    element: <Product />,
  },
  {
    path: '/cart',
    element: <Cart />,
  },
]);
