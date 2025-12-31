"use client";

import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

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
      <div className="hero-section h-full md:h-[100vh]">
        <div className="bg-linear-gradient">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[80px] md:gap-[40px] mx-auto px-4 py-30 pt-10 md:pt-30 container">
            <div className="mt-20 max-md:text-center pr-0 md:pr-[22%] flex flex-col justify-center">
              <h2 className="title">About the CMS</h2>
              <p className="two_column_desc_black">
                Display Lab CMS lets you control, schedule and design your
                digital screens remotely
              </p>
              <div className="mt-8 flex flex-wrap max-md:justify-center gap-4">
                {/* <Button btnName={"Try For Free"} /> */}
                <Link
                  className="button"
                  href={"https://displaylab.net/"}
                  target="_blank"
                >
                  Try For Free
                </Link>
                {/* Calendly Button */}
                <button
                  className="button"
                  onClick={() =>
                    window.Calendly.initPopupWidget({
                      url: "https://calendly.com/displaylab/30min",
                    })
                  }
                >
                  Book A Demo
                </button>
              </div>
            </div>
            <div className="w-[400px] mx-auto">
              <Image
                width={1000}
                height={1000}
                src={"/images/rental/rental.png"}
                className="object-cover max-w-full h-full"
                alt="rental"
              ></Image>
            </div>
          </div>
          <div className="hero-section-fade"></div>
        </div>
      </div>
    </>
  );
}

export default CMS_HERO;
