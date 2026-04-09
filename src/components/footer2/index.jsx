"use client";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaFacebookF, FaLinkedin, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";

function Footer2() {

    const footerProductsLinks = [
        {
            name: "Digital Signage",
            href: "#"},
        {
            name: "Engage",
            href: "#"},
    ]

return ( <>
    <div className="bg-[#18232e] text-white">
    <div className="px-12">
        <div className="max-w-7xl mx-auto">
            <div className="">
                {/* Footer top */}
                <div className="relative z-1 grid w-full grid-cols-[2fr_1fr] auto-rows-auto gap-8 border-b border-[#e9e9e966] py-10 place-items-start stretch justify-between">
                    <div className="px-10">
                        <h4 className="font-medium text-2xl leading-[130%]">Utilize OptiSigns to unlock your business' potential</h4>
                        <div className="space-small"></div>
                        <div className="flex items-start justify-start gap-8">
                            <div className="">
                                <Image className="" src={"https://cdn.prod.website-files.com/638d465c7903a622e8a1dbd1/67a147d6635bde8eadf1d38b_Group%202085664063.svg"} alt="" width={31} height={32} />
                            </div>
                            <div className="">
                                <Image className="" src={"https://cdn.prod.website-files.com/638d465c7903a622e8a1dbd1/67a1451c67969a6174edc5c6_Layer%202.svg"} alt="" width={31} height={32} />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 text-center px-10">
                        <h3 className="text-[28px]">Get Started For Free</h3>
                        
                            <Link href={"#"} className="inline-flex items-center justify-center text-center capitalize whitespace-nowrap bg-[#1abf7d] text-white border-[1.5px] border-transparent rounded px-8 py-3.5 text-base font-medium leading-[180%] hover:text-[#1abf7d] hover:bg-transparent hover:border-[#1abf7d]  transition-colors duration-200">Try For Free</Link>
                        
                    </div>
                </div>
                {/* Footer center */}
                <div className="relative z-1 flex items-end justify-start gap-x-12 gap-y-8 py-10">
                    <div className="flex items-start justify-between w-full gap-x-8 gap-y-12">
                        <div className="flex flex-col items-start gap-12">
                            <div className="flex flex-col items-start gap-4">
                                <div className="text-[#3095b5]">
                                    Products
                                </div>
                                {footerProductsLinks.map((link,index) => (

                                <Link href={link.href} key={index} className="text-[#e9e9e9] hover:underline hover:text-[#1abf7d]">{link.name}</Link>
                                ))}
                            </div>
                            <div className="flex flex-col items-start gap-4">
                                <div className="text-[#3095b5]">
                                    Products
                                </div>
                                {footerProductsLinks.map((link,index) => (

                                <Link href={link.href} key={index} className="text-[#e9e9e9] hover:underline hover:text-[#1abf7d]">{link.name}</Link>
                                ))}
                            </div>
                        </div>
                        <div className="flex flex-col items-start gap-12">
                            <div className="flex flex-col items-start gap-4">
                                <div className="text-[#3095b5]">
                                    Products
                                </div>
                                {footerProductsLinks.map((link,index) => (

                                <Link href={link.href} key={index} className="text-[#e9e9e9] hover:underline hover:text-[#1abf7d]">{link.name}</Link>
                                ))}
                            </div>
                            <div className="flex flex-col items-start gap-4">
                                <div className="text-[#3095b5]">
                                    Products
                                </div>
                                {footerProductsLinks.map((link,index) => (

                                <Link href={link.href} key={index} className="text-[#e9e9e9] hover:underline hover:text-[#1abf7d]">{link.name}</Link>
                                ))}
                            </div>
                        </div>
                        <div className="flex flex-col items-start gap-12">
                            <div className="flex flex-col items-start gap-4">
                                <div className="text-[#3095b5]">
                                    Products
                                </div>
                                {footerProductsLinks.map((link,index) => (

                                <Link href={link.href} key={index} className="text-[#e9e9e9] hover:underline hover:text-[#1abf7d]">{link.name}</Link>
                                ))}
                            </div>
                            <div className="flex flex-col items-start gap-4">
                                <div className="text-[#3095b5]">
                                    Products
                                </div>
                                {footerProductsLinks.map((link,index) => (

                                <Link href={link.href} key={index} className="text-[#e9e9e9] hover:underline hover:text-[#1abf7d]">{link.name}</Link>
                                ))}
                            </div>
                        </div>
                        <div className="flex flex-col items-start gap-12">
                            <div className="flex flex-col items-start gap-4">
                                <div className="text-[#3095b5]">
                                    Products
                                </div>
                                {footerProductsLinks.map((link,index) => (

                                <Link href={link.href} key={index} className="text-[#e9e9e9] hover:underline hover:text-[#1abf7d]">{link.name}</Link>
                                ))}
                            </div>
                            <div className="flex flex-col items-start gap-4">
                                <div className="text-[#3095b5]">
                                    Contact Us
                                </div>
                                {footerProductsLinks.map((link,index) => (

                                <Link href={link.href} key={index} className="text-[#e9e9e9] hover:underline hover:text-[#1abf7d]">{link.name}</Link>
                                ))}
                                <div className="flex items-center gap-6">
                                    <FaFacebookF />
                                    <IoLogoInstagram />
                                    <FaLinkedin />
                                    <FaYoutube />
                                    <FaXTwitter />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Footer bottom */}
            </div>
        </div>
    </div>
    </div>
    </> );
}

export default Footer2;