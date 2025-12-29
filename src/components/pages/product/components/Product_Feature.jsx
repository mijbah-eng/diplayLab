
import { PiHighDefinitionFill } from "react-icons/pi";
import { LuScreenShare } from "react-icons/lu";
import { BsArrowsFullscreen } from "react-icons/bs";
import { MdOutlineVerifiedUser } from "react-icons/md";
function Product_Feature() {
    const DisplayLab_Solution_Data = [
    {
      iconImage: <PiHighDefinitionFill size={50} />,
      title: "High Resolutioin",
      description:
        "Crisp and clear visuals with 4K and Full HD options available.",
      link_Text: "Learn More",
    },
    {
      iconImage: <LuScreenShare size={50} />,
      title: "Interactive Touchscreems",
      description:
        "Engage your audience with responsive and intuitive fouch capabilities",
      link_Text: "View Products",
    },
    {
      iconImage: <BsArrowsFullscreen size={50} />,
      title: "Customizarble Sizes",
      description:
        "Choose From a arange of sizes to fit any space or application.",
      link_Text: "Explore Rentals",
    },
    {
      iconImage: <MdOutlineVerifiedUser size={50} />,
      title: "Durability",
      description:
        "Built to withstad various enviroments both indoor and cutdoors.",
      link_Text: "See How",
    },
  ];
    return ( <>
    <div className="section flex flex-col items-center">
      <div className="space-large"></div>
      <h2 className="title mb-10 text-center">
        Explore Display Lab Solutions
      </h2>
      <div className="flex flex-col md:gap-4 md:flex-row container">
        {DisplayLab_Solution_Data.map((data, i) => (
          <div
            className="card"
            key={i}
          >
            <div className="mt-2 mx-auto w-10 text-center">{data?.iconImage}</div>
            <div className="px-4 py-2 text-center flex flex-col justify-between gap-4 md:gap-8">
              <h3 className="card_title">{data?.title}</h3>
              <p className=" card_desc mb-2">
                {data?.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>

    </> );
}

export default Product_Feature;