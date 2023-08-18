import React from 'react';

const Donated = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 justify-center gap-8 md:gap-16 mb-14 md:mb-28">
      <h2 className="font-sans-whyteinktrap text-dynamic-h2">100% OF PROCEEDS ARE DONATED</h2>
      <div>
        <p className="font-mono text-dynamic-subDescription leading-tight mb-5 md:mb-10">
          Any and all profits we generate from the store will be used to purchase carbon removal credits via
          reforestation from TIST (The International Small Group and Tree Planting Program). TIST is an innovative
          time-tested reforestation program that supports subsistence farmers in Kenya, Uganda, and Tanzania to tackle
          sustainable development and climate change through education and tree planting.
        </p>
        <a href="" className="font-bold text-xl md:text-3xl ">
          Learn more about TIST ↗
        </a>
      </div>
    </section>
  );
};

export default Donated;
