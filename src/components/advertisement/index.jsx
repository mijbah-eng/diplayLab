import { adsCardDatas } from "@/utils";
import AdsCard from "./adsCard";

function Advertisement_Solutions() {
  return (
    <>
      <div className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          {/* Hero Section */}
          <div className="hero_section grid lg:grid-cols-2 gap-12 items-center pb-24">
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
            <div className="text-center lg:text-left">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Advertisement Solutions
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
                Turn any screen into a powerful communication and marketing
                platform. Create, manage, and publish content across multiple
                displays from one cloud dashboard.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"></div>
            </div>
            
          </div>
          {/* Heading */}
          <h2 className="text-center h2_text">
            Display Lab Advertisement Solutions
          </h2>
          <div className="h-6"></div>
          <p className="title_desc mb-8">
            Turn screens into revenue-generating advertising platforms.
          </p>
          <div className="h-6"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {adsCardDatas.map((item, index) => (
              <AdsCard key={index} data={item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Advertisement_Solutions;
