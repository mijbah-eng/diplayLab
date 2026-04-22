"use client";
import { logoBlue } from "@/utils";
import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaLinkedin,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";

function Footer() {
  const footerProductsLinks = [
    {
      name: "Digital Signage",
      href: "#",
    },
    {
      name: "Engage",
      href: "#",
    },
  ];

  return (
    <>
      <div className="bg-black text-white">
        <div className="px-5 md:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="w-full">
              {/* Footer top */}
              <div className="relative z-1 grid w-full md:grid-cols-[2fr_1fr] auto-rows-auto gap-8 border-b border-[#e9e9e966] py-10 place-items-center md:place-items-start stretch justify-between">
                <div className="w-full md:px-10">
                  <h4 className="font-medium text-xl md:text-2xl leading-[130%]">
                    Utilize Display Lab to unlock your business' potential
                  </h4>
                  <div className="space-small"></div>
                  <div className="hidden md:flex items-start justify-start gap-8">
                    <div className="">
                      <Image
                        className=""
                        src={
                          "https://cdn.prod.website-files.com/638d465c7903a622e8a1dbd1/67a147d6635bde8eadf1d38b_Group%202085664063.svg"
                        }
                        alt=""
                        width={31}
                        height={32}
                      />
                    </div>
                    <div className="">
                      <Image
                        className=""
                        src={
                          "https://cdn.prod.website-files.com/638d465c7903a622e8a1dbd1/67a1451c67969a6174edc5c6_Layer%202.svg"
                        }
                        alt=""
                        width={31}
                        height={32}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-4 text-center md:px-10 w-md md:w-fit">
                  <h3 className="text-lg md:text-[28px] font-bold">Get Started For Free</h3>

                  <Link
                    href={"#"}
                    className="w-full inline-flex items-center justify-center text-center capitalize whitespace-nowrap bg-[#3095b5] text-white border-[1.5px] border-transparent rounded px-8 py-3.5 text-base font-medium leading-[180%] hover:text-[#3095b5] hover:bg-transparent hover:border-[#3095b5]  transition-colors duration-200"
                  >
                    Try For Free
                  </Link>
                </div>
              </div>
              {/* Footer center */}
              <div className="relative z-1 flex items-end justify-start gap-x-12 gap-y-8 py-10">
                <div className="flex flex-col md:flex-row items-start justify-between w-full gap-x-8 gap-y-12">
                  <div className="flex flex-col items-start gap-12">
                    <div className="flex flex-col items-start gap-4">
                      <div className="text-[#3095b5]">Products</div>
                      {footerProductsLinks.map((link, index) => (
                        <Link
                          href={link.href}
                          key={index}
                          className="text-[#e9e9e9] hover:underline"
                        >
                          {link.name}
                        </Link>
                      ))}
                    </div>
                    <div className="flex flex-col items-start gap-4">
                      <div className="text-[#3095b5]">Products</div>
                      {footerProductsLinks.map((link, index) => (
                        <Link
                          href={link.href}
                          key={index}
                          className="text-[#e9e9e9] hover:underline"
                        >
                          {link.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col items-start gap-12">
                    <div className="flex flex-col items-start gap-4">
                      <div className="text-[#3095b5]">Products</div>
                      {footerProductsLinks.map((link, index) => (
                        <Link
                          href={link.href}
                          key={index}
                          className="text-[#e9e9e9] hover:underline"
                        >
                          {link.name}
                        </Link>
                      ))}
                    </div>
                    <div className="flex flex-col items-start gap-4">
                      <div className="text-[#3095b5]">Products</div>
                      {footerProductsLinks.map((link, index) => (
                        <Link
                          href={link.href}
                          key={index}
                          className="text-[#e9e9e9] hover:underline"
                        >
                          {link.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col items-start gap-12">
                    <div className="flex flex-col items-start gap-4">
                      <div className="text-[#3095b5]">Products</div>
                      {footerProductsLinks.map((link, index) => (
                        <Link
                          href={link.href}
                          key={index}
                          className="text-[#e9e9e9] hover:underline"
                        >
                          {link.name}
                        </Link>
                      ))}
                    </div>
                    <div className="flex flex-col items-start gap-4">
                      <div className="text-[#3095b5]">Products</div>
                      {footerProductsLinks.map((link, index) => (
                        <Link
                          href={link.href}
                          key={index}
                          className="text-[#e9e9e9] hover:underline"
                        >
                          {link.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col items-start gap-12">
                    <div className="flex flex-col items-start gap-4">
                      <div className="text-[#3095b5]">Products</div>
                      {footerProductsLinks.map((link, index) => (
                        <Link
                          href={link.href}
                          key={index}
                          className="text-[#e9e9e9] hover:underline"
                        >
                          {link.name}
                        </Link>
                      ))}
                    </div>
                    <div className="flex flex-col items-start gap-4">
                      <div className="text-[#3095b5]">Contact Us</div>
                      <div className="">
                        7676 Hillmont Street, #300,{" "}
                        <span className="block">Houston, TX 77040</span>
                      </div>
                      <div className="flex items-center gap-6">
                        <Link className="hover:text-[#3095b5] text-xl" href={""}>
                          <FaFacebookF />
                        </Link>
                        <Link className="hover:text-[#3095b5] text-xl" href={""}>
                          <IoLogoInstagram />
                        </Link>
                        <Link className="hover:text-[#3095b5] text-xl" href={""}>
                          <FaLinkedin />
                        </Link>
                        <Link className="hover:text-[#3095b5] text-xl" href={""}>
                          <FaYoutube />
                        </Link>
                        <Link className="hover:text-[#3095b5] text-xl" href={""}>
                          <FaXTwitter />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Footer bottom */}
              <div className="relative z-1 flex flex-col items-center md:flex-row md:justify-start md:items-end gap-x-12 gap-y-8 pt-12 pb-12">
                <div className="">
                  <div className="flex flex-col gap-4">
                    <Link href="/" className="flex justify-center">
                      <Image
                        src={logoBlue}
                        alt="Display Lab - Digital Signage Software Solutions"
                        width={200}
                        height={200}
                        className="w-40"
                      ></Image>
                    </Link>
                    <div className="">
                      Display Lab Inc. ©{" "}
                      <span className="copyright_year">
                        {" "}
                        {new Date().getFullYear()}
                      </span>{" "}
                      All Rights Reserved
                    </div>
                  </div>
                </div>
                <div className="">
                  <div className="flex flex-wrap lg:flex-nowrap items-center gap-x-3.5">
                    <Link
                      href="/terms/return-policy"
                      className="footer_bottom_link"
                    >
                      Return Policy
                    </Link>
                    <Link href="/privacy-policy" className="footer_bottom_link">
                      Privacy Statement
                    </Link>
                    <Link
                      href="https://app.termly.io/dsar/16b2534f-640f-4c73-8eed-9964d89f6434"
                      target="_blank"
                      className="footer_bottom_link"
                    >
                      Your Privacy Choices
                    </Link>
                    <Link href="/terms-of-use" className="footer_bottom_link">
                      Terms of Use
                    </Link>
                    <Link
                      href="/terms/sla"
                      className="footer_bottom_link border-none"
                    >
                      Service Level Agreement
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
