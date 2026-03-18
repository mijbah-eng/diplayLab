"use client"
import Link from "next/link";
import SingleSolutionCard2 from "./SingleSolutionCard2";

function SolutionCard() {
  const card_Data = [
    {
      icon: "/images/explore-Display/Icon-01.png",
      title: "Cloud-Based CMS",
      description:
        "Manage content from anywhere with a centralized digital signage CMS. Upload media, organize playlists, and control screens remotely.",
      link_Text: "Learn more",
      link: "",
    },
    {
      icon: "/images/explore-Display/Icon-02.png",
      title: "Multi-Screen Management",
      description:
        "Control thousands of screens across multiple locations. Organize by department, region, or venue, and update playlists remotely.",
      link_Text: "Learn more",
      link: "",
    },
    {
      icon: "/images/explore-Display/Icon-03.png",
      title: "Smart Content Scheduling",
      description:
        "Screen content to display at specific times, days, or locations. Automatically schedule playlists and campaigns.",
      link_Text: "Learn more",
      link: "",
    },
    {
      icon: "/images/explore-Display/Icon-04.png",
      title: "App & Data Integrations",
      description:
        "Display social media feeds, dashboards, news, calendar events, and real-time data from business apps and systems.",
      link_Text: "Learn more",
      link: "",
    },
  ];

  return (
    <>
      <div className="py-16 md:py-24 bg-[#f5f7fb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center pb-24">
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
          <h2 className="h2_text text-center">
            Powerful Tools to Run <br /> Your Digital Signage Network
          </h2>

          <div className="h-6"></div>

          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto">
            Everything you need to manage, schedule, and control digital signage
            displays from one platform.
          </p>

          <div className="h-14"></div>

          {/* Cards */}
          <div className="grid md:grid-cols-2 gap-6">
            {card_Data.map((card, index) => (
              // <SingleSolutionCard key={index} card={card} />
              <SingleSolutionCard2 key={index} card={card} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default SolutionCard;
