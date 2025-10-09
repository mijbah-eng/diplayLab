import Image from "next/image";

function Rental_2() {
  const rental_Images = [
    {
      image: "/images/rental/rental2.png",
    },
    {
      image: "/images/rental/rental3.png",
    },
    {
      image: "/images/rental/rental4.png",
    },
    {
      image: "/images/rental/rental5.png",
    },
  ];
  return (
    <>
      <h1 className="text-3xl font-semibold text-center mx-auto">
        Display Lab Rental Produts
      </h1>

      <p className="text-sm text-slate-500 text-center mt-2 max-w-lg mx-auto">
        Flexible rental options for short-term and long-term digital signage
        needs.
      </p>

      <div className="flex flex-wrap items-center justify-center mt-10 mx-auto gap-4">
        {rental_Images?.map((singleImage, index) => (
          <Image
            width={224}
            height={320}
            className="max-w-56 h-80 object-cover rounded-lg hover:-translate-y-1 transition-all duration-300"
            src={singleImage?.image}
            key={index}
            alt="rental_2"
          ></Image>
        ))}
      </div>
    </>
  );
}

export default Rental_2;
