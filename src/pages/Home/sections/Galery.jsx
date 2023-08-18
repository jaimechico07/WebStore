import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import slugify from 'slugify';
import AOS from 'aos';

import 'aos/dist/aos.css';

const Galery = ({ galery }) => {
  const [hoverStates, setHoverStates] = useState({});
  const [showLayers, setShowLayers] = useState(true);
  const [showComponents, setShowComponents] = useState(true);

  const handleMouseEnter = itemId => {
    setHoverStates(prevState => ({
      ...prevState,
      [itemId]: true,
    }));
  };

  const handleMouseLeave = itemId => {
    setHoverStates(prevState => ({
      ...prevState,
      [itemId]: false,
    }));
  };

  // Filtrando por categoria
  const filteredGalery = galery.filter(item => {
    if (showLayers && showComponents) {
      return true;
    } else if (showLayers) {
      return item.type === 'LAYERS';
    } else if (showComponents) {
      return item.type === 'COMPONENTS';
    }
    return true;
  });

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <section id="galery" className="px-5 pt-28 mb-14 sm:mb-28">
      <div
        className="text-dynamic-h2 max-w-5xl m-auto gap-x-2 flex flex-wrap justify-center items-center font-sans-whyteinktrap font-medium leading-tight mb-28"
        data-aos="fade-down"
      >
        <span>STORE'S </span>
        <box-icon size="lg" color="purple" name="party"></box-icon>
        <span> COLLECTION OF </span>
        <box-icon type="solid" size="lg" color="pink" name="wink-smile"></box-icon>
        <span
          className={`cursor-pointer underline underline-offset-8 ${showLayers ? '' : 'text-red-500'}`}
          onClick={() => setShowLayers(!showLayers)}
        >
          {' '}
          LAYERS
        </span>
        <box-icon type="solid" size="lg" color="violet" name="gift"></box-icon>
        <span> AND </span> <box-icon size="lg" color="pink" type="solid" name="balloon"></box-icon>
        <span
          className={`cursor-pointer underline underline-offset-8 ${showComponents ? '' : 'text-red-500'}`}
          onClick={() => setShowComponents(!showComponents)}
        >
          {' '}
          COMPONENTS{' '}
        </span>{' '}
        <box-icon type="solid" size="lg" color="brown" name="quote-single-right"></box-icon>
        <span> FOR </span>
        <box-icon size="lg" color="orange" name="loader"></box-icon>
        <span> YOU AND YOUR </span>
        <box-icon type="solid" size="lg" color="red" name="heart"></box-icon> FRIENDS
      </div>

      <div className="grid sm:grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] grid-cols-2 max-w-7xl m-auto gap-y-5 gap-x-3 lg:gap-y-10 lg:gap-x-6">
        {filteredGalery?.map(item => (
          <Link to={`/product/${slugify(item.name, { lower: true })}`} key={item.id} data-aos="zoom-in-up">
            <div
              className="relative pb-[133%] h-0 hover:border-primary_black border-2 border-transparent rounded-3xl"
              onMouseEnter={() => handleMouseEnter(item.id)}
              onMouseLeave={() => handleMouseLeave(item.id)}
            >
              <img
                src={`/assets/img/galery/${item.images.bgimage}`}
                alt={item.alt}
                className="absolute inset-0 rounded-3xl w-full h-full"
              />
              <img
                src={`/assets/img/galery/${item.images.ctimage}`}
                alt={item.alt}
                className="absolute inset-0 rounded-3xl w-full h-full  "
              />
              <img
                src={`/assets/img/galery/${item.images.image}`}
                alt={item.alt}
                className={`absolute inset-0 rounded-3xl w-full h-full ${
                  hoverStates[item.id] ? 'opacity-0' : 'opacity-100'
                } transition-opacity duration-300`}
              />
            </div>
            <div className="flex gap-2 justify-between font-medium text-dynamic-cardName">
              <div>
                {item.new ? <p className="text-primary_green">New!</p> : null}
                <p>{item.name}</p>
              </div>
              <p>${item.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Galery;
