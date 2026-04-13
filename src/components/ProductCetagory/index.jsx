"use client"
import { PiHighDefinitionFill } from "react-icons/pi";
import { LuScreenShare } from "react-icons/lu";
import { BsArrowsFullscreen } from "react-icons/bs";
import { MdOutlineVerifiedUser } from "react-icons/md";
import Link from "next/link";

function ProductCetagory() {

    const prodcut_cetagory_datas = [
        {
          iconImage: <PiHighDefinitionFill size={50} />,
          title: "Indoor Display",
          
        },
        {
          iconImage: <LuScreenShare size={50} />,
          title: "Stand Kiosk",
          
        },
        {
          iconImage: <BsArrowsFullscreen size={50} />,
          title: "3D Holograph",
          
        },
        {
          iconImage: <MdOutlineVerifiedUser size={50} />,
          title: "Self Ordering Kiosk",
          
        },
        {
          iconImage: <MdOutlineVerifiedUser size={50} />,
          title: "Indoor Display",
          
        },
        {
          iconImage: <MdOutlineVerifiedUser size={50} />,
          title: "Stand Kiosk",
          
        },
        {
          iconImage: <MdOutlineVerifiedUser size={50} />,
          title: "Digital Poster",
          
        },
        {
          iconImage: <MdOutlineVerifiedUser size={50} />,
          title: "Window Display",
          
        },
        {
          iconImage: <MdOutlineVerifiedUser size={50} />,
          title: "Presentation Display",
          
        },
        {
          iconImage: <MdOutlineVerifiedUser size={50} />,
          title: "Outdoor Display",
          
        },
        {
          iconImage: <MdOutlineVerifiedUser size={50} />,
          title: "Wall Mount",
          
        },
        {
          iconImage: <MdOutlineVerifiedUser size={50} />,
          title: "Digital Menu Board",
          
        },
      ];
    return ( 
    <>
    <div className="pt-20">

<h2 className="text-3xl font-bold text-center mb-10">Our Products Cetagory</h2>

        <div className="grid grid-cols-2 md:flex gap-10 md:flex-wrap md:justify-center">

            {
                prodcut_cetagory_datas.map((single_cetagory, i) => (
                    <Link href="#" className="flex flex-col items-center gap-4 mb-4 " key={i}>
                        <div className="text-center p-4 border border-gray-300 rounded-full">{single_cetagory.iconImage}</div>
                        <h3 className="text-sm font-semibold">{single_cetagory.title}</h3>
                    </Link>
                ))
            }
        </div>
    </div>
    </> 
    );
}

export default ProductCetagory;