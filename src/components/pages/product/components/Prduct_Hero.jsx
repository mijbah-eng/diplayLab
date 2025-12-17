"use client"
import Button from "@/components/ui/button";
import Image from "next/image";

function Prduct_Hero() {
    return ( <>
    <div className="hero-section mt-20">
        <div className=" product-hero-bg h-[100vh]">
            <div className="container">
                <div className="md:w-2xl mr-auto px-4 pt-20 md:pt-50 ">
                    <div className="max-md:text-center pr-0 md:pr-[22%]">
                        <h2 className="text-3xl md:text-5xl text-white font-bold">
                        Versatile Dispaly Procuts
                        </h2>
                        <p className="mt-4 text-2xl text-white mb-8">
                        Discover a wide range of diplay products from interactive kiosks to outdoor screens-perfect for any enviroment.
                        </p>
                    </div>
                    {/* <div className="w-[400px] mx-auto">
                        <Image
                        width={1000}
                        height={1000}
                        src={"/images/pages/products/hero/hero-image.png"}
                        className="object-cover max-w-full h-full"
                        alt="rental"
                        ></Image>
                    </div> */}
                </div>
            </div>
                
            </div>
    </div>
    </> );
}

export default Prduct_Hero;