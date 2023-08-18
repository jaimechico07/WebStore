import './App.css';
import { RouterProvider } from 'react-router-dom';
import { CartProvider } from './context/cartContext';

import { router } from './routes';
import './App.css';

function App() {
  return (
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  );
}

// function App() {
//   return <RouterProvider router={router}></RouterProvider>;
// }

export default App;
