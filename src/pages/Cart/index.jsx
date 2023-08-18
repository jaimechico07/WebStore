import { useState, useEffect } from 'react';

import Footer from '../../layout/Footer';
import Header from '../../layout/Header';
import CartProduct from './CartProduct';

const Cart = () => {
  return (
    <>
      <Header />
      <main className="max-w-7xl m-auto px-5">
        <CartProduct />
      </main>
      <Footer />
    </>
  );
};

export default Cart;
