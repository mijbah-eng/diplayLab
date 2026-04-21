"use client";

import Image from "next/image";
import Link from "next/link";

function ProductSection() {
  return (
    <>
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="hero_section grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Digital Signage Software to Power Screens Anywhere
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
              Turn any screen into a powerful communication and marketing
              platform. Create, manage, and publish content across multiple
              displays from one cloud dashboard.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"></div>
          </div>
          <div className="relative">
            <div className="relative">
              <div
                animate={{
                  y: [0, 15, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="bg-white rounded-2xl shadow-2xl p-4 relative z-10"
              >
                <video
                  className="rounded-xl aspect-video w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  preload="none"
                >
                  <source src="https://cdn.pickcel.com/videos/main/hero-video.hMW0RsrCv5Su.webm" />
                </video>
              </div>
            </div>
          </div>
        </div>
        {/* Heading */}
        <div className="flex flex-col gap-20">
          <div className="py-5">
              <Image
                className="w-full h-full rounded-2xl"
                src={"/images/products/product-images.jpeg"}
                width={1000}
                height={1000}
                alt=""
              />
          </div>

          <Link href={"/products"} className={"button cursor-pointer"}>
            View All Products
          </Link>
        </div>
      </div>
    </>
  );
}

export default ProductSection;
