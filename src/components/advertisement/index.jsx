import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import AdsCard from "./adsCard";
import AdsCard2 from "./adsCard2";

function Advertisement_Solutions() {
  const adsCardDatas = [
    {
      ads_card_image_url: "/images/advertisement/restaurant.png",
      ads_card_title: "Restaurant",
      ads_card_description:
        "Promote menu items, daily specials, and limited-time offers using vibrant digital displays. Digital signage helps restaurants attract customer attention and influence purchasing decisions. Update promotions instantly across locations to keep menus fresh and engaging.",
      ads_card_link_text: "Learn More",
      ads_card_link_address: "/",
    },
    {
      ads_card_image_url: "/images/advertisement/shopping-mall.png",
      ads_card_title: "Shopping Mall",
      ads_card_description:
        "Engage shoppers with dynamic advertisements, promotions, and brand campaigns. Digital displays placed in high-traffic mall areas increase visibility for retailers and advertisers. Deliver targeted messaging to influence purchasing decisions and improve customer experience.",
      ads_card_link_text: "Learn More",
      ads_card_link_address: "/",
    },
    {
      ads_card_image_url: "/images/advertisement/corporate-office.png",
      ads_card_title: "Corporate Office",
      ads_card_description:
        "Improve internal communication with company announcements, dashboards, and updates. Digital signage helps organizations share important information across departments and locations. Display meeting schedules, KPIs, and corporate messaging in real time.",
      ads_card_link_text: "Learn More",
      ads_card_link_address: "/",
    },
    {
      ads_card_image_url: "/images/advertisement/hospital.png",
      ads_card_title: "Hospital",
      ads_card_description:
        "Provide patients and visitors with important information, directions, and health announcements. Digital signage improves communication in waiting areas, lobbies, and departments. Display appointment updates, health tips, and emergency notifications effectively.",
      ads_card_link_text: "Learn More",
      ads_card_link_address: "/",
    },
    {
      ads_card_image_url: "/images/advertisement/grocery-shop.png",
      ads_card_title: "Grocery Shop",
      ads_card_description:
        "Highlight weekly promotions, discounts, and featured products with digital signage displays. Attract customer attention near checkout counters, aisles, and store entrances. Improve in-store engagement while increasing product visibility and sales.",
      ads_card_link_text: "Learn More",
      ads_card_link_address: "/",
    },
    {
      ads_card_image_url: "/images/advertisement/bank.png",
      ads_card_title: "Bank",
      ads_card_description:
        "Digital signage helps banks communicate financial services, promotions, and important updates. Display queue information, customer guidance, and banking services across branches. Improve customer experience while promoting new products such as loans or credit services.",
      ads_card_link_text: "Learn More",
      ads_card_link_address: "/",
    },
    {
      ads_card_image_url: "/images/advertisement/airport.png",
      ads_card_title: "Airport",
      ads_card_description:
        "Keep passengers informed with real-time updates on flights, schedules, and gate changes. Digital signage can also display advertisements and promotions across airport terminals. Enhance passenger experience while maximizing advertising opportunities in high-traffic locations.",
      ads_card_link_text: "Learn More",
      ads_card_link_address: "/",
    },
    {
      ads_card_image_url: "/images/advertisement/train-station.png",
      ads_card_title: "Train Station",
      ads_card_description:
        "Deliver real-time travel information including arrival times, delays, and platform updates. Digital displays help commuters navigate stations efficiently while staying informed. Advertising spaces also allow brands to reach thousands of daily travelers.",
      ads_card_link_text: "Learn More",
      ads_card_link_address: "/",
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
        "Showcase products, brand stories, and promotional campaigns using immersive digital displays. Digital signage enhances the showroom experience by presenting dynamic visual content. Help customers explore products, promotions, and features in an engaging way.",
      ads_card_link_text: "Learn More",
      ads_card_link_address: "/",
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
              <TabsTrigger value="cardstyle1">Card Style1</TabsTrigger>
              <TabsTrigger value="cardstyle2">Card Style2</TabsTrigger>
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
          </Tabs>
        </div>
      </div>
    </>
  );
}

export default Advertisement_Solutions;
