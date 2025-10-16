import Image from "next/image";
import Link from "next/link";

function Products() {

 const Products = [
  {
    id: 1,
    name: "Indoor Display",
    image: "/images/products/products-1.png",
  },
  {
    id: 2,
    name: "Stand Kiosk",
    image: "/images/products/products-2.png",
  },
  {
    id: 3,
    name: "3D Holograph",
    image: "/images/products/products-3.png",
  },
  {
    id: 4,
    name: "Self Ordering Kiosk",
    image: "/images/products/products-4.png",
  },
  {
    id: 5,
    name: "Indoor Display",
    image: "/images/products/products-5.png",
  },
  {
    id: 6,
    name: "Stand Kiosk",
    image: "/images/products/products-6.png",
  },
  {
    id: 7,
    name: "Digital Poster",
    image: "/images/products/products-7.png",
  },
  {
    id: 8,
    name: "Window Display",
    image: "/images/products/products-8.png",
  },
  {
    id: 9,
    name: "Presentation Display",
    image: "/images/products/products-9.png",
  },
  {
    id: 10,
    name: "Outdoor Display",
    image: "/images/products/products-10.png",
  },
  {
    id: 11,
    name: "Wall Mount",
    image: "/images/products/products-11.png",
  },
  {
    id: 12,
    name: "Digital Menu Board",
    image: "/images/products/products-12.png",
  },
];


  return (
    <div className="py-30 flex flex-col gap-20">
      <div className="">
<h1 className="text-3xl font-semibold text-center mx-auto">
        Display Lab Products
      </h1>
      <p className="text-sm text-slate-500 text-center mt-2 max-w-lg mx-auto w-xs">
        Explore our range of digital signage displays for various applications.
      </p>

<div className="grid place-items-center grid-cols-1 md:grid-cols-4 gap-10 mt-20">
        {Products.map((product) => (
        <div key={product?.id} className="max-w-[300px] flex flex-col items-center">
         
            <Image
              src={product?.image}
              width={200}
              height={100}
              className=" w-full h-full object-cover rounded-lg"
              alt="Stand_Kiosk"
            ></Image>

          <h4 className="font-semibold mt-2 text-xl">{product?.name}</h4>
        </div>
          ))}
      </div>

      </div>
      
      
      <Link className="w-[11rem] text-center self-center px-6 py-3 text-base font-semibold text-white bg-[#324ef0] hover:bg-opacity-80 transition-all duration-300 transform focus:ring-2 focus:ring-[#192ff1] focus:outline-none focus:ring-opacity-50 rounded-md" href={'#'}>View All Products</Link>
    </div>
  );
}

export default Products;
