import SingleSolutionCard from "./SingleSolutionCard";

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
          <h2 className="h2_text text-center">
            Powerful Tools to Run Your Digital Signage Network
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
              <SingleSolutionCard key={index} card={card} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default SolutionCard;
