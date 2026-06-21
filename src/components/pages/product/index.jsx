"use client";
import { useState, useEffect } from "react";
import NavberMain from "@/components/NavberMain";
import Prduct_Hero from "./components/Prduct_Hero";
import Products from "./components/Products";
import Footer from "@/components/footer";
import ProductCetagory from "@/components/ProductCetagory";

import Accessories from "./components/Accessories";


function Product() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const cat = params.get("category");
      if (cat) {
        setSelectedCategory(cat);
      }
    }
  }, []);

  const handleCategoryChange = (newCat) => {
    setSelectedCategory(newCat);
    if (typeof window !== "undefined") {
      const url = new URL(window.location.href);
      if (newCat === "all") {
        url.searchParams.delete("category");
      } else {
        url.searchParams.set("category", newCat);
      }
      window.history.replaceState(null, "", url.pathname + url.search);
    }
  };

  return (
    <>
      <NavberMain />

      <Prduct_Hero />
      <div className="max-w-7xl mx-auto">
        <ProductCetagory
          selectedCategory={selectedCategory}
          setSelectedCategory={handleCategoryChange}
        />
      </div>
      {/* <NewProdcutDesign /> */}
      <Products
        selectedCategory={selectedCategory}
        setSelectedCategory={handleCategoryChange}
      />
      <Accessories />

      <Footer />
    </>
  );
}

export default Product;

