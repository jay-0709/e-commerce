import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import '../../components/App.css'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function HeroSection() {
  return (
    <>
    <div className='bg-gradient-to-r from-[#736FA1] px-1 md:px-11 py-3 via-[#9996C5] to-[#78719B]'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img  src='image1.jpg' alt='image'/>
        </SwiperSlide>
        <SwiperSlide>
            <img src='image2.png' alt='image' />
        </SwiperSlide>
        <SwiperSlide>
            <img src='image3.png' alt='image' />
        </SwiperSlide>
      </Swiper>
      </div>
    </>
  );
}
