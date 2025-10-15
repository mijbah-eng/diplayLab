import Image from "next/image";

function Advertisement_2() {
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
    <div className="py-30">
      <h2 className="text-3xl font-semibold text-center mx-auto">Use Cases</h2>
      {/* flex flex-col md:flex-row justify-center items-center */}
      <div className="grid grid-cols-1 place-items-center md:grid-cols-4 mt-15 gap-5 flex-wrap">
        {advertisement_Content?.map((single_Advertisement_Card, index) => (
          <div className="w-xs px-4 py-2 flex flex-col items-center" key={index}>
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
  );
}

export default Advertisement_2;
