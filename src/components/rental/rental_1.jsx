import Image from "next/image";

function Rental_1() {
  return (
    <div className="grid md:grid-cols-2 gap-[40px] max-w-full max-md:max-w-md mx-auto py-30">
      <div className="max-md:order-1 max-md:text-center md:w-md">
        <h2 className="md:text-[3rem] text-3xl md:leading-12 font-bold text-slate-900 mb-4">
          Display Lab Rental
        </h2>
        <p className="mt-4 text-base text-slate-600">
          Rent digital displays for temporary events and instaliations with flexile, rental options tallored to your needs.
        </p>
        <div className="mt-8 flex flex-wrap max-md:justify-center gap-4">
          <a
            href="javascript:void(0);"
            className="px-6 py-3 text-base font-semibold text-white bg-[#324ef0] hover:bg-opacity-80 transition-all duration-300 transform focus:ring-2 focus:ring-[#192ff1] focus:outline-none focus:ring-opacity-50 rounded-md"
          >
            Request A Rental
          </a>
        </div>
      </div>
      <div className="flex justify-end">
        <Image
          width={400}
          height={500}
          src={"/images/rental/rental.png"}
          className="object-cover rounded-lg shadow-xl"
          alt="rental"
        ></Image>
      </div>
    </div>
  );
}

export default Rental_1;
