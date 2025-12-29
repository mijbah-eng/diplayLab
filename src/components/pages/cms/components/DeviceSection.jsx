import Image from "next/image";
import { FaHospitalAlt } from "react-icons/fa";
import { IoRestaurantSharp, IoSchool } from "react-icons/io5";
import { MdEvent, MdOutlineHomeWork } from "react-icons/md";
function DEVICE_SECTION() {
  const devices = [
    {
      icon: <MdOutlineHomeWork size={40} />,
      title: "Rental",
    },
    {
      icon: <IoRestaurantSharp size={40} />,
      title: "Restaurants",
    },
    {
      icon: <IoSchool size={40} />,
      title: "School",
    },
    {
      icon: <FaHospitalAlt size={40} />,
      title: "Hospitals",
    },
    {
      icon: <MdEvent size={40} />,
      title: "Events",
    },
  ];
  return (
    <>
      <div className="space-large"></div>
      <div className="container d_flex">
        <div className="image">
          <Image
            src={"/images/rental/rental.png"}
            alt=""
            width={1000}
            height={1000}
            className="object-cover w-sm h-full"
          />
        </div>
        <div className="content d_flex">
          <div className="flex flex-col  items-center gap-5">
            <h2 className="title">Ready to simplify</h2>
            <span className="section_desc mt-5">Your screen management?</span>
          </div>
          <div className="deviceFeatures grid grid-cols-3 md:grid-cols-5 gap-10 mt-8">
            {devices.map((device, index) => (
              <div
                key={index}
                className="singleFeature flex flex-col items-center gap-2 text-[#fff] bg-[#125884] px-5 rounded-xl py-2"
              >
                {device?.icon}
                <h4 className="text-lg font-semibold">{device?.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default DEVICE_SECTION;
