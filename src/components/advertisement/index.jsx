import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import AdsCard from "./adsCard";
import AdsCard2 from "./adsCard2";
import AdsCard3 from "./adsCard3";

function Advertisement_Solutions() {
  const adsCardDatas = [
    {
      ads_card_image_url: "/images/advertisement/restaurant.png",
      ads_card_title: "Restaurant",
      ads_card_description:
        "Promote menu items, specials, and offers with dynamic digital displays that attract attention and update instantly across locations.",
      ads_card_link_text: "Learn More",
      ads_card_link_address: "/",
      color_from: "#796655",
      color_to: "#2b231d",
      product_name: ["Digital Menu Board"],
    },
    {
      ads_card_image_url: "/images/advertisement/shopping-mall.png",
      ads_card_title: "Shopping Mall",
      ads_card_description:
        "Engage shoppers with dynamic ads and targeted messaging on high-traffic digital displays to boost visibility, influence purchases, and enhance customer experience.",
      ads_card_link_text: "Learn More",
      ads_card_link_address: "/",
      color_from: "#dfdfdf",
      color_to: "#474747",
      product_name: ["Indoor Display"],
    },
    {
      ads_card_image_url: "/images/advertisement/corporate-office.png",
      ads_card_title: "Corporate Office",
      ads_card_description:
        "Improve internal communication by sharing real-time announcements, dashboards, and updates across locations with dynamic digital signage.",
      ads_card_link_text: "Learn More",
      ads_card_link_address: "/",
      color_from: "#814f4f",
      color_to: "#201313",
      product_name:['Digital Menu Board',"Indoor Display"],
    },
    {
      ads_card_image_url: "/images/advertisement/hospital.png",
      ads_card_title: "Hospital",
      ads_card_description:
        "Provide patients and visitors with real-time information, directions, and health updates through digital signage that enhances communication across healthcare spaces.",
      ads_card_link_text: "Learn More",
      ads_card_link_address: "/",
      color_from: "#dfdfdf",
      color_to: "#474747",
      product_name:["Presentation Display"],
    },
    {
      ads_card_image_url: "/images/advertisement/grocery-shop.png",
      ads_card_title: "Grocery Shop",
      ads_card_description:
        "Highlight promotions, discounts, and featured products with digital signage to boost visibility, engage shoppers, and drive in-store sales.",
      ads_card_link_text: "Learn More",
      ads_card_link_address: "/",
      color_from: "#3d3b91",
      color_to: "#151533",
      product_name:["Digital Menu Board"],
    },
    {
      ads_card_image_url: "/images/advertisement/bank.png",
      ads_card_title: "Bank",
      ads_card_description:
        "Use digital signage in banks to share services, updates, and queue info while promoting products and enhancing customer experience.",
      ads_card_link_text: "Learn More",
      ads_card_link_address: "/",
      color_from: "#dfdfdf",
      color_to: "#474747",
      product_name:["Digital Menu Board","Indoor Display"],
    },
    {
      ads_card_image_url: "/images/advertisement/airport.png",
      ads_card_title: "Airport",
      ads_card_description:
        "Keep passengers informed with real-time flight updates while displaying ads to enhance experience and maximize visibility in busy terminals.",
      ads_card_link_text: "Learn More",
      ads_card_link_address: "/",
      color_from: "#dfdfdf",
      color_to: "#474747",
      product_name:[],
    },
    {
      ads_card_image_url: "/images/advertisement/train-station.png",
      ads_card_title: "Train Station",
      ads_card_description:
        "Deliver real-time travel updates and navigation info with digital displays while enabling brands to reach thousands of daily commuters.",
      ads_card_link_text: "Learn More",
      ads_card_link_address: "/",
      color_from: "#dfdfdf",
      color_to: "#474747",
      product_name:[],
    },
    // {
    //   ads_card_image_url: "/images/advertisement/high-traffic.png",
    //   ads_card_title: "High-Traffic Locations",
    //   ads_card_description:
    //     "Maximize visibility in areas with constant foot traffic such as malls, streets, and transit hubs. Digital signage helps businesses deliver impactful advertising campaigns to large audiences. Turn screens into revenue-generating platforms through targeted advertising.",
    //   ads_card_link_text: "Learn More",
    //   ads_card_link_address: "/",
    // },
    {
      ads_card_image_url: "/images/advertisement/showroom.jpg",
      ads_card_title: "Showroom",
      ads_card_description:
        "Showcase products and brand stories with immersive digital displays that engage customers and enhance the showroom experience.",
      ads_card_link_text: "Learn More",
      ads_card_link_address: "/",
      color_from: "#dfdfdf",
      color_to: "#474747",
      product_name:["Indoor Display"],
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
          <p className="title_desc">
            Turn screens into revenue-generating advertising platforms.
          </p>
          <Tabs defaultValue="cardstyle1" className="w-full">
            <TabsList>
              <TabsTrigger className={"cursor-pointer"}  value="cardstyle1">Card Style1</TabsTrigger>
              <TabsTrigger className={"cursor-pointer"} value="cardstyle2">Card Style2</TabsTrigger>
              <TabsTrigger className={"cursor-pointer"} value="cardstyle3">Card Style3</TabsTrigger>
            </TabsList>
            <TabsContent value="cardstyle1">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {adsCardDatas.map((item, index) => (
                  <AdsCard key={index} data={item} />
                ))}
              </div>
            </TabsContent>
            <TabsContent value="cardstyle2">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {adsCardDatas.map((item, index) => (
                  <AdsCard2 key={index} data={item} />
                ))}
              </div>
            </TabsContent>
            <TabsContent value="cardstyle3">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {adsCardDatas.map((item, index) => (
                  <AdsCard3 key={index} data={item} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  );
}

export default Advertisement_Solutions;
