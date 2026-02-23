"use client";
import { logoBlue, navData } from "@/utils";
import Link from "next/link";
import { useEffect, useState } from "react";

function NavberMain() {
  const [showNavShadow, setShowNavShadow] = useState(false);

//   shawNavShadow
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setShowNavShadow(true);
      } else {
        setShowNavShadow(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav
      className={`flex flex-col sticky w-full  justify-center bg-white top-0 z-[999] ${showNavShadow ? "scrolled" : ""}`}
    >
      <div className="navShadow !top-0 !h-full  opacity-0 transition-opacity duration-300 ease-in-out pointer-events-none pb-0 flex absolute inset-x-0"></div>
      <div className="static z-[1000 bg-[#ddd]">
        <div className="bg-white flex flex-col justify-center h-[5rem]">
          <div className="px-[2.5rem]">
            <div className="relative flex justify-between items-center w-full max-w-7xl m-auto px-0">
              <Link className="w-50" href={"#"}>
                {" "}
                <img src={logoBlue} alt="Logo" />
              </Link>
              <div className="static flex justify-between items-center w-full">
                <div className="flex w-full justify-center">
                  <div className="flex items-center mx-auto">
                    {navData.map((singleNav, index) => (
                      <Link
                        key={index}
                        className="flex items-center py-[.75rem] px-[1.25rem] font-semibold transition-[all .2s] text-[#425466] hover:text-[#333]"
                        href={singleNav?.navLink}
                      >
                        {singleNav?.navTab}
                      </Link>
                    ))}
                  </div>
                  <div className="flex justify-center items-center gap-4">
                    <Link
                      className="border-[1.5px] border-[#00be5f] bg-[#00be5f] text-white py-[0.4rem] px-[1.5rem] text-base font-medium leading-[180%] transition-colors duration-200 rounded-sm hover:bg-white hover:text-black"
                      href={"#"}
                    >
                      Log in
                    </Link>
                    <Link
                      className="border-[1.5px] border-[#105783] bg-[#105783] text-white py-[0.4rem] px-[1.5rem] text-base font-medium leading-[180%] transition-colors duration-200 rounded-sm hover:bg-white hover:text-[#105783]"
                      href={"#"}
                    >
                      Try For Free
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavberMain;
