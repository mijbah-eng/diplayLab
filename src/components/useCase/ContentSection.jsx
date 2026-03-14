import { TabsContent } from "../ui/tabs";

function ContentSection() {
  const contentDatas = [
    {
      contentImageUrl:
        "https://www.dotsignage.com/wp-content/uploads/2024/03/retail-store-digital-tv-screen.jpg",
      contentTitle: "Retail",
      contentDescription:
        "Promote offers, highlight products, and create engaging in-store experiences.",
      contentValue: "retail",
    },
    {
      contentImageUrl:
        "https://www.dotsignage.com/wp-content/uploads/2024/03/corporate-digital-tv-signage.jpg",
      contentTitle: "Corporate Offices",
      contentDescription:
        "Improve internal communication with company news, dashboards, and announcements.",
      contentValue: "corporate_offices",
    },
    {
      contentImageUrl:
        "https://www.dotsignage.com/wp-content/uploads/2024/03/school-digital-signage.jpg",
      contentTitle: "Restaurants",
      contentDescription:
        "Display digital menus, promotions, and dynamic pricing updates.",
      contentValue: "restaurants",
    },
    {
      contentImageUrl:
        "https://www.dotsignage.com/wp-content/uploads/2024/03/healthcare-digital-display.jpg",
      contentTitle: "Healthcare",
      contentDescription:
        "Share important information with patients, visitors, and staff across facilities.",
      contentValue: "healthcare",
    },
    {
      contentImageUrl:
        "https://www.dotsignage.com/wp-content/uploads/2024/03/school-digital-signage.jpg",
      contentTitle: "Education",
      contentDescription:
        "Communicate announcements, schedules, and campus updates on digital screens.",
      contentValue: "education",
    },
  ];
  return (
    <>
      {contentDatas?.map((singleContentData, index) => (
        <TabsContent key={index} value={singleContentData?.contentValue}>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Image */}
            <img
              src={singleContentData?.contentImageUrl}
              className="rounded-xl shadow-lg"
            />

            {/* Text */}
            <div>
              <h3 className="text-2xl font-semibold mb-4">
                {singleContentData?.contentTitle}
              </h3>

              <p className="text-gray-600 leading-relaxed mb-6">
               {singleContentData?.contentDescription}
              </p>

              <button className="bg-[#105783] hover:bg-[#003051] text-white px-6 py-3 rounded-lg cursor-pointer">
                Setup Digital Signage in Retail Store
              </button>
            </div>
          </div>
        </TabsContent>
      ))}
    </>
  );
}

export default ContentSection;
