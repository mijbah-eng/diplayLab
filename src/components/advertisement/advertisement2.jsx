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
    <>
      <div className="space-large"></div>
      <h3 className="section_sub_title text-center">Advertising</h3>
      {/* flex flex-col md:flex-row justify-center items-center */}
      <div className="fore_column_grid">
        {advertisement_Content?.map((single_Advertisement_Card, index) => (
          <div className="fore_column_grid_single_item" key={index}>
            <Image
              width={600}
              height={600}
              src={single_Advertisement_Card?.image}
              className="object-cover rounded-lg"
              alt=""
            ></Image>
            <h4 className="section_sub_sub_title ">{single_Advertisement_Card?.title}</h4>
            <p className="section_sub_sub_desc ">
                {single_Advertisement_Card?.description}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Advertisement_2;
