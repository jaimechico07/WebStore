import { useState, useEffect } from 'react';
import Footer from '../../layout/Footer';
import Header from '../../layout/Header';
import ViewProduct from './ViewProduct';
import 'boxicons';

const Product = () => {
  return (
    <>
      <Header />
      <main className="max-w-7xl m-auto px-5">
        <ViewProduct />
      </main>
      <Footer />
    </>
  );
};

export default Product;
