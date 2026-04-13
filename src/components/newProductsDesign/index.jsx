"use client";
import Image from "next/image";
import Link from "next/link";

function NewProdcutDesign() {
    return ( <>
    <div className="bg-[#f5f5f7] py-16 my-5 relative">
   <div className="flex flex-col items-center justify-center">
        <h3 className="text-5xl font-bold mb-5">Indoor Display</h3>
        <Link
                href={"https://displaylab.net/signup"}
                target="_blank"
                className="w-xs sm:w-fit bg-cyan-600 text-white px-8 py-4 rounded-full font-semibold text-base hover:bg-cyan-700 transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer"
              >
                Lern More
              </Link>
        <Image src="/images/products/products-1.png" alt="Digital Menu Board" width={400} height={300} />
    </div>
    </div>
 
    </> );  
}

export default NewProdcutDesign;