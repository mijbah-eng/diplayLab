import Image from "next/image";

function Products() {
  return (
    <div className="py-30">
      <h1 className="text-3xl font-semibold text-center mx-auto">
        Simplify content management
      </h1>
      <p className="text-sm text-slate-500 text-center mt-2 max-w-lg mx-auto w-xs">
        Explore our range of digital signage displays for various applications.
      </p>
      <div className="grid place-items-center md:place-items-stretch grid-cols-1 md:grid-cols-4 gap-10 mt-20">
        <div className="max-w-[200px] flex flex-col items-center">
          {/* <div className="w-40 mt-15"> */}
            <Image
              src={"/images/products/Indoor Display.png"}
              width={100}
              height={100}
              className=" w-full h-full object-cover rounded-lg"
              alt="Stand_Kiosk"
            ></Image>
          {/* </div> */}

          <h4 className="font-semibold mt-2 text-xl">Indoor Display</h4>
        </div>
        <div className="max-w-[200px] flex flex-col items-center">
          {/* <div className="w-40"> */}
            <Image
              src={"/images/products/Stand Kiosk.png"}
              width={100}
              height={100}
              className="max-w-full h-full object-cover rounded-lg"
              alt="Stand_Kiosk"
            ></Image>
          {/* </div> */}

          <h4 className="font-semibold mt-2 text-xl">Stand Kiosk</h4>
        </div>
        <div className="max-w-[200px] flex flex-col items-center">
          
            <Image
              src={"/images/products/3D Holograph.png"}
              width={100}
              height={100}
              className="max-w-full h-full object-cover rounded-lg"
              alt="Stand_Kiosk"
            ></Image>
         

          <h4 className="font-semibold mt-2 text-xl">3D Holograph</h4>
        </div>
        <div className="max-w-[200px] flex flex-col items-center">
          
            <Image
              src={"/images/products/Window Display.png"}
              width={100}
              height={100}
              className="max-w-full h-full object-cover rounded-lg"
              alt="Stand_Kiosk"
            ></Image>
         

          <h4 className="font-semibold mt-2 text-xl">3D Holograph</h4>
        </div>
        <div className="max-w-[200px] flex flex-col items-center">
          {/* <div className="w-40 mt-15"> */}
            <Image
              src={"/images/products/Indoor Display.png"}
              width={100}
              height={100}
              className=" w-full h-full object-cover rounded-lg"
              alt="Stand_Kiosk"
            ></Image>
          {/* </div> */}

          <h4 className="font-semibold mt-2 text-xl">Indoor Display</h4>
        </div>
        <div className="max-w-[200px] flex flex-col items-center">
          {/* <div className="w-40"> */}
            <Image
              src={"/images/products/Stand Kiosk.png"}
              width={100}
              height={100}
              className="max-w-full h-full object-cover rounded-lg"
              alt="Stand_Kiosk"
            ></Image>
          {/* </div> */}

          <h4 className="font-semibold mt-2 text-xl">Stand Kiosk</h4>
        </div>
      </div>
    </div>
  );
}

export default Products;
