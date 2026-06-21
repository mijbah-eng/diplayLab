"use client";
import SingleProduct from "@/components/SingleProduct";
import { ProductsDatas } from "@/utils";
import { useState, useEffect } from "react";
import {
  LayoutGrid,
  Monitor,
  Sun,
  Tablet,
  ClipboardList,
  Grid2X2,
  Box,
  Calendar
} from "lucide-react";

const CATEGORIES = [
  { id: "all", label: "All Products", icon: LayoutGrid },
  { id: "indoor", label: "Indoor Displays", icon: Monitor },
  { id: "outdoor", label: "Outdoor Displays", icon: Sun },
  { id: "kiosks", label: "Kiosks", icon: Tablet },
  { id: "menu_boards", label: "Menu Boards", icon: ClipboardList },
  { id: "video_walls", label: "Video Walls", icon: Grid2X2 },
  { id: "3d_holograms", label: "3D Holograms", icon: Box },
  { id: "rentals", label: "Rentals", icon: Calendar },
];

function Products({ selectedCategory: propSelectedCategory, setSelectedCategory: propSetSelectedCategory }) {
  const [localCategory, setLocalCategory] = useState("all");
  const selectedCategory = propSelectedCategory !== undefined ? propSelectedCategory : localCategory;
  const setSelectedCategory = propSetSelectedCategory !== undefined ? propSetSelectedCategory : setLocalCategory;
  
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    setShowAll(false);
  }, [selectedCategory]);

  const handleShowAll = () => {
    setShowAll(!showAll);
  };

  // Filter products based on selected category
  const filteredProducts = ProductsDatas.filter(product => {
    if (selectedCategory === "all") return true;

    const nameLower = product.name.toLowerCase();

    if (selectedCategory === "indoor") {
      return nameLower.includes("indoor") || nameLower.includes("window") || nameLower.includes("presentation") || nameLower.includes("wall") || nameLower.includes("poster");
    }
    if (selectedCategory === "outdoor") {
      return nameLower.includes("outdoor");
    }
    if (selectedCategory === "kiosks") {
      return nameLower.includes("kiosk") || nameLower.includes("stand");
    }
    if (selectedCategory === "menu_boards") {
      return nameLower.includes("menu") || nameLower.includes("board");
    }
    if (selectedCategory === "video_walls") {
      return nameLower.includes("wall") || nameLower.includes("mount");
    }
    if (selectedCategory === "3d_holograms") {
      return nameLower.includes("holograph") || nameLower.includes("hologram");
    }
    if (selectedCategory === "rentals") {
      // Products available for rent: Indoor Display (1), Stand Kiosk (2, 6), 3D Holograph (3)
      return product.id === 1 || product.id === 2 || product.id === 6 || product.id === 3;
    }
    return true;
  });

  const productsToShow = showAll ? filteredProducts : filteredProducts.slice(0, 6);

  return (
    <>
      <div id="products-section" className="space-large"></div>
      <div className="flex flex-col gap-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <h1 className="title text-center text-gray-900">Display Lab Products</h1>
            <p className="section_desc text-center max-w-2xl mx-auto text-gray-600">
              Explore our range of digital signage displays for various applications.
            </p>
          </div>

          {/* Product Categories Bar */}
          <div className="flex flex-col items-center gap-4 w-full">
            {/* Top row: All Products (centered) */}
            <div>
              {CATEGORIES.filter(cat => cat.id === "all").map((cat) => {
                const Icon = cat.icon;
                const isActive = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => {
                      setSelectedCategory(cat.id);
                      setShowAll(false); // Reset showAll when switching categories
                    }}
                    className={`flex items-center gap-2.5 px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer ${isActive
                      ? "bg-cyan-600 text-white shadow-md shadow-cyan-600/20"
                      : "bg-white text-slate-600 border border-slate-200 hover:text-cyan-600 hover:bg-slate-50 shadow-[0_4px_25px_rgba(0,0,0,0.06)]"
                      }`}
                  >
                    <Icon size={18} />
                    <span>{cat.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Bottom row: Other Categories */}
            <div className="w-full bg-white rounded-2xl shadow-[0_4px_25px_rgba(0,0,0,0.06)] border border-slate-100 p-2 overflow-x-auto scrollbar-none grid grid-cols-2  md:flex flex-wrap items-center justify-start lg:justify-center gap-2 md:gap-3">
              {CATEGORIES.filter(cat => cat.id !== "all").map((cat) => {
                const Icon = cat.icon;
                const isActive = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => {
                      setSelectedCategory(cat.id);
                      setShowAll(false); // Reset showAll when switching categories
                    }}
                    className={`flex items-center gap-2.5 px-5 py-3 rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer shrink-0 ${isActive
                      ? "bg-cyan-600 text-white shadow-md shadow-cyan-600/20"
                      : "text-slate-600 hover:text-cyan-600 hover:bg-slate-50"
                      }`}
                  >
                    <Icon size={18} />
                    <span>{cat.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Dynamic Product Grid */}
        <div className="flex flex-col gap-6">
          {productsToShow.length === 0 ? (
            <div className="text-center py-16 bg-slate-50 rounded-2xl border border-dashed border-slate-200">
              <p className="text-gray-500 text-lg">No products found in this category.</p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 gap-8">
                {productsToShow.map((product, index) => (
                  <SingleProduct key={product.id} product={product} index={index} />
                ))}
              </div>

            </>
          )}
        </div>

        {filteredProducts.length > 6 && (
          <button
            className="button cursor-pointer self-center mt-4"
            onClick={handleShowAll}
          >
            {showAll ? "View Less Products" : "View All Products"}
          </button>
        )}
      </div>
    </>
  );
}

export default Products;
