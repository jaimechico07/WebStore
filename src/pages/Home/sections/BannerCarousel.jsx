import React from 'react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';
import slugify from 'slugify';
import { Swiper, SwiperSlide } from 'swiper/react';

const BannerCarousel = ({ banners }) => {
  // Objecto swiper con p
  const swiperProps = {
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.button-next-right',
      prevEl: '.button-prev-left',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1280: {
        slidesPerView: 3,
      },
    },
  };

  return (
    <section className="bg-primary_yellow pt-20 pb-10 px-5">
      <Swiper {...swiperProps} modules={[Pagination, Navigation, Autoplay]} className="mySwiper w-full h-full">
        {banners?.map(item => (
          <SwiperSlide key={item.id} className={`flex justify-center items-center group `}>
            <img src={`assets/img/galery/${item.img}`} alt={item.alt} className={`object-scale-down ${item.diseño}`} />
            <Link
              to={`/product/${slugify(item.name, { lower: true })}`}
              className="absolute hidden group-hover:block cursor-pointer font-sans-whyteinktrap bg-primary_white rounded-full px-4 py-2 text-dynamic-banner  text-primary_black "
            >
              {item.name}
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default BannerCarousel;
