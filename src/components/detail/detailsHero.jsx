"use client"
import Link from "next/link";

function DetailsHero() {
  return (
    <>
      <div className="">
        <div className="max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Poster Stand Kiosk
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
                Indoor A-Shape Poster Standing kiosk with Touch and Non- Touch
                Screen . Poster kiosk powerful, versatile digital signage
                solution designed for commercial and public indoor environments.
                Available in 32, 43, 50, 55, and 65-inch display sizes to suit
                any space.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href={"#"} className="bg-cyan-600 text-white px-4 py-2 rounded font-semibold text-base hover:bg-cyan-700 transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer" target="_blank">NON-TOUCH | TOUCH | ANDROID | LCD</Link>
                <Link href={"#"} className="bg-white text-cyan-600 border-1 border-cyan-600 px-4 py-2 rounded font-semibold text-base hover:bg-cyan-700 hover:text-white transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer" target="_blank">32 / 43 / 50 / 55 / 65 INCH</Link>
              </div>
            </div>
            <div className="relative">
              <img className="mr-auto" src="/images/details/DIGITAL_POSTER .jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DetailsHero;
