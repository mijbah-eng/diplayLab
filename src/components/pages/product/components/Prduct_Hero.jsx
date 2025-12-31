"use client";
import CalandlyButton from "@/components/calandlyButton";

function Prduct_Hero() {
  return (
    <>
      <div className="hero-section">
        <div className=" product-hero-bg h-[100vh]">
          <div className="container h-full">
            <div className="hero_section_content">
              <div className="max-md:text-center pr-0 md:pr-[22%]">
                <h2 className="title text-white">Versatile Display Products</h2>
                <p className="mt-4 two_column_desc text-white mb-8">
                  Discover a wide range of diplay products from interactive
                  kiosks to outdoor screens-perfect for any enviroment.
                </p>
                <CalandlyButton />
              </div>
              {/* <div className="w-[400px] mx-auto">
                        <Image
                        width={1000}
                        height={1000}
                        src={"/images/pages/products/hero/hero-image.png"}
                        className="object-cover max-w-full h-full"
                        alt="rental"
                        ></Image>
                    </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Prduct_Hero;
