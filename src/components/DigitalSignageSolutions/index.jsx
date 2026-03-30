import { Tabs, TabsList } from "../ui/tabs";
import ContentSection from "./ContentSection";
import TabSection from "./TabSection";

function DigitalSignageSolutions() {
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
                Digital Signage Software to Power Screens Anywhere
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
          <h2 className="h2_text text-center">
            Digital Signage Solutions for Every Industry
          </h2>
          <div className="h-6"></div>
          <p className="title_desc">
            Our platform helps organizations communicate better, engage
            customers, and deliver impactful digital experiences.
          </p>

          <Tabs
            className={"pt-10"}
            defaultValue="retail"
            orientation="vertical"
          >
            {/* Layout wrapper */}
            <div className="w-full flex flex-col md:flex-row gap-5 pt-5">
              {/* LEFT SIDE */}
              <TabsList className="flex flex-col w-full md:w-[30%] h-fit bg-transparent p-0">
                <TabSection />
              </TabsList>

              {/* RIGHT SIDE */}
              <div className="w-full md:w-[70%]">
                <ContentSection />
              </div>
            </div>
          </Tabs>
        </div>
      </div>
    </>
  );
}

export default DigitalSignageSolutions;
