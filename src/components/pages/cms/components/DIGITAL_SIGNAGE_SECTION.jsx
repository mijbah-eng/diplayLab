import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

function DIGITAL_SIGNAGE_SECTION() {
    const linkData = [
        { link_Text: "Recommended Hardware" },
        { link_Text: "All Supported Platforms" },
    ]
    return ( <>
    <div className="">
        <div className="space-large"></div>
        <div className="container">
            <div className="title">
                <h2 className="text-3xl md:text-5xl text-slate-900 font-bold text-center">Unlock Your Potential <br /> With Out Digital Signage Software</h2>
                <p className="text-center mt-5">Turn any screen or TV into captivating digital signage with our powerful, easy-to-use digital signage platform.</p>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center gap-5 mt-10">
                <div className="md:w-1/2 flex justify-center">
                    <Image src={"/images/rental/rental.png"} alt="" width={1000} height={1000} className="object-cover w-sm h-full" />
                </div>
                
                <div className="md:w-1/2 flex flex-col mt-5">
                    <h3 className="text-2xl md:text-3xl font-semibold mt-2">Any Screen, Any Hardware</h3>
                    <p className="mt-4 w-md">We offer the largest variety of platform and hardware options,including our popular DisplayLab devices. Enjoy the freedom to choose the best hardware for your needs with our flexible digital signage software solution.</p>
                    <div className="flex gap-10">
                    {
                        linkData.map((data, i) => (
                            <Link key={i}
                                href={"/"}
                                className="flex items-center gap-2 mt-6 rounded-lg text-sm tracking-wider font-medium border-none outline-none cursor-pointer hover:underline">
                                {data?.link_Text} <FaArrowRightLong />
                            </Link>
                        ))
                    }
                    </div>
                    
                    

                </div>
            </div>


        </div>
       
    </div>
    </> );
}

export default DIGITAL_SIGNAGE_SECTION;