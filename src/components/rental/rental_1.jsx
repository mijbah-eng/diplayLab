import Image from "next/image";

function Rental_1() {
  return (
    <div className="grid md:grid-cols-2 gap-[40px] max-w-full max-md:max-w-md mx-auto py-30">
      <div className="max-md:order-2 max-md:text-center md:w-md flex flex-col gap-2">
        <h2 className="text-3xl md:text-5xl text-slate-900 font-bold  mb-4 leading-[.5]">
          Display Lab Rental
        </h2>
        <p className="mt-4 text-base text-slate-600">
          Flexible rental solutions for events and businesses with professional support and custom content creation.
        </p>
        <div className="">
          <ul className="list-disc text-base ml-5 text-start text-slate-600">
            <li>
              LED,LCD and holographic displays
            </li>
            <li>
              Interractive kiosks and event tentals
            </li>
            <li>
              Offices - Retail stores - Hospitals...
            </li>
          </ul>
        </div>
        <div className="mt-8 flex flex-wrap max-md:justify-center gap-4">
          <a
            href="javascript:void(0);"
            className="px-6 py-3 text-base font-semibold text-white bg-[#324ef0] hover:bg-opacity-80 transition-all duration-300 transform focus:ring-2 focus:ring-[#192ff1] focus:outline-none focus:ring-opacity-50 rounded-md"
          >
            Explore Rental
          </a>
        </div>
      </div>
      <div className="">
        <Image
          width={500}
          height={500}
          src={"/images/rental/rental.png"}
          className="object-cover w-full h-full"
          alt="rental"
        ></Image>
      </div>
    </div>
  );
}

export default Rental_1;
