import { span } from "framer-motion/client";
import Image from "next/image";

function SingleProduct({ col }) {
    return (<>
        <div className="rounded-2xl bg-slate-50 border border-slate-200 p-8 flex flex-col justify-between min-h-80">
            <div>
                <h3 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 text-center">Lightning-fast builds</h3>

                <Image width={1000} height={1000} className="w-full" src="/images/products/1.png" alt="" />
            </div>

            <div className="flex gap-2">

                <div className="mt-6 flex gap-8 bg-white p-4 rounded-xl border border-slate-200 w-fit shadow-sm mx-auto">
                    {
                        col ? (
                            <>
                    <div className="flex gap-2">
                        <div className="">
                            <Image src={"/images/products/hdtv.png"} className="w-[32px] h-[32px]" width={10} height={10} alt="" /></div>
                        <div className="">
                            <span className="block text-xs text-zinc-700">1366x768 HD Quality</span>
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
                            <span className="block text-xs text-zinc-700">16x7 Usage</span>
                        </div>
                    </div>
                </div>

                <div className="mt-6 flex gap-8 bg-white p-4 rounded-xl border border-slate-200 w-fit shadow-sm mx-auto">
                    <div className="flex gap-2">
                        <div className=""><Image src={"/images/products/f-power-icon.png"} className="w-[32px] h-[32px]" width={10} height={10} alt="" /></div>
                        <div className="">
                            <span className="block text-xs text-zinc-700">Industrial Grade Hardware</span>
                        </div>
                    </div>
                </div>

            </div>
            <div className="grid grid-cols-2 gap-4 mt-6">
                <button className="flex font-medium justify-center items-center gap-2 py-2 px-4 border-2 border-solid border-slate-700 rounded-full cursor-pointer">
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

                </button>
                <button className="flex font-medium justify-center items-center gap-2 py-2 px-4 border-2 border-solid border-slate-700 rounded-full cursor-pointer">

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