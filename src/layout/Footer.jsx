import React from 'react';
import { Link } from 'react-router-dom';
import 'boxicons';

const Footer = () => {
  return (
    <footer className="bg-primary_lilac ">
      <div className="max-w-7xl mx-auto  px-3 py-16 grid grid-cols-1 lg:grid-cols-2 gap-y-5 place-items-center">
        <h2 className="text-primary_black text-7xl text-center font-sans-whyteinktrap">WEB STORE</h2>
        <div>
          <div className="flex gap-x-4 lg:justify-between justify-center">
            <a href="">
              <box-icon size="md" color="black" type="logo" name="facebook-circle"></box-icon>
            </a>
            <a href="">
              <box-icon size="md" name="instagram-alt" type="logo"></box-icon>
            </a>
            <a href="">
              <box-icon size="md" name="twitter" type="logo"></box-icon>
            </a>
            <a href="">
              <box-icon size="md" name="linkedin" type="logo"></box-icon>
            </a>
          </div>
          <ul className="flex font-sans-whyteinktrap text-2xl justify-center gap-3">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/about/#contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-primary_black px-3 py-3 text-white text-sm flex justify-between">
        <a href="" className="">
          &copy; 2022 WEB STORE
        </a>
        <a href="">Privacy & Terms</a>
      </div>
    </footer>
  );
};

export default Footer;
