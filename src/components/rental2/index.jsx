"use client";
import Image from "next/image";
import Link from "next/link";

function Rental2() {
  const rentalProducts = [
    {
      product_name: "IndoorDigital-Kiosk",
      product_url: "/images/rental/IndoorDigital-Kiosk.jpeg",
    },
    {
      product_name: "Interactive-Digital-Display",
      product_url: "/images/rental/Interactive-Digital-Display.jpeg",
    },
    {
      product_name: "Outdoor-Digital-Kiosk",
      product_url: "/images/rental/Outdoor-Digital-Kiosk.jpeg",
    },
    {
      product_name: "Promotional-Display-Screens",
      product_url: "/images/rental/Promotional-Display-Screens.jpeg",
    },
  ];
  return (
    <>
      <div className="relative min-w-2.5 min-h-2.5 w-full h-auto max-w-full order-4 self-center box-border">
        <div className="w-full h-full m-0 p-0 clear-both overflow-hidden min-h-px cursor-pointer">
          <div className="p-2.5!">
            <div className="flex">
              <div className="w-[60%] flex flex-row flex-wrap">
                {rentalProducts?.map((singleProduct, index) => (

                <div key={index} className="relative w-[50%] overflow-hidden flex flex-col list-none duration-1000 fill-mode-both p-2.5!">
                  <div className="opacity-100 overflow-hidden transform-gpu">
                    <div className="relative rounded-[10px] w-full overflow-hidden bg-transparent">
                      <Link
                        className="bg-no-repeat bg-center bg-cover! transition-all duration-200 ease-out flex flex-col hover:scale-[1.06]"
                        style={{
                          backgroundImage: `url(${singleProduct?.product_url})`,
                          paddingTop: "83.3333%",
                        }}
                        href={""}
                      >
                        <Image
                          className="hidden max-w-full w-200 h-200"
                          src={singleProduct?.product_url}
                          width={800}
                          height={800}
                          alt=""
                        />
                      </Link>
                    </div>
                    <div className="absolute inset-0 m-auto pointer-events-none block!">
                      <span
                        style={{
                          backgroundColor: "rgba(99,213,150,0) !important",
                        }}
                        className="flex flex-col relative overflow-hidden z-1 bg-white/90 text-[#333] p-[15px] h-full box-border justify-end items-center text-center pointer-events-none cursor-pointer text-base"
                      >
                        <h3 className="text-[#161414] font-medium no-underline font-[Urbanist-Medium]">
                          {singleProduct?.product_name}
                        </h3>
                      </span>
                    </div>
                  </div>
                </div>
                ))}
              </div>
              <div className="w-[40%] flex flex-col">
                <div className="relative overflow-hidden p-2.5! list-none duration-1000 fill-mode-both">
                  <div className="opacity-100 overflow-hidden transform-gpu">
                    <div className="bg-transparent w-full overflow-hidden rounded-[10px]! relative">
                      <Link
                        className="flex flex-col transition-all duration-200 ease-out bg-cover bg-no-repeat bg-center hover:scale-[1.06]"
                        href={""}
                        style={{
                          paddingTop: "125%",
                          backgroundImage: "url('/images/rental/indoor.jpeg')",
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }}
                      >
                        <Image
                          width={1200}
                          height={1200}
                          className="max-w-full hidden!"
                          src={"/images/rental/indoor.jpeg"}
                          alt=""
                        ></Image>
                      </Link>
                    </div>
                    <div className="block! absolute inset-0 m-auto pointer-events-none">
                      <span
                        style={{
                          backgroundColor: "rgba(99,213,150,0) !important",
                        }}
                        className="relative z-10 h-full overflow-hidden flex flex-col justify-end items-center text-center pointer-events-none p-4 text-[#333] bg-white/90"
                      >
                        <h3 className="text-[#161414] font-medium no-underline font-[Urbanist-Medium]">
                          Dual screen
                        </h3>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Rental2;
