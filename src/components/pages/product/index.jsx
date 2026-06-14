"use client";
import { useState } from "react";
import NavberMain from "@/components/NavberMain";
import Prduct_Hero from "./components/Prduct_Hero";
import Products from "./components/Products";
import Footer from "@/components/footer";
import ProductCetagory from "@/components/ProductCetagory";

import Accessories from "./components/Accessories";


function Product() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  return (
    <>
      <NavberMain />

      <Prduct_Hero />
      <div className="max-w-7xl mx-auto">
        <ProductCetagory
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </div>
      {/* <NewProdcutDesign /> */}
      <Products
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <Accessories />

      <Footer />
    </>
  );
}

export default Product;

