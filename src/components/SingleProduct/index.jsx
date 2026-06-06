import Image from "next/image";
import Link from "next/link";
import { products_details_all_data } from "@/utils/products_details_data";

function SingleProduct({ product, col }) {
    if (!product) return null;
    const details = products_details_all_data[product.id] || {};

    return (<>
        <div className="rounded-2xl bg-slate-50 border border-slate-200 p-8 flex flex-col justify-between min-h-80 transition-all duration-300 hover:shadow-lg">
            <Link href={`/details?id=${product.id}`} className="group">
                <h3 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 text-center group-hover:text-cyan-600 transition-colors">
                    {product.name}
                </h3>

                <div className="my-4 flex justify-center items-center h-48 bg-white rounded-xl p-4 overflow-hidden border border-slate-100 shadow-sm">
                    <img className="max-h-full object-contain transition-transform duration-300 group-hover:scale-105" src={product.image} alt={product.name} />
                </div>
            </Link>

            <div className="flex gap-2 justify-center items-center flex-wrap">

                <div className="mt-6 flex gap-8 bg-white p-4 rounded-xl border border-slate-200 w-fit shadow-sm mx-auto">
                    {
                        col ? (
                            <>
                    <div className="flex gap-2">
                        <div className="">
                            <Image src={"/images/products/hdtv.png"} className="w-[32px] h-[32px]" width={10} height={10} alt="" /></div>
                        <div className="">
                            <span className="block text-xs text-zinc-700">{details.resolution || "Full HD"}</span>
                        </div>
                    </div>
                            </>
                        ) : 
                        (
                            <>
                    
                        
                            <Image src={"/images/products/hdtv.png"} className="w-[32px] h-[32px]" width={10} height={10} alt="" />
                    
                            </>
                        )
                    }
                    
                </div>

                <div className="mt-6 flex gap-8 bg-white p-4 rounded-xl border border-slate-200 w-fit shadow-sm mx-auto">
                    <div className="flex gap-2">
                        <div className=""><Image src={"/images/products/f-upgrade-icon.png"} className="w-[32px] h-[32px]" width={10} height={10} alt="" /></div>
                        <div className="">
                            <span className="block text-xs text-zinc-700">{details.operating_system || "Android 11"}</span>
                        </div>
                    </div>
                </div>

                <div className="mt-6 flex gap-8 bg-white p-4 rounded-xl border border-slate-200 w-fit shadow-sm mx-auto">
                    <div className="flex gap-2">
                        <div className=""><Image src={"/images/products/f-power-icon.png"} className="w-[32px] h-[32px]" width={10} height={10} alt="" /></div>
                        <div className="">
                            <span className="block text-xs text-zinc-700">{details.brightness || "450 cd/m²"}</span>
                        </div>
                    </div>
                </div>

            </div>
            <div className="grid grid-cols-2 gap-4 mt-6">
                <Link href={`/details?id=${product.id}`} className="flex font-medium justify-center items-center gap-2 py-2 px-4 border-2 border-solid border-slate-700 rounded-full cursor-pointer hover:bg-cyan-600 hover:text-white hover:border-cyan-600 transition-all text-center">
                    {
                        col ? (
                            <>

                                <Image src={"/images/single_product_items/click.png"} className="w-[32px] h-[32px]" width={10} height={10} alt="" />

                            </>

                        ) : (
                            <>

                                <span>Add to Cart</span>
                                <Image src={"/images/single_product_items/click.png"} className="w-[32px] h-[32px]" width={10} height={10} alt="" />
                            </>
                        )
                    }

                </Link>
                <button className="flex font-medium justify-center items-center gap-2 py-2 px-4 border-2 border-solid border-slate-700 rounded-full cursor-pointer hover:bg-cyan-600 hover:text-white hover:border-cyan-600 transition-all">

                     {
                        col ? (
                            <>

                                <Image src={"/images/single_product_items/download.png"} className="w-[32px] h-[32px]" width={10} height={10} alt="" />

                            </>

                        ) : (
                            <>

                                <span>Download Brochure</span>
                                <Image src={"/images/single_product_items/download.png"} className="w-[32px] h-[32px]" width={10} height={10} alt="" />
                            </>
                        )
                    }
                </button>
            </div>
        </div>
    </>);
}

export default SingleProduct;