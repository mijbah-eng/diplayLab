import Link from "next/link";

function DigitalSignage() {
  const DigitalSignagePlatfroms = [
    {
      img_src:
        "https://www.yodeck.com/wp-content/uploads/2023/09/restaurant-digital-signage-yodeck.jpg",
      title: "Restaurants",
      description:
        "Showcase menus, promotions, and special offers with eye-catching visuals.Boost upselling and enhance the dining experience.",
    },

    {
      img_src:
        "https://www.yodeck.com/wp-content/uploads/2023/09/TV-Screen-1.jpg",
      title: "Grocery Stores",
      description:
        " Improve safety and productivity from the factory floor to the office.Share real-time updates, alerts, and operational insights.",
    },

    {
      img_src: "https://www.yodeck.com/wp-content/uploads/2023/09/Retail.jpg",
      title: "Retail & Mall",
      description:
        "Highlight products, promotions, and campaigns to attract shoppers.Increase engagement and drive more in-store sales.",
    },

    {
      img_src:
        "https://www.yodeck.com/wp-content/uploads/2023/09/Education-1.jpg",
      title: "Education",
      description:
        "Engage students and staff with dynamic and informative displays.Share announcements, schedules, and campus updates بسهولة.",
    },

    {
      img_src: "https://www.yodeck.com/wp-content/uploads/2023/09/Offices.jpg",
      title: "Offices",
      description:
        "Enhance workplace communication with news, dashboards, and updates.Keep teams informed, connected, and productive.",
    },
    
    {
      img_src:
        "https://www.yodeck.com/wp-content/uploads/2023/09/TV-Screen-1.jpg",
      title: "Government",
      description:
        " Improve safety and productivity from the factory floor to the office.Share real-time updates, alerts, and operational insights.",
    },
    {
      img_src:
        "https://www.yodeck.com/wp-content/uploads/2023/09/TV-Screen-1.jpg",
      title: "Religious Venues",
      description:
        " Improve safety and productivity from the factory floor to the office.Share real-time updates, alerts, and operational insights.",
    },
    {
      img_src:
        "https://www.yodeck.com/wp-content/uploads/2023/09/TV-Screen-1.jpg",
      title: "Manufacturing",
      description:
        " Improve safety and productivity from the factory floor to the office.Share real-time updates, alerts, and operational insights.",
    },

    {
      img_src:
        "https://www.yodeck.com/wp-content/uploads/2023/09/Healthcare.jpg",
      title: "Healthcare",
      description:
        "Share important information, directions, and health awareness content.Improve patient experience and streamline communication.",
    },
  ];
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {DigitalSignagePlatfroms.map(
            (singleDigitalSignagePlatfrom, index) => (
              <Link className="text-center" key={index} href="#">
                <div className="mb-6 flex justify-center">
                  <img src={singleDigitalSignagePlatfrom?.img_src} alt="" />
                </div>
                <h3 className="text-xl font-semibold text-[#105783] underline underline-offset-4 mb-4">
                  {singleDigitalSignagePlatfrom?.title}
                </h3>
                <p className="text-gray-600 leading-relaxed max-w-sm mx-auto">
                  {singleDigitalSignagePlatfrom?.description}
                </p>
              </Link>
            ),
          )}
        </div>
      </div>
    </section>
  );
}

export default DigitalSignage;
