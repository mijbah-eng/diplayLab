"use client";

import Link from "next/link";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import MarqueeSection from "./marquee/marquee";

function Hero() {
  return (
    <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Digital Signage Software to Power Screens Anywhere
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
              Turn any screen into a powerful communication and marketing
              platform. Create, manage, and publish content across multiple
              displays from one cloud dashboard.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href={"https://www.youtube.com/"}
                className="bg-cyan-600 text-white px-8 py-4 rounded font-semibold text-base hover:bg-cyan-700 transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                target="_blank"
                whileHover={{
                  scale: 1.04,
                  transition: { duration: 0.3 },
                }}
                transition={{
                  duration: 0.5,
                  ease: "linear",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="white"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-play"
                  aria-hidden="true"
                >
                  <polygon points="6 3 20 12 6 21 6 3"></polygon>
                </svg>
                Book A Demo
              </Link>
              <Link
                href={"https://www.youtube.com/"}
                target="_blank"
                whileHover={{
                  scale: 1.04,
                  transition: { duration: 0.3 },
                }}
                className="border-2 border-cyan-600 text-cyan-600 px-8 py-4 rounded font-semibold text-base hover:bg-cyan-50 transition-all cursor-pointer"
                transition={{
                  duration: 0.5,
                  ease: "linear",
                }}
              >
                Start Free Trial
              </Link>
            </div>
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
        <div className="space-large"></div>
        <MarqueeSection />
      </div>
    </section>
  );
}

export default Hero;
