import Image from "next/image";
import { MdEvent, MdOutlineHomeWork } from "react-icons/md";
import { IoRestaurantSharp, IoSchool } from "react-icons/io5";
import { FaHospitalAlt } from "react-icons/fa";
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
            icon: <IoSchool  size={40} />,
            title: "School",
        },
        {
            icon: <FaHospitalAlt  size={40} />,
            title: "Hospitals",
        },
        {
            icon: <MdEvent  size={40} />,
            title: "Events",
        }
    ]
  return (
    <>
    <div className="space-large"></div>
      <div className="container flex flex-col items-center gap-10">
        <div className="image">
            <Image src={"/images/rental/rental.png"} alt="" width={1000} height={1000} className="object-cover w-sm h-full" />
        </div>
        <div className="content flex flex-col items-center">
          <h2 className="text-3xl md:text-5xl text-slate-900 font-bold">Ready to simplify</h2>
          <span className="font-semibold text-xl mt-5">Your screen management?</span>
          <div className="deviceFeatures grid grid-cols-3 md:grid-cols-5 gap-10 mt-8">
            {devices.map((device, index) => (
                <div key={index} className="singleFeature flex flex-col items-center gap-2 text-blue-500">
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
