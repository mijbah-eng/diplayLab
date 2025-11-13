"use client";
import Link from "next/link";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

function Navber2() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav className="relative w-full fixed-nav ">
        <div
          className="relative"
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
          <div className="flex justify-between  py-[15px] items-center container">
            <Link href={"/"} className="logo w-50">
              <img src="images/logo/logo.png" alt="Logo" />
            </Link>

            <div className="menu md:flex gap-10 hidden font-bold text-black">
              <Link className="navLink" href={"/cms"}>
                CMS
              </Link>
              <Link className="navLink" href={"/"}>
                PRODUCTS
              </Link>
              <Link className="navLink" href={"/"}>
                RENTAL
              </Link>
              <Link className="navLink" href={"/"}>
                ADVERTISMENT
              </Link>
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
                <Link
                  className="hover:text-slate-300 transition-all duration-200 ease-in"
                  href="/"
                  onClick={() => setIsOpen(false)}
                >
                  CMS
                </Link>
                <Link
                  className="hover:text-slate-300 transition-all duration-200 ease-in"
                  href="/"
                  onClick={() => setIsOpen(false)}
                >
                  PRODUCTS
                </Link>
                <Link
                  className="hover:text-slate-300 transition-all duration-200 ease-in"
                  href="/"
                  onClick={() => setIsOpen(false)}
                >
                  RENTAL
                </Link>
                <Link
                  className="hover:text-slate-300 transition-all duration-200 ease-in"
                  href="/"
                  onClick={() => setIsOpen(false)}
                >
                  ADVERTISMENT
                </Link>
              </div>
            </div>
            {/* Menu End */}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navber2;
