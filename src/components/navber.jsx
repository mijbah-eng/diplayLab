"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

function Navber() {
  const [showFixedNav, setShowFixedNav] = useState(false);

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
      <nav className="flex justify-between items-center absolute z-10 px-[80px] py-[15px] w-full">
        <div className="logo w-50">
          <img src="images/logo/logo.png" alt="Logo" />
        </div>
        <div className="menu md:flex gap-10 hidden font-bold text-white">
          <Link href={"/"}>CMS</Link>
          <Link href={"/"}>PRODUCTS</Link>
          <Link href={"/"}>RENTAL</Link>
          <Link href={"/"}>ADVERTISMENT</Link>
        </div>
      </nav>

      {showFixedNav && (
        <nav
          className="flex justify-between items-center absolute z-10 px-[80px] py-[15px] w-full fixed-nav"
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
          <div className="logo w-50">
            <img src="images/logo/logo.png" alt="Logo" />
          </div>
          <div className="menu md:flex gap-10 hidden font-bold text-black">
            <Link className="navLink" href={"/"}>
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
        </nav>
      )}
    </>
  );
}

export default Navber;
