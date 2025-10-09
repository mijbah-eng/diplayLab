"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Hero() {
  const settings = {
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows:false
  };

  const slides = [
    {
      id: 1,
      title: "Welcome to Our Website",
      text: "Discover amazing content and services here.",
      image: "images/hero/slider_1.jpeg",
    },
    {
      id: 2,
      title: "Explore New Features",
      text: "We keep improving your experience.",
      image: "images/hero/slider_2.jpeg",
    },
    {
      id: 3,
      title: "Join Us Today",
      text: "Sign up and be part of our community.",
      image: "images/hero/slider_1.jpeg",
    },
  ];

  return (
    <Slider {...settings}>
      {slides.map((slide) => (
        <div key={slide.id}>
          <div
            className="w-full h-[100vh] bg-cover bg-center relative"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center font-bold">
              <h1 className="text-3xl md:text-5xl font-bold">{slide.title}</h1>
              <p className="text-sm md:text-2xl mt-4">{slide.text}</p>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
}

export default Hero;
