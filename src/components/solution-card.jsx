import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";


function SolutionCard() {
  const DisplayLab_Solution_Data = [
    {
      iconImage: <Image className="object-cover w-full" src={"/images/explore-Display/Icon-01.png"} alt="" width={100} height={100} />,
      title: "Powerful CMS Systems",
      description:
        "Easily manage schedule and control all your display content in real me.",
      link_Text: "Learn More",
    },
    {
      iconImage: <Image className="object-cover w-full" src={"/images/explore-Display/Icon-02.png"} alt="" width={100} height={100} />,
      title: "Versatile Display Products",
      description:
        "Discover LED-LCD and 3D displays disgned for every environment.",
      link_Text: "View Products",
    },
    {
      iconImage: <Image className="object-cover w-full" src={"/images/explore-Display/Icon-03.png"} alt="" width={100} height={100} />,
      title: "Flexible Rental Options",
      description:
        "Short-term display rental for events, offices and spocial occasions.",
      link_Text: "Explore Rentals",
    },
    {
      iconImage: <Image className="object-cover w-full" src={"/images/explore-Display/Icon-04.png"} alt="" width={100} height={100} />,
      title: "Transformative Advertising Solutions",
      description:
        "Turn any space into a domscic advertising hub with our tallored options.",
      link_Text: "See How",
    },
  ];
  return (
    <div className="section flex flex-col items-center">
      <div className="space-large"></div>
      <h2 className="text-3xl md:text-5xl text-slate-900 font-bold mb-10 text-center">
        Explore Display Lab Solutions
      </h2>
      <div className="flex flex-col md:gap-4 md:flex-row">
        {DisplayLab_Solution_Data.map((data, i) => (
          <div
            className="shadow-sm border border-gray-200 w-full max-w-sm rounded-lg overflow-hidden mx-auto mt-4"
            key={i}
          >
            <div className="mt-2 mx-auto w-40">{data?.iconImage}</div>
            <div className="px-4 py-2 text-center">
              <h3 className="text-2xl md:text-3xl font-semibold">{data?.title}</h3>
              <p className="mt-3 text-xs md:text-sm text-slate-500 leading-relaxed">
                {data?.description}
              </p>
              <Link
                href={"/"}
                className="flex justify-center items-center gap-2 mt-6 px-4 py-2.5 w-full rounded-lg text-sm tracking-wider font-medium border-none outline-none cursor-pointer hover:underline"
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
