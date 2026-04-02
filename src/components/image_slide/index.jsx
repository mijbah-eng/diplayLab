"use client";
import MarqueeSection from "../marquee/marquee";

const images = [
  { src: "/images/advertisement/Restaurant.jpg", label: "Restaurant" },
  { src: "/images/advertisement/Shoopingmall.png", label: "Shopping Mall" },
  { src: "/images/advertisement/Corporate_Office.jpg", label: "Corporate Office" },
  { src: "/images/advertisement/Hospital12.png", label: "Hospital" },
  { src: "/images/advertisement/Groceryshoop.png", label: "Grocery Shop" },
  { src: "/images/advertisement/Airport.jpg", label: "Airport" },
  { src: "/images/advertisement/Train_Station.jpg", label: "Train Station" },
  { src: "/images/advertisement/High_Traffic_Locations.jpg", label: "High Traffic Locations" },
  { src: "/images/advertisement/Shwroom.png", label: "Showroom" },
];

function ImageSlide() {
  return (
    <div className="py-16 md:py-24">
      <MarqueeSection images={images} />
    </div>
  );
}

export default ImageSlide;
