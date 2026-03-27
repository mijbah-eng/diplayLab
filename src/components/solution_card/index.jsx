"use client";
import SingleSolutionCard2 from "./SingleSolutionCard2";

function SolutionCard() {
  const card_Data = [
    {
      icon: "/images/explore-Display/Icon-01.png",
      title: "Works on Any Screen, Any Device",
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
      title: "Easy Content Management",
      description:
        "Easily display content and publish updates with our simple, user-friendly CMS.Create engaging designs with drag-and-drop tools and customizable templates.",
      link_Text: "Learn more",
      link: "",
    },
  ];

  return (
    <>
      <div className="py-16 md:py-24 bg-[#f5f7fb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="hero_section pb-24">
            <div className="relative w-full md:w-3xl lg:w-5xl mx-auto">
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

          <p className="title_desc">
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
