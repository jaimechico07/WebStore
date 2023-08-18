import React from 'react';

const Hero = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-8 md:gap-16 my-20 md:my-28">
      <figure>
        <img
          className="imgHero object-scale-down stroke-black stroke-[4px]"
          src="https://store.figma.com/cdn/shop/files/AD1A2554-3_1000x.jpg?v=1636584700"
          alt=""
        />
      </figure>
      <div>
        <h1 className="font-sans-whyteinktrap text-dynamic-h2">About</h1>
        <p className="font-mono text-dynamic-subDescription leading-tight">
          Welcome to the WebStore, a collection of Figma apparel (layers) and accessories (components) designed for our
          community.
        </p>
      </div>
    </section>
  );
};

export default Hero;
