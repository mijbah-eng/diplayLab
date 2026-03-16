"use client"
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import "./styles.css";

function ClientLogoSlider() {
    const logos = [
    "https://cdn.prod.website-files.com/638d465c7903a622e8a1dbd1/66fcd67837a212dc9acdf39b_levis.svg",
    "https://cdn.prod.website-files.com/638d465c7903a622e8a1dbd1/66fcd56841528275fbdc40e9_yamaha.svg",
    "https://cdn.prod.website-files.com/638d465c7903a622e8a1dbd1/66fcd44e13ae75901836e593_redbull.svg",
    "https://cdn.prod.website-files.com/638d465c7903a622e8a1dbd1/66fcd61041528275fbdcd41f_instacart.svg",
    "https://cdn.prod.website-files.com/638d465c7903a622e8a1dbd1/66fcd6c96b44f080a5f5abe7_goodwill.svg",
  ];
  return (
    <>
      <div className="logoSection">
        <Swiper
          className="mySwiper"
          slidesPerView={4}
          spaceBetween={80}
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          speed={4000}
        >
          {logos.map((logo, index) => (
            <SwiperSlide key={index}>
              <img src={logo} alt="logo" className="logoImg" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}

export default ClientLogoSlider;
