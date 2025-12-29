import { PiHighDefinitionFill } from "react-icons/pi";
import { LuScreenShare } from "react-icons/lu";
import { BsArrowsFullscreen } from "react-icons/bs";
import { MdOutlineVerifiedUser } from "react-icons/md";
function Rental_Options() {
      const DisplayLab_Solution_Data = [
    {
      iconImage: <PiHighDefinitionFill size={50} />,
      title: "Flexible Plans",
      description:
        "Monthly or multi mounth rentals for offices and stores",
      link_Text: "Learn More",
    },
    {
      iconImage: <LuScreenShare size={50} />,
      title: "Professional Installation",
      description:
        "Smooth setup for all displays, including LED, LCD and 3D",
      link_Text: "View Products",
    },
    {
      iconImage: <BsArrowsFullscreen size={40} />,
      title: "Custom Content creation ",
      description:
        "Display Lab can tailor visual content to your needs",
      link_Text: "Explore Rentals",
    },
    {
      iconImage: <MdOutlineVerifiedUser size={50} />,
      title: "24/7 Support",
      description:
        "Responsive and reliable assistance for all customers",
      link_Text: "See How",
    },
  ];
    return ( <>
       <div className="section flex flex-col items-center">
      <div className="space-large"></div>
      <div className="flex flex-col gap-5">
         <h2 className="title text-center">
        Rental Benefits & Options 
      </h2>
      <p className="section_desc text-center mb-20">
        Choose from flexible rental durations, premium displays and full-service support.
      </p>
      </div>
      <div className="flex flex-col md:gap-4 md:flex-row container">
        {DisplayLab_Solution_Data.map((data, i) => (
          <div
            className="shadow-sm border border-gray-200 w-full max-w-sm rounded-lg overflow-hidden mx-auto mt-4"
            key={i}
          >
            <div className="mt-2 mx-auto w-10 text-center">{data?.iconImage}</div>
            <div className="px-4 py-2 text-center flex flex-col justify-between gap-4 md:gap-8">
              <h3 className="card_title">{data?.title}</h3>
              <p className="mt-3 card_desc mb-2">
                {data?.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </> );
}

export default Rental_Options;