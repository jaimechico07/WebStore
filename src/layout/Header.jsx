import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useCart } from '../context/cartContext';
import { Link } from 'react-router-dom';

import 'boxicons';

const Header = () => {
  const openMenuMobile = useRef();
  const bgOpen = useRef();
  const location = useLocation();
  const prevIsVisibleRef = useRef(true);
  const { cart } = useCart();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [headerBgColor, setHeaderBgColor] = useState('transpatent');
  const [aboutButtonActive, setAboutButtonActive] = useState(false);

  const handleButtonClick = () => {
    setIsMenuOpen(!isMenuOpen);
    openMenuMobile.current.classList.toggle('hidden');
    bgOpen.current.classList.toggle('bg-white');

    if (event.target.innerHTML === 'ABOUT') {
      event.target.style.backgroundColor = 'black';
    }
  };

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    setIsVisible(prevScrollPos > currentScrollPos);
    setPrevScrollPos(currentScrollPos);

    // Change the background color to white when scrolling up, and back to transparent when scrolling down
    if (prevScrollPos > currentScrollPos) {
      setHeaderBgColor('white');
      if (currentScrollPos === 0) {
        setHeaderBgColor('transparent');
      }
    }
  };

  useEffect(() => {
    // Update About button active state based on route
    if (location.pathname === '/about') {
      setAboutButtonActive(true);
    } else {
      setAboutButtonActive(false);
    }

    prevIsVisibleRef.current = isVisible;
    // Scroll effect
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos, location, isVisible]);

  return (
    <header
      className={`fixed left-0 top-0 w-full z-10 transition duration-300 ease-out ${
        prevIsVisibleRef.current ? '' : 'transform -translate-y-full ease-out'
      }`}
      style={{ backgroundColor: headerBgColor }}
    >
      <nav ref={bgOpen} className="grid grid-cols-3 place-items-center md:px-20 md:py-5 py-5 px-5">
        <div className="lg:flex lg:gap-3 hidden place-self-start place-items-center">
          <Link
            to="/#galery"
            className="font-whyteinktrap text-base font-semibold border-2 border-solid border-primary_black px-5 py-1 rounded-[30px] hover:bg-black hover:text-white duration-300 cursor-pointer"
          >
            SHOP
          </Link>
          <Link
            to="/about"
            className={`text-base font-semibold border-2 border-solid border-primary_black px-5 py-1 rounded-[30px] hover:bg-black hover:text-white duration-300 cursor-pointer ${
              aboutButtonActive ? 'bg-black text-white' : ''
            }`}
          >
            ABOUT
          </Link>
        </div>
        <button
          onClick={handleButtonClick}
          className="border-2 border-primary_black place-self-start place-items-center rounded-full flex items-center p-1 lg:hidden "
        >
          {isMenuOpen ? <box-icon name="x"></box-icon> : <box-icon name="menu"></box-icon>}
        </button>
        <h1 className="font-whyteinktrap font-bold text-dynamic-h1 cursor-pointer">
          <Link to="/">WEB STORE </Link>
        </h1>

        <Link
          to="/cart"
          className="font-whyteinktrap flex items-center font-semibold text-base  border-2 border-solid border-primary_black px-5 py-1 rounded-[30px] hover:bg-black hover:text-white duration-300 cursor-pointer place-self-end "
          // onClick={() => {
          //   navigateLogin('/cart');
          // }}
        >
          <span className="hidden lg:block">CART</span>
          <span className="lg:ml-2">{cart.length}</span>
        </Link>
      </nav>

      {/* version mobile */}
      <section ref={openMenuMobile} className="md:px-20 md:py-5 py-5 px-5 hidden  bg-white overflow-hidden h-[100vh]">
        <ul className="mb-20 flex flex-col gap-8">
          <li className="font-whyteinktrap font-bold text-5xl">Shop</li>
          <li className="font-whyteinktrap font-bold text-5xl">About</li>
        </ul>
        <ul>
          <li className="font-whyteinktrap font-medium text-xl">Privacy & Terms</li>
          <li className="font-whyteinktrap font-medium text-xl">Contact Us</li>
        </ul>
      </section>
    </header>
  );
};

export default Header;
