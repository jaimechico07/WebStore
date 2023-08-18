import { useState, useEffect } from 'react';
import Footer from '../../layout/Footer';
import Header from '../../layout/Header';
import Hero from './sections/Hero';
import Donated from './sections/Donated';
import Faq from './sections/Faq';
import Customer from './sections/Customer';
import 'boxicons';

const About = () => {
  return (
    <>
      <Header />
      <main className="max-w-7xl m-auto px-5">
        <Hero />
        <Donated />
        <Faq />
        <Customer />
      </main>
      <Footer />
    </>
  );
};

export default About;
