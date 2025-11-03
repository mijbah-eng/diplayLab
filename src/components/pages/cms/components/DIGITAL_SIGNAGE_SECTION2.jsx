import Image from "next/image";

function DIGITAL_SIGNAGE_SECTION2() {
    const advertisement_Content = [
    {
      image: "/images/advertisement/advertisement2.png",
      title: "Menu Booblsads",
      description: "Elnminuate your ontine from using Simple exapoles.",
    },
    {
      image: "/images/advertisement/advertisement3.png",
      title: "In-Store Promotions",
      description: "Induslibal content onmkellaons on fotral istars.",
    },
    {
      image: "/images/advertisement/advertisement4.png",
      title: "Corporate Office",
      description: "Slinandman life orcopession aind for amelef to asses.",
    },
    {
      image: "/images/advertisement/advertisement2.png",
      title: "Menu Booblsads",
      description: "Elnminuate your ontine from using Simple exapoles.",
    },
    {
      image: "/images/advertisement/advertisement3.png",
      title: "In-Store Promotions",
      description: "Induslibal content onmkellaons on fotral istars.",
    },
    {
      image: "/images/advertisement/advertisement4.png",
      title: "Corporate Office",
      description: "Slinandman life orcopession aind for amelef to asses.",
    },
  ];
  return (
    <>
    <div className="space-large"></div>
      <div className="container">
        
        <div className="title">
          <h2 className="text-3xl md:text-5xl text-slate-900 font-bold text-center">
            Digital Signage Software
          </h2>
          <p className="text-center mt-5">
            Our digital signage solutions can benefit your organization,no
            matter your industry.
          </p>
        </div>
        <div className="grid grid-cols-1 place-items-center md:grid-cols-3 mt-15 gap-5">
        {advertisement_Content?.map((single_Advertisement_Card, index) => (
            <div className="w-full md:w-xs px-4 py-2 flex flex-col items-center" key={index}>
                <Image
                width={600}
                height={600}
                src={single_Advertisement_Card?.image}
                className="object-cover rounded-lg"
                alt=""
                ></Image>
                <h4 className="text-2xl font-semibold mt-2">{single_Advertisement_Card?.title}</h4>
                <p className="text-gray-500 text-center mt-4">
                    {single_Advertisement_Card?.description}
                </p>
            </div>
        ))}
        </div>
      </div>
    </>
  );
}

export default DIGITAL_SIGNAGE_SECTION2;
