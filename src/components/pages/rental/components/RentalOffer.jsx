"use client";
import { useMotionValue, motion, useSpring, useTransform } from "motion/react";
import React, { useRef, useState, useEffect } from "react";

export const RentalOffer = () => {
    // Track which item index is currently tapped open on mobile
    const [activeIndex, setActiveIndex] = useState(null);

    // Automatically close any open image if the user taps outside the sections
    useEffect(() => {
        const handleOutsideClick = () => setActiveIndex(null);
        window.addEventListener("click", handleOutsideClick);
        return () => window.removeEventListener("click", handleOutsideClick);
    }, []);

    const items = [
        {
            heading: "LED Video Walls",
            subheading: "55' to 98' commercial-grade screens ideal for trade shows, retail activations, wayfinding, and corporate presentations.",
            imgSrc: "https://imgproxy.gamma.app/resize/quality:80/resizing_type:fit/width:1000/height:1000/https://cdn.gamma.app/2v6wxo9tk6qxbvk/generated-images/R6ngaXMUZoO0l7kSdxez4.jpg"
        },
        {
            heading: "Large Format Displays",
            subheading: "Freestanding portrait and landscape kiosks with optional touch interactivity, perfect for lobbies, expos, and retail floors.",
            imgSrc: "https://imgproxy.gamma.app/resize/quality:80/resizing_type:fit/width:1000/height:1000/https://cdn.gamma.app/2v6wxo9tk6qxbvk/generated-images/aTHgoupnze_F3pjOrH4BE.jpg"
        },
        {
            heading: "Digital Kiosks",
            subheading: "Freestanding portrait and landscape kiosks with optional touch interactivity, perfect for lobbies, expos, and retail floors.",
            imgSrc: "https://imgproxy.gamma.app/resize/quality:80/resizing_type:fit/width:1000/height:1000/https://cdn.gamma.app/2v6wxo9tk6qxbvk/generated-images/HsOu_2mGnIMKHYgiyRUW9.jpg"
        },
        {
            heading: "Outdoor Displays",
            subheading: "Weather-resistant, high-brightness outdoor screens built for festivals, sporting events, and open-air activations.",
            imgSrc: "https://imgproxy.gamma.app/resize/quality:80/resizing_type:fit/width:1000/height:1000/https://cdn.gamma.app/2v6wxo9tk6qxbvk/generated-images/R6ngaXMUZoO0l7kSdxez4.jpg"
        }
    ];

    return (
        <section className="p-4 md:p-8">
            <div>
                {items.map((item, index) => (
                    <Link
                        key={index}
                        heading={item.heading}
                        subheading={item.subheading}
                        imgSrc={item.imgSrc}
                        isOpen={activeIndex === index}
                        setIsOpen={(e) => {
                            // Stop click from instantly closing due to the window listener
                            e.stopPropagation();
                            setActiveIndex(activeIndex === index ? null : index);
                        }}
                    />
                ))}
            </div>
        </section>
    );
};

const Link = ({ heading, imgSrc, subheading, isOpen, setIsOpen }) => {
    const ref = useRef(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const top = useTransform(mouseYSpring, [0.5, -0.5], ["40%", "60%"]);
    const left = useTransform(mouseXSpring, [0.5, -0.5], ["60%", "70%"]);

    const handleMouseMove = (e) => {
        const rect = ref.current.getBoundingClientRect();

        const width = rect.width;
        const height = rect.height;

        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    };


    return (
        <div className="">
            <div className="max-w-375 mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    ref={ref}
                    onMouseMove={handleMouseMove}
                    // Uses hover animations on desktop, uses explicit state variations on mobile
                    initial="initial"
                    whileHover="whileHover"
                    className="group relative flex items-center justify-between border-b-2 border-neutral-700 py-4 transition-colors duration-500 hover:border-neutral-950 md:py-8 cursor-pointer"
                >
                    <div>
                        <motion.span
                            variants={{
                                initial: { x: 0 },
                                whileHover: { x: -16 },
                            }}
                            transition={{
                                type: "spring",
                                staggerChildren: 0.075,
                                delayChildren: 0.25,
                            }}
                            className="relative z-10 block text-4xl font-bold text-neutral-500 transition-colors duration-500 group-hover:text-neutral-950 md:text-6xl"
                        >
                            {heading.split("").map((l, i) => (
                                <motion.span
                                    variants={{
                                        initial: { x: 0 },
                                        whileHover: { x: 16 },
                                    }}
                                    transition={{ type: "spring" }}
                                    className="inline-block"
                                    key={i}
                                >
                                    {l}
                                </motion.span>
                            ))}
                        </motion.span>
                        <span className="relative z-10 mt-2 block text-base text-neutral-500 transition-colors duration-500 group-hover:text-neutral-950">
                            {subheading}
                        </span>
                    </div>

                    <motion.img
                        style={{
                            top,
                            left,
                            translateX: "50%",
                            translateY: "-50%",
                        }}
                        variants={{
                            initial: { scale: 0, rotate: "-12.5deg" },
                            whileHover: { scale: 1, rotate: "12.5deg" },
                        }}
                        transition={{ type: "spring" }}
                        src={imgSrc}
                        // max-md responsive rules position the element statically in the center viewport on touch layouts
                        className="absolute z-10 h-24 w-32 rounded-lg object-cover md:h-48 md:w-64 pointer-events-none max-md:fixed max-md:top-1/2 max-md:left-1/2 max-md:-translate-x-1/2 max-md:-translate-y-1/2"
                        alt={`Image representing a link for ${heading}`}
                    />
                </motion.div>
            </div>
        </div>
    );
};