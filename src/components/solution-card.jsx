import Image from "next/image";
import Link from "next/link";

function SolutionCard() {
  const card_Data = [
    {
      iconImage: (
        <Image
          className="object-cover w-full"
          src={"/images/explore-Display/Icon-01.png"}
          alt=""
          width={100}
          height={100}
        />
      ),
      title: "Cloud-Based CMS",
      description:
        "Manage content from anywhere with a centralized digital signage CMS. Upload media, organize playlists, and control displays remotely.",
      link_Text: "Learn more",
      link: "",
    },
    {
      iconImage: (
        <Image
          className="object-cover w-full"
          src={"/images/explore-Display/Icon-02.png"}
          alt=""
          width={100}
          height={100}
        />
      ),
      title: "Multi-Screen Management",
      description:
        "Control thousands of screens across multiple locations from one dashboard. Organize screens by groups, regions, or departments.",
      link_Text: "Learn more",
      link: "",
    },
    {
      iconImage: (
        <Image
          className="object-cover w-full"
          src={"/images/explore-Display/Icon-03.png"}
          alt=""
          width={100}
          height={100}
        />
      ),
      title: "Smart Content Scheduling",
      description:
        "Schedule content to display at specific times, days, or locations. Automate campaigns and announcements with ease.",
      link_Text: "Learn more",
      link: "",
    },
    {
      iconImage: (
        <Image
          className="object-cover w-full"
          src={"/images/explore-Display/Icon-04.png"}
          alt=""
          width={100}
          height={100}
        />
      ),
      title: "App & Data Integrations",
      description:
        "Display content from social media, dashboards, calendars, news feeds, and other business apps.",
      link_Text: "Learn more",
      link: "",
    },
    {
      iconImage: (
        <Image
          className="object-cover w-full"
          src={"/images/explore-Display/Icon-04.png"}
          alt=""
          width={100}
          height={100}
        />
      ),
      title: "Remote Device Control",
      description:
        "Monitor screen health, update content instantly, and manage devices without being on-site.",
      link_Text: "Learn more",
      link: "",
    },
  ];
  return (
    <>
      <div className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="h2_text text-center">
            Powerful Tools to Run Your Digital Signage Network
          </h2>
          <div className="space-small"></div>
          <p className="text-lg text-center">
            Everything you need to manage, schedule, and control digital signage
            displays from one platform.
          </p>
          <div className="space-small"></div>
          <div className="space-small"></div>
          <div className="flex flex-col md:gap-4 md:flex-row">
            <div className="flex flex-wrap justify-center items-center gap-5 ">
              {/* <div className=" md:w-[420px] flex gap-5 justify-between rounded-sm px-4 py-6 shadow">
                <div className="relative logo w-[160px] h-[50px]">
                  <div className="absolute top-0 left-0 bg-green-400 w-full h-full rounded-full"></div>
                  <img
                    className="absolute top-0 left-0 z-1"
                    src="/images/explore-Display/Icon-01.png"
                    alt=""
                  />
                </div>
                <div className="">
                  <h3 className="text-[22px] md:text-[28px] font-semibold mb-2">Cloud-Based CMS</h3>
                  <p className="text-base mb-2">
                    Manage content from anywhere with a centralized digital
                    signage CMS. Upload media, organize playlists, and control
                    displays remotely.
                  </p>
                  <Link className="text-green-600 text-base hover:underline" href={"#"}>Learn more</Link>
                </div>
              </div> */}
              {card_Data.map((item, index) => (
                <div
                  key={index}
                  className="md:w-md flex gap-5 justify-between rounded-sm px-4 py-6 shadow"
                >
                  <div className="relative logo w-[160px] h-[50px]">
                    <div className="absolute top-0 left-0 bg-green-400 w-full h-full rounded-full"></div>
                    <img
                      className="absolute top-0 left-0 z-1"
                      src="/images/explore-Display/Icon-01.png"
                      alt=""
                    />
                  </div>
                  <div className="">
                    <h3 className="text-[22px] md:text-[28px] font-semibold mb-2">
                      {item?.title}
                    </h3>
                    <p className="text-base mb-2">
                      {item?.description}
                    </p>
                    <Link
                      className="text-green-600 text-base hover:underline"
                      href={item?.link}
                    >
                      {item?.link_Text}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SolutionCard;
