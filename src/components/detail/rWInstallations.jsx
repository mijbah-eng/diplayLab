import Image from "next/image";

function RWInstallation() {
  const real_wold_installation_data = [
    { image: "/images/details/picture1.png" },
    { image: "/images/details/picture2.jpg" },
    { image: "/images/details/picture3.png" },
    { image: "/images/details/keyFeatureImg.png" },
  ];
  return (
    <div className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left mb-14">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Real-World Installations
          </h2>
          <p className="text-gray-600 text-lg">
            Trusted by buyers across a variety of indoor commercial environments
            — from Corporate office, University, Retail stores and lobbies to
            exhibitions and public spaces. The A-shape Poster kiosk delivers
            bold, high-brightness visuals wherever audiences gather.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-2 flex-wrap ">
          {real_wold_installation_data?.map((singleRWIData, index) => (
            <Image key={index}
              src={singleRWIData?.image}
              width={300}
              height={300}
              className="w-full md:w-[250px] "
            />
          ))}
          {/* <Image
            src={"/images/details/keyFeatureImg.png"}
            width={300}
            height={300}
            className="w-full md:w-[250px] lg:w-[400px]"
          />
          <Image
            src={"/images/details/picture1.png"}
            width={300}
            height={300}
            className="w-full md:w-[250px] lg:w-[400px]"
          />
          <Image
            src={"/images/details/picture2.png"}
            width={300}
            height={300}
            className="w-full md:w-[250px] lg:w-[400px]"
          />
          <Image
            src={"/images/details/picture3.png"}
            width={300}
            height={300}
            className="w-full md:w-[250px] lg:w-[400px]"
          /> */}
        </div>
      </div>
    </div>
  );
}

export default RWInstallation;
