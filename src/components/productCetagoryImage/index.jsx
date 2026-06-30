import Image from "next/image";

function ProductCetagoryImage() {
    const categories = [
        { id: 1, name: "Ultra Thin Dual Side Stand Display", image: "/images/products/product-1.png" },
        { id: 2, name: "Digital Stand Kiosk", image: "/images/products/product-2.png" },
        { id: 3, name: "Self Ordering Kiosk", image: "/images/products/product-3.png" },
        { id: 4, name: "Digital Poster Display", image: "/images/products/product-4.png" },
        { id: 5, name: "Window Display", image: "/images/products/product-5.png" },
        { id: 6, name: "“K” Presentation Stand Display", image: "/images/products/product-6.png" },
        { id: 7, name: "Outdoor Digital A Display", image: "/images/products/product-7.png" },
        { id: 8, name: "Digital Menu Board", image: "/images/products/product-8.png" },
        { id: 9, name: "Digital Menu Board", image: "/images/products/product-9.png" },
        { id: 10, name: "Wall Mount", image: "/images/products/product-10.png" },
        { id: 11, name: "GOBO Projection", image: "/images/products/product-11.png" },
    ];
    return (
        <div className="pt-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="title text-center text-gray-900">Product Categories</h2>
                <div className="grid grid-cols-4 gap-20 py-20">
                    {categories.map((category, i) => (
                        <div className="flex flex-col justify-between items-center gap-5 cursor-pointer" key={i}>
                            <Image src={category.image} alt={category.name} width={200} height={200} />
                            <h4 className="text-lg font-semibold text-gray-900 text-center">{category.name}</h4>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default ProductCetagoryImage;