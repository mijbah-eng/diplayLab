"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import Image from "next/image";

function Hero() {

  const slides = [
    {
      id: 1,
      title: "Welcome to Our Website",
      text: "Discover amazing content and services here.",
      image: "/images/hero/slide_1.png",
    },
    {
      id: 2,
      title: "Explore New Features",
      text: "We keep improving your experience.",
      image: "/images/hero/slide_2.png",
    },
    {
      id: 3,
      title: "Join Us Today",
      text: "Sign up and be part of our community.",
      image: "/images/hero/slide_3.png",
    },
    {
      id: 4,
      title: "Join Us Today",
      text: "Sign up and be part of our community.",
      image: "/images/hero/slide_4.png",
    },
    {
      id: 5,
      title: "Join Us Today",
      text: "Sign up and be part of our community.",
      image: "/images/hero/slide_5.png",
    },
    {
      id: 6,
      title: "Join Us Today",
      text: "Sign up and be part of our community.",
      image: "/images/hero/slide_6.png",
    },
  ];

  return (
    <div className="w-full h-[1079px] relative">

      <Swiper dir="ltr" pagination={{ clickable: true, }} modules={[Autoplay, Pagination]}
        autoplay={{ delay: 2500, disableOnInteraction: false }} loop={true}
        className="w-full h-full">
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="w-full h-full bg-cover md:bg-top relative"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
<div className="absolute inset-0 bg-black/40"></div>
              <div className="relative z-100 flex flex-col items-center justify-center h-full text-white text-center font-bold">
                <h1 className="text-3xl md:text-5xl font-bold">{slide.title}</h1>
                <p className="text-sm md:text-2xl mt-4">{slide.text}</p>
              </div>
              
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <style jsx global>{`
      .swiper-pagination-bullet {
      background: #fff;
      opacity: 0.6;
      width: 10px;
      height: 10px;
      transition: all 0.3s ease;
      }
      .swiper-pagination-bullet-active {
      background: #00bcd4;
      opacity: 1;
      transform: scale(1.2);
      }
      `}</style>
    </div>

  );
}

export default Hero;
