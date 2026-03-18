"use client";
import MarqueeSection from "../marquee/marquee";

const images = [
  "/images/advertisement/advertisement.png",
  "/images/advertisement/advertisement3.png",
  "/images/advertisement/bank.png",
  "/images/advertisement/corporate-office.png",
  "/images/advertisement/hospital.png",
];

function ImageSlide() {
  return (
    <div className="py-16 md:py-24">
        <MarqueeSection images={images} />
    </div>
  );
}

export default ImageSlide;
