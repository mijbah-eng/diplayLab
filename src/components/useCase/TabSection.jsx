import { TabsTrigger } from "../ui/tabs";

function TabSection() {
  const TabDatas = [
    {
      tabName: "Retail",
      tabValue:"retail"
    },
    {
      tabName: "Corporate Offices",
      tabValue:"corporate_offices"

    },
    {
      tabName: "Restaurants",
      tabValue:"restaurants"

    },
    {
      tabName: "Healthcare",
      tabValue:"healthcare"

    },
    {
      tabName: "Education",
      tabValue:"education"

    },
  ];
  const tabStyle =
    "text-left text-lg shadow-none px-6 py-4 border-l-2 border-r-0 border-b-0 border-t-0 border-gray-300 rounded-none justify-start data-[state=active]:border-[#003051] data-[state=active]:text-[#003051]";

  return (
    <>
      <div className="flex flex-col w-full">
        {TabDatas?.map((singleTab, index) => (
          <TabsTrigger key={index} className={tabStyle} value={singleTab?.tabValue}>
            {singleTab?.tabName}
          </TabsTrigger>
        ))}

        
      </div>
    </>
  );
}

export default TabSection;
