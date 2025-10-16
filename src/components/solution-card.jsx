import Link from "next/link";
import { CiCreditCard1 } from "react-icons/ci";
import { FaMobileAlt } from "react-icons/fa";
import { FaArrowRightLong, FaTv } from "react-icons/fa6";
import { ImDisplay } from "react-icons/im";
import { IoIosTv } from "react-icons/io";

function SolutionCard() {
  const cartNumber = [1, 2, 3, 4];
  const DisplayLab_Solution_Data = [
    {
      svg: (
        <CiCreditCard1 size={120} className="object-cover rounded-lg m-auto" />
      ),
      title: "Powerful CMS Systems",
      description:
        "Easily manage schedule and control all your display content in real me.",
      link_Text: "Learn More",
    },
    {
      svg: <IoIosTv size={120} className="object-cover rounded-lg m-auto" />,
      title: "Versatile Display Products",
      description:
        "Discover LED-LCD and 3D displays disgned for every environment.",
      link_Text: "View Products",
    },
    {
      svg: <FaMobileAlt size={120} className="object-cover rounded-lg m-auto" />,
      title: "Flexible Rental Options",
      description:
        "Short-term display rental for events, offices and spocial occasions.",
      link_Text: "Explore Rentals",
    },
    {
      svg: <ImDisplay size={120} className="object-cover rounded-lg m-auto" />,
      title: "Transformative Advertising Solutions",
      description:
        "Turn any space into a domscic advertising hub with our tallored options.",
      link_Text: "See How",
    },
  ];
  return (
    <div className="section flex flex-col items-center py-30">
      {/* <h3>Explore Display Lab Solutions</h3>
      <div className="card-container">
        <div className="card">
          <CiCreditCard1 />
          <h4>Title</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe,
            dignissimos.
          </p>
          <Link href={"/"}>Learn More</Link>
        </div>
      </div> */}
      <h2 className="text-3xl md:text-5xl text-slate-900 font-bold mb-10 text-center">
        Explore Display Lab Solutions
      </h2>
      <div className="flex flex-col md:gap-4 md:flex-row">
        {DisplayLab_Solution_Data.map((data, i) => (
          <div
            className="shadow-sm border border-gray-200 w-full max-w-sm rounded-lg overflow-hidden mx-auto mt-4"
            key={i}
          >
            <div className="mt-2">{data?.svg}</div>
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
