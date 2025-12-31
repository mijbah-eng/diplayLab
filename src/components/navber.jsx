"use client";
import Link from "next/link";
import { HiMenu, HiX } from "react-icons/hi";

import { navData } from "@/utils";
import { useEffect, useState } from "react";

function Navber() {
  const [showFixedNav, setShowFixedNav] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowFixedNav(true);
      } else {
        setShowFixedNav(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <nav className="w-full">
        <div className="absolute z-10 px-[20px] md:px-[160px] py-[15px] flex justify-between items-center w-full">
          <Link href={"/"} className="logo w-50">
            <img src="images/logo/logo.png" alt="Logo" />
          </Link>
          <div className="menu md:flex gap-10 hidden font-bold text-white">
            {navData.map((item, index) => (
              <Link key={index} href={item.navLink}>
                {item.navTab}
              </Link>
            ))}
          </div>
          <div
            className="md:hidden text-white text-3xl cursor-pointer absolute top-6 right-5 hover:text-slate-300 transition-all duration-200 ease-in"
            onClick={() => setIsOpen(true)}
          >
            <HiMenu />
          </div>

          {/* Menu Start */}
          <div
            className={`absolute top-0 left-0 w-full bg-black flex flex-col gap-6 py-6 font-bold text-slate-100 md:hidden transition-all duration-500 ease-in-out ${
              isOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="flex justify-between items-center px-5">
              <p className="text-3xl text-slate-300">Menu</p>
              <div
                className="text-white hover:text-slate-300 cursor-pointer text-3xl "
                onClick={() => setIsOpen(false)}
              >
                <HiX />
              </div>
            </div>
            <hr className="text-slate-700" />
            <div className="flex flex-col px-5 gap-6 py-6 font-bold">
              {navData.map((item, index) => (
                <Link
                  className="hover:text-slate-300 transition-all duration-200 ease-in"
                  key={index}
                  href={item.navLink}
                  onClick={() => setIsOpen(false)}
                >
                  {item.navTab}
                </Link>
              ))}
            </div>
          </div>
          {/* Menu End */}
        </div>
      </nav>

      {showFixedNav && (
        <nav className="relative w-full fixed-nav">
          <div
            className="flex justify-between px-[20px] md:px-[160px] py-[15px] items-center"
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              // padding: "15px 80px",
              background: "#fff",
              color: "white",
              boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
              zIndex: 1000,
            }}
          >
            <Link href={"/"} className="logo w-50">
              <img src="images/logo/logo.png" alt="Logo" />
            </Link>

            <div className="menu md:flex gap-10 hidden font-bold text-black">
              {navData.map((item, index) => (
                <Link className="navLink" key={index} href={item.navLink}>
                  {item.navTab}
                </Link>
              ))}
            </div>

            <div
              className={`md:hidden text-black text-3xl cursor-pointer absolute top-6 right-5 transition-all duration-200 ease-in`}
              onClick={() => setIsOpen(true)}
            >
              <HiMenu />
            </div>

            {/* Menu Start */}
            <div
              className={`absolute top-0 left-0 w-full bg-black flex flex-col gap-6 py-6 font-bold text-slate-100 md:hidden transition-all duration-500 ease-in-out ${
                isOpen ? "translate-x-0" : "translate-x-full"
              }`}
            >
              <div className="flex justify-between items-center px-5">
                <p className="text-3xl text-slate-300">Menu</p>
                <div
                  className="text-white hover:text-slate-300 cursor-pointer text-3xl "
                  onClick={() => setIsOpen(false)}
                >
                  <HiX />
                </div>
              </div>
              <hr className="text-slate-700" />
              <div className="flex flex-col px-5 gap-6 py-6 font-bold">
                {navData.map((item, index) => (
                  <Link
                    className="hover:text-slate-300 transition-all duration-200 ease-in"
                    href={item.navLink}
                    key={index}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.navTab}
                  </Link>
                ))}
              </div>
            </div>
            {/* Menu End */}
          </div>
        </nav>
      )}
    </>
  );
}

export default Navber;
