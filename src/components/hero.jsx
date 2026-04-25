"use client";

import ClientLogoSlider from "@/components/client_logo_slider";
import { home_hero_logos } from "@/utils";
import Link from "next/link";
import Typewriter from "typewriter-effect";
import CalandlyButton from "./calandlyButton";
import Reveal from "./utils/Reveal";

function Hero() {
  return (
    <section className="relative bg-linear-to-br from-cyan-50 via-blue-50 to-purple-50 py-16 md:py-24 lg:py-32 overflow-hidden">
      <div className="max-w-375 mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <Reveal>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Digital Signage <br /> Software to Power <br />{" "}
                <span className="text-cyan-600 block">
                  {" "}
                  <Typewriter
                    options={{
                      strings: ["Screens Anywhere", "To Life"],
                      autoStart: true,
                      loop: true,
                    }}
                  />{" "}
                </span>
              </h1>
            </Reveal>
            <Reveal>
              <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
                Turn any screen into a powerful communication and marketing
                platform. Create, manage, and publish content across multiple
                displays from one cloud dashboard.
              </p>
            </Reveal>
            <Reveal>
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start">
              
                <CalandlyButton
                  text={"Book A Demo"}
                  basicStyle={true}
                  icon={
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
                  }
                />
              

              <Link
                href={"https://displaylab.net/signup"}
                target="_blank"
                className="w-xs sm:w-fit border-2 border-cyan-600 text-cyan-600 px-8 py-4 rounded font-semibold text-base hover:bg-cyan-50 transition-all cursor-pointer"
              >
                Start Free Trial
              </Link>
            </div>
            </Reveal>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"></div>
          </div>
          <Reveal>
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
                    <source src="/videos/hero.mp4" />
                  </video>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
        <div className="space-large"></div>
        <ClientLogoSlider
          autoPlay={true}
          touchMove={false}
          slideDatas={home_hero_logos}
        />
      </div>
    </section>
  );
}

export default Hero;
