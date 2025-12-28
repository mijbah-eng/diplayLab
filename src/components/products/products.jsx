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
    <>
    <div className="space-large"></div>
    <div className="flex flex-col gap-20">
      <div>
        
            <h1 className="title text-center mr_b">
              Display Lab Products
            </h1>
        
        
        <p className="section_desc">
          Explore our range of digital signage displays for various
          applications.
        </p>

        <div className="four_columns_items">
          {Products.map((product) => (
            <div
              key={product?.id}
              className="single_product"
            >
              <Image
                src={product?.image}
                width={200}
                height={100}
                className="single_product_image"
                alt="Stand_Kiosk"
              ></Image>

              <h4 className="single_product_name">{product?.name}</h4>
            </div>
          ))}
        </div>
      </div>

      <Link
        className="button"
        href={"#"}
      >
        View All Products
      </Link>
    </div>
    </>
    
  );
}

export default Products;
