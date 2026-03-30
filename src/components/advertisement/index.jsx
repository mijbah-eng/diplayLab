import AdsCard from "./adsCard";

function Advertisement_Solutions() {
  const adsCardDatas = [
    {
      ads_card_image_url: "/images/advertisement/Restaurant.jpg",
      ads_card_title: "Restaurant",
      ads_card_description:
        "Promote menu items, specials, and offers with dynamic digital displays that attract attention and update instantly across locations.",
      ads_card_link_text: "Learn More",
      ads_card_link_address: "/",
      product_name: ["Digital Menu Board"],
    },
    {
      ads_card_image_url: "/images/advertisement/Shoopingmall.png",
      ads_card_title: "Shopping Mall",
      ads_card_description:
        "Engage shoppers with dynamic ads and targeted messaging on high traffic displays to boost reach and influence purchases",
      ads_card_link_text: "Learn More",
      ads_card_link_address: "/",
      product_name: ["Indoor Display"],
    },
    {
      ads_card_image_url: "/images/advertisement/Corporate_Office.jpg",
      ads_card_title: "Corporate Office",
      ads_card_description:
        "Improve internal communication by sharing realtime updates and dashboards across locations with digital signage",
      ads_card_link_text: "Learn More",
      ads_card_link_address: "/",
      product_name: ["Digital Menu Board", "Indoor Display"],
    },
    {
      ads_card_image_url: "/images/advertisement/Hospital.png",
      ads_card_title: "Hospital",
      ads_card_description:
        "Provide patients and visitors with realtime information directions and health updates through digital signage spaces.",
      ads_card_link_text: "Learn More",
      ads_card_link_address: "/",
      product_name: ["Presentation Display"],
    },
    {
      ads_card_image_url: "/images/advertisement/Groceryshoop.png",
      ads_card_title: "Grocery Shop",
      ads_card_description:
        "Highlight promotions, discounts, and featured products with digital signage to boost visibility, engage shoppers, and drive in-store sales.",
      ads_card_link_text: "Learn More",
      ads_card_link_address: "/",
      product_name: ["Digital Menu Board"],
    },
    {
      ads_card_image_url: "/images/advertisement/Bank.png",
      ads_card_title: "Bank",
      ads_card_description:
        "Use digital signage in banks to share services, updates, and queue info while promoting products and enhancing customer experience.",
      ads_card_link_text: "Learn More",
      ads_card_link_address: "/",
      product_name: ["Digital Menu Board", "Indoor Display"],
    },
    {
      ads_card_image_url: "/images/advertisement/Airport.jpg",
      ads_card_title: "Airport",
      ads_card_description:
        "Keep passengers informed with realtime flight updates while displaying to enhance experience and maximize visibility.",
      ads_card_link_text: "Learn More",
      ads_card_link_address: "/",
      product_name: [],
    },
    {
      ads_card_image_url: "/images/advertisement/Train Station.jpg",
      ads_card_title: "Train Station",
      ads_card_description:
        "Deliver real-time travel updates and navigation info with digital displays while enabling brands to reach thousands of daily commuters.",
      ads_card_link_text: "Learn More",
      ads_card_link_address: "/",
      product_name: [],
    },
    {
      ads_card_image_url: "/images/advertisement/High-Traffic Locations.jpg",
      ads_card_title: "High-Traffic Locations",
      ads_card_description:
        "Maximize visibility in high traffic areas using digital signage to deliver targeted ads and grow revenue for businesses.",
      ads_card_link_text: "Learn More",
      ads_card_link_address: "/",
      product_name: [],
    },
    {
      ads_card_image_url: "/images/advertisement/Shwroom.png",
      ads_card_title: "Showroom",
      ads_card_description:
        "Showcase products and brand stories with immersive digital displays that engage customers and enhance showroom experience.",
      ads_card_link_text: "Learn More",
      ads_card_link_address: "/",
      product_name: ["Indoor Display"],
    },
  ];
  return (
    <>
      <div className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-center h2_text">
            Display Lab Advertisement Solutions
          </h2>
          <div className="h-6"></div>
          <p className="title_desc mb-8">
            Turn screens into revenue-generating advertising platforms.
          </p>
          <div className="h-6"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {adsCardDatas.map((item, index) => (
              <AdsCard key={index} data={item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Advertisement_Solutions;
