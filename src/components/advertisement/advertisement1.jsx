import Image from "next/image";

function Advertisement_1() {
  return (
    <div className="grid md:grid-cols-2 gap-[40px] max-w-full max-md:max-w-md mx-auto py-30">
      <div className="">
        <Image
          width={600}
          height={500}
          src={"/images/advertisement/advertisement.png"}
          className="object-cover rounded-lg shadow-xl"
          alt="rental"
        ></Image>
      </div>
      <div className="max-md:order-1 max-md:text-center md:w-md md:justify-self-end ">
        <div className="">
          <h2 className="md:text-[3rem] text-3xl md:leading-12 font-bold text-slate-900 mb-4">
            Display Lab Advertisement
          </h2>
          <p className="mt-4 text-base text-slate-600">
            Engage audiences with digital displays in gas stations, grocery stores and outdoor locations.
          </p>
          <div className="mt-8 flex flex-wrap max-md:justify-center gap-4">
            <a
              href="javascript:void(0);"
              className="px-6 py-3 text-base font-semibold text-white bg-[#324ef0] hover:bg-opacity-80 transition-all duration-300 transform focus:ring-2 focus:ring-[#192ff1] focus:outline-none focus:ring-opacity-50 rounded-md"
            >
              Request A Advertisement
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Advertisement_1;
