import { useState, useEffect } from 'react';
import Footer from '../../layout/Footer';
import BannerCarousel from './sections/BannerCarousel';
import Galery from './sections/Galery';
import Header from '../../layout/Header';
import 'boxicons';

const Home = () => {
  const [bannerCarousel, setbannerCarousel] = useState(); //hook
  const [galery, setGalery] = useState(); //hook

  function getBannerCarousel() {
    const url = 'https://64c27848eb7fd5d6ebcfec48.mockapi.io/api/carousel';

    fetch(url)
      .then(response => response.json())
      .then(data => setbannerCarousel(data))
      .catch(error => console.log(error));
  }

  function getGalery() {
    const url = 'https://64c27848eb7fd5d6ebcfec48.mockapi.io/api/galeria';
    // const url = 'https://run.mocky.io/v3/02245017-cf8f-4641-bdb9-1adf2d796876';
    fetch(url)
      .then(response => response.json())
      .then(data => {
        localStorage.setItem('galery', JSON.stringify(data));
        setGalery(data);
      })
      .catch(error => console.log(error));
  }

  //hook effect
  useEffect(function () {
    getBannerCarousel();
    getGalery();
  }, []);

  return (
    <>
      <Header />
      <main>
        {bannerCarousel && <BannerCarousel banners={bannerCarousel} />}
        {galery && <Galery galery={galery} />}
      </main>
      <Footer />
    </>
  );
};

export default Home;
