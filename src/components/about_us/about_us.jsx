import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

function About_Us() {
  return (
    <div className="flex flex-col gap-5 md:flex-row justify-between">
      <div className="flex flex-col gap-5">
        <p className="text-base font-medium text-slate-600">
          ABOUT DISPLAY LAB
        </p>
        <h1 className="text-3xl md:text-5xl 2xl:text-6xl text-slate-900 font-bold mb-10 max-w-md">
          Innovating the Future of Digital Displays
        </h1>

        <p className="text-md text-slate-500 max-w-md">
          Display Lab is a technology-driven company specializing in advanced
          display systems and advertising solutions. From smart kiosks and LED
          screens to dynamic content management software, we empower businesses
          to engage their audiences through stunning visuals and intalligent
          design.
        </p>
        <Link className="flex justify-start items-center gap-2 mt-6 py-2.5  rounded-lg text-sm tracking-wider font-medium border-none outline-none cursor-pointer hover:underline w-sm" href={"/"}>
          Learn More <FaArrowRightLong />
        </Link>
      </div>
      <div className="w-md 2xl:w-2xl ">
        <Image width={800} height={500} src={'/images/about_us/about_us.png'} alt="about_us" className="object-cover rounded-lg shadow-xl w-full h-full"></Image>
      </div>
    </div>
  );
}

export default About_Us;
