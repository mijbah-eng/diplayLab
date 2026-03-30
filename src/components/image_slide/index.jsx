"use client";
import MarqueeSection from "../marquee/marquee";

const images = [
  "/images/advertisement/Restaurant.jpg",
  "/images/advertisement/Shoopingmall.png",
  "/images/advertisement/Corporate_Office.jpg",
  "/images/advertisement/Hospital.png",
  "/images/advertisement/Groceryshoop.png",
  "/images/advertisement/Bank.png",
  "/images/advertisement/Airport.jpg",
  "/images/advertisement/Train Station.jpg",
  "/images/advertisement/High-Traffic Locations.jpg",
  "/images/advertisement/Shwroom.png",
];

function ImageSlide() {
  return (
    <div className="py-16 md:py-24">
      <MarqueeSection images={images} />
    </div>
  );
}

export default ImageSlide;
