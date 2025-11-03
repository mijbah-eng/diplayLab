"use client";
import Button from "@/components/ui/button";
import Image from "next/image";

function CMS_HERO() {
    return ( 
        <div className="hero-section mt-20">
            <div className="bg-linear-gradient">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-[80px] md:gap-[40px] mx-auto px-4 py-30 pt-10 md:pt-30 container">
                    <div className="max-md:text-center pr-0 md:pr-[22%]">
                        <h2 className="text-3xl md:text-5xl text-slate-900 font-bold">
                        About the CMS
                        </h2>
                        <p className="mt-4 text-base text-slate-900 mb-8">
                        Display Lab CMS lets you control, schedule and design your digital screens remotely
                        </p>
                        <div className="mt-8 flex flex-wrap max-md:justify-center gap-4">
                        <Button btnName={"Try For Free"} route={"/cms"}/>
                        <Button btnName={"Book A Demo"} route={"/"}/>
                        </div>
                    </div>
                    <div className="w-[400px] mx-auto">
                        <Image
                        width={1000}
                        height={1000}
                        src={"/images/rental/rental.png"}
                        className="object-cover max-w-full h-full"
                        alt="rental"
                        ></Image>
                    </div>
                </div>
                <div className="hero-section-fade"></div>
            </div>
        </div>
     );
}

export default CMS_HERO;