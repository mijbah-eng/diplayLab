"use client";
import Image from "next/image";
import { useState } from "react";

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

  const [showAll, setShowAll] = useState(false);

  const handleShowAll = () => {
    setShowAll(!showAll);
  };

  const productsToShow = showAll ? Products : Products.slice(0, 6);
  return (
    <>
      <div className="space-large"></div>
      <div className="flex flex-col gap-20">
        <div className="">
          <div className="flex flex-col gap-5">
            <h1 className="title text-center">Display Lab Products</h1>
            <p className="section_desc text-center mt-5">
              Explore our range of digital signage displays for various
              applications.
            </p>
          </div>

          <div className="four_columns_items">
            {productsToShow.map((product) => (
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

        <button
          className={
            "button cursor-pointer"
          }
          onClick={handleShowAll}
        >
          {showAll ? "View Less Products" : "View All Products"}
        </button>
      </div>
    </>
  );
}

export default Products;
