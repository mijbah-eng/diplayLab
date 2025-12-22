import Image from "next/image";

function Advertisement_1() {
  return (
    <>
    <div className="space-large"></div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-[40px] mx-auto px-4">
      <div className="">
        <Image
          width={1000}
          height={1000}
          src={"/images/cms/Empowering.jpg"}
          className="object-cover rounded-lg shadow-xl max-w-full h-full"
          alt="rental"
        ></Image>
      </div>
      <div className="max-md:text-center pr-0 md:pl-[22%] ">
        <div className="">
          <h2 className="text-3xl md:text-5xl text-slate-900 font-bold mb-10">
            Transformative Advertising Solutions
          </h2>
          <p className="mt-4 text-base text-slate-600">
            Turn any space into a dynamic advertising hub with our tailored display advertising options.
          </p>
          <p>
            Empower your brand with captivating visuals and intelligent ad scheduling. From grocery stores to shopping malls. Display I ab brings targeted marketing directly to your audlence.
          </p>
          <div className="mt-8 flex flex-wrap max-md:justify-center gap-4">
            <a
              href="javascript:void(0);"
              className="px-6 py-3 text-base font-semibold text-white bg-[#105783] hover:bg-[#003051] transition-all duration-300 transform rounded-md"
            >
              Request A Advertisement
            </a>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Advertisement_1;
