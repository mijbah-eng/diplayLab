import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

function SolutionCard() {
  const DisplayLab_Solution_Data = [
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
      title: "Powerful CMS Systems",
      description:
        "Easily manage schedule and control all your display content in real me.",
      link_Text: "Learn More",
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
      title: "Display Products",
      description:
        "Discover LED-LCD and 3D displays disgned for every environment.",
      link_Text: "View Products",
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
      title: "Flexible Rental Options",
      description:
        "Short-term display rental for events, offices and spocial occasions.",
      link_Text: "Explore Rentals",
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
      title: "Transformative Advertising Solutions",
      description:
        "Turn any space into a domscic advertising hub with our tallored options.",
      link_Text: "See How",
    },
  ];
  return (
    <div className="section flex flex-col items-center">
      <div className="space-large"></div>
      <h2 className="title mb-10">
        Explore Display Lab Solutions
      </h2>
      <div className="flex flex-col md:gap-4 md:flex-row">
        {DisplayLab_Solution_Data.map((data, i) => (
          <div
            className="card"
            key={i}
          >
            <div className="mt-2 mx-auto w-40">{data?.iconImage}</div>
            <div className="px-4 py-2 text-center">
              <h3 className="card_title">
                {data?.title}
              </h3>
              <p className="card_desc">
                {data?.description}
              </p>
              <Link
                href={"/"}
                className={`card_link ${
                  i === 1 ? `mt-10` : ``
                } `}
              >
                {data?.link_Text} <FaArrowRightLong />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SolutionCard;
