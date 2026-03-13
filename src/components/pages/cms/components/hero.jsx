"use client";

import { motion } from "motion/react";
import Script from "next/script";
import Typewriter from "typewriter-effect";

function CMS_HERO() {
  return (
    <>
      {/* Calendly CSS */}
      <link
        href="https://assets.calendly.com/assets/external/widget.css"
        rel="stylesheet"
      />

      {/* Calendly Script */}
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="afterInteractive"
      />
      {/* .......................................... */}
      <section className="relative bg-gradient-to-br from-cyan-50 via-blue-50 to-purple-50 py-16 md:py-24 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-block mb-4">
                <span className="bg-cyan-100 text-cyan-800 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wide">
                  Digital Signage
                </span>
              </div>
              <h1 className="h1_text">
                Digital Signage That Brings Your Content 
                <span className="text-cyan-600 block">
                  {" "} {" "} 
                  <Typewriter
                    options={{
                      strings: ["...", "To Life"],
                      autoStart: true,
                      loop: true,
                    }}
                  />{" "}
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
                Create, manage, and display stunning content across all your
                screens with the most reliable and easy-to-use digital signage
                solution.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <motion.a
                  href={"https://www.youtube.com/"}
                  className="bg-cyan-600 text-white px-8 py-4 rounded-full font-semibold text-base hover:bg-cyan-700 transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer"
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
                </motion.a>
                <motion.a
                  href={"https://www.youtube.com/"}
                  target="_blank"
                  whileHover={{
                    scale: 1.04,
                    transition: { duration: 0.3 },
                  }}
                  className="border-2 border-cyan-600 text-cyan-600 px-8 py-4 rounded-full font-semibold text-base hover:bg-cyan-50 transition-all cursor-pointer"
                  transition={{
                    duration: 0.5,
                    ease: "linear",
                  }}
                >
                  Try For Free
                </motion.a>
              </div>
            </div>
            <div className="relative">
              <div className="relative">
                <motion.div
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
                </motion.div>
                <motion.div
                  animate={{
                    y: [5, 15, 5],
                    rotate: [0, 10, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute -bottom-8 -left-8 bg-white rounded-lg shadow-xl p-2 w-32 md:w-40"
                >
                  <div className="bg-gradient-to-br from-[#3095b5] to-[#105783] rounded aspect-video"></div>
                </motion.div>
                <motion.div
                  animate={{
                    y: [5, 15, 5],
                    rotate: [0, -10, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute -top-8 -right-8 bg-white rounded-lg shadow-xl p-2 w-32 md:w-40"
                >
                  <div className="bg-gradient-to-br from-[#105783] to-[#3095b5] rounded aspect-video"></div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CMS_HERO;
