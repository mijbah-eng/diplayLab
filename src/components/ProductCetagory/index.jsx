"use client";
import React, { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const CATEGORIES_DATA = [
  {
    id: "indoor",
    title: "Indoor Displays",
    subLabel: "LCD & LED Screens",
    image: "/images/products/products-1.png",
  },
  {
    id: "outdoor",
    title: "Outdoor Displays",
    subLabel: "Weatherproof Solutions",
    image: "/images/products/products-10.png",
  },
  {
    id: "kiosks",
    title: "Kiosks",
    subLabel: "Interactive Touch",
    image: "/images/products/products-2.png",
  },
  {
    id: "menu_boards",
    title: "Menu Boards",
    subLabel: "Digital Menu Solutions",
    image: "/images/products/products-12.png",
  },
  {
    id: "video_walls",
    title: "Video Walls",
    subLabel: "Large Format Displays",
    image: "/images/products/products-11.png",
  },
  {
    id: "3d_holograms",
    title: "3D Holograms",
    subLabel: "Holographic Displays",
    image: "/images/products/products-3.png",
  },
  {
    id: "rentals",
    title: "Rentals",
    subLabel: "Event Solutions",
    image: "/images/products/products-6.png",
  },
];

function ProductCetagory({ selectedCategory, setSelectedCategory }) {
  const scrollContainerRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);
  const [isGrabbing, setIsGrabbing] = useState(false);

  const isDragging = useRef(false);
  const startX = useRef(0);
  const startY = useRef(0);
  const scrollLeft = useRef(0);
  const preventClick = useRef(false);

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setShowLeftArrow(scrollLeft > 5);
      setShowRightArrow(scrollWidth - scrollLeft - clientWidth > 5);
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      checkScroll();
      container.addEventListener("scroll", checkScroll);
      window.addEventListener("resize", checkScroll);
      
      // Secondary check once images render
      const timer = setTimeout(checkScroll, 500);

      return () => {
        container.removeEventListener("scroll", checkScroll);
        window.removeEventListener("resize", checkScroll);
        clearTimeout(timer);
      };
    }
  }, []);

  const handleScroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const handlePointerDown = (e) => {
    if (e.pointerType === "mouse" && e.button !== 0) return;

    isDragging.current = true;
    preventClick.current = false;
    startX.current = e.clientX;
    startY.current = e.clientY;
    scrollLeft.current = scrollContainerRef.current.scrollLeft;

    if (scrollContainerRef.current) {
      scrollContainerRef.current.setPointerCapture(e.pointerId);
    }
    setIsGrabbing(true);
  };

  const handlePointerMove = (e) => {
    if (!isDragging.current) return;

    const dx = e.clientX - startX.current;
    const dy = e.clientY - startY.current;

    // If moved more than 5px, it's a drag interaction -> prevent clicking.
    if (Math.abs(dx) > 5 || Math.abs(dy) > 5) {
      preventClick.current = true;
    }

    if (e.pointerType === "mouse") {
      e.preventDefault();
      if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollLeft = scrollLeft.current - dx;
      }
    }
  };

  const handlePointerUp = (e) => {
    if (!isDragging.current) return;
    isDragging.current = false;
    setIsGrabbing(false);
    if (scrollContainerRef.current) {
      try {
        scrollContainerRef.current.releasePointerCapture(e.pointerId);
      } catch (err) {}
    }
  };

  const handlePointerCancel = (e) => {
    isDragging.current = false;
    setIsGrabbing(false);
    if (scrollContainerRef.current) {
      try {
        scrollContainerRef.current.releasePointerCapture(e.pointerId);
      } catch (err) {}
    }
  };

  const handleCategoryClick = (id) => {
    if (preventClick.current) {
      return;
    }
    if (setSelectedCategory) {
      setSelectedCategory(id);
    }
    const element = document.getElementById("products-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="pt-20 pb-10 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center mb-10 text-slate-800">
        Our Products Category
      </h2>

      <div className="relative w-full max-w-6xl mx-auto flex items-center bg-white rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-slate-100 p-2">
        {/* Left Arrow */}
        <button
          onClick={() => handleScroll("left")}
          className={`absolute left-2 z-10 w-10 h-10 rounded-full bg-white border border-slate-200 shadow-md flex items-center justify-center text-slate-500 hover:text-cyan-600 hover:border-cyan-200 transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer ${
            showLeftArrow
              ? "opacity-100 scale-100 pointer-events-auto"
              : "opacity-0 scale-75 pointer-events-none"
          }`}
          aria-label="Scroll left"
        >
          <ChevronLeft size={20} />
        </button>

        {/* Left Fade Gradient */}
        <div
          className={`absolute left-12 top-2 bottom-2 w-12 bg-gradient-to-r from-white to-transparent pointer-events-none transition-opacity duration-300 z-5 ${
            showLeftArrow ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Scrollable Container */}
        <div
          ref={scrollContainerRef}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerCancel}
          className={`flex items-center overflow-x-auto scrollbar-none w-full py-1 px-4 gap-2 touch-pan-y select-none ${
            isGrabbing ? "cursor-grabbing" : "cursor-grab"
          }`}
        >
          {CATEGORIES_DATA.map((category, index) => {
            const isActive = selectedCategory === category.id;
            return (
              <React.Fragment key={category.id}>
                <div
                  onClick={() => handleCategoryClick(category.id)}
                  className={`flex items-center gap-4 py-3 px-6 rounded-2xl transition-all duration-300 cursor-pointer select-none shrink-0 group ${
                    isActive ? "bg-cyan-50/50 shadow-inner" : "hover:bg-slate-50"
                  }`}
                >
                  <div className="w-14 h-14 flex items-center justify-center relative shrink-0">
                    <img
                      src={category.image}
                      alt={category.title}
                      draggable="false"
                      className="max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <div className="flex flex-col text-left shrink-0">
                    <span
                      className={`text-sm font-bold transition-colors duration-300 ${
                        isActive ? "text-cyan-600" : "text-slate-800 group-hover:text-cyan-600"
                      }`}
                    >
                      {category.title}
                    </span>
                    <span className="text-xs text-slate-400 font-normal mt-0.5">
                      {category.subLabel}
                    </span>
                  </div>
                </div>

                {index < CATEGORIES_DATA.length - 1 && (
                  <div className="w-[1px] h-8 bg-slate-100 shrink-0 self-center mx-1 md:mx-2" />
                )}
              </React.Fragment>
            );
          })}
        </div>

        {/* Right Fade Gradient */}
        <div
          className={`absolute right-12 top-2 bottom-2 w-12 bg-gradient-to-l from-white to-transparent pointer-events-none transition-opacity duration-300 z-5 ${
            showRightArrow ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Right Arrow */}
        <button
          onClick={() => handleScroll("right")}
          className={`absolute right-2 z-10 w-10 h-10 rounded-full bg-white border border-slate-200 shadow-md flex items-center justify-center text-slate-500 hover:text-cyan-600 hover:border-cyan-200 transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer ${
            showRightArrow
              ? "opacity-100 scale-100 pointer-events-auto"
              : "opacity-0 scale-75 pointer-events-none"
          }`}
          aria-label="Scroll right"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}

export default ProductCetagory;