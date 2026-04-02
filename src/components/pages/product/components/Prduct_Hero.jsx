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
                <CalandlyButton
                  text={"Schedule time with Display Lab"}
                  style={true}
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="white"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-play"
                      aria-hidden="true"
                    >
                      <polygon points="6 3 20 12 6 21 6 3"></polygon>
                    </svg>
                  }
                />
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
