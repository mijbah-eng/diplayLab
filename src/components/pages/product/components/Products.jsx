"use client";
import { ProductsDatas } from "@/utils";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function Products() {

  const [showAll, setShowAll] = useState(false);

  const handleShowAll = () => {
    setShowAll(!showAll);
  };

  const productsToShow = showAll ? ProductsDatas : ProductsDatas.slice(0, 6);
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
              <Link
              target="_blank"
              href={"/details"}
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
              </Link>
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
