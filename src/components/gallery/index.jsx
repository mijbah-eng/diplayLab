"use client";
import MarqueeSection from "../marquee/marquee";

const images = [
  { src: "/images/advertisement/Restaurant.jpg", label: "Restaurant" },
  { src: "/images/advertisement/Shoopingmall.jpg", label: "Shopping Mall" },
  {
    src: "/images/advertisement/Corporate_Office.jpg",
    label: "Corporate Office",
  },
  { src: "/images/advertisement/Hospital.jpg", label: "Hospital" },
  { src: "/images/advertisement/Groceryshoop.jpg", label: "Grocery Shop" },
  { src: "/images/advertisement/Airport.jpg", label: "Airport" },
  { src: "/images/advertisement/Train Station.jpg", label: "Train Station" },
  {
    src: "/images/advertisement/High-Traffic Locations.jpg",
    label: "High Traffic Locations",
  },
  { src: "/images/advertisement/Shwroom.jpg", label: "Showroom" },
];

function Gallery() {
  return (
    <div className="py-16 md:py-24">
      <MarqueeSection images={images} />
    </div>
  );
}

export default Gallery;
