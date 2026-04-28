import { Tabs, TabsList } from "../ui/tabs";
import ContentSection from "./ContentSection";
import TabSection from "./TabSection";

function Benefits() {
  return (
    <>
      <div className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          {/* Heading */}
          <h2 className="h2_text text-center">
            Everything You Need, <br /> All in One Platform
          </h2>
          <div className="h-6"></div>

          <Tabs
            className={"pt-10"}
            defaultValue="smart_content_designer"
            orientation="vertical"
          >
            {/* Layout wrapper */}
            <div className="w-full grid md:grid-cols-2 gap-5 pt-5">
              {/* LEFT SIDE */}
              <TabsList className="flex flex-col bg-transparent p-0">
                <TabSection />
              </TabsList>

              {/* RIGHT SIDE */}
              <div className="">
                <ContentSection />
              </div>
            </div>
          </Tabs>
        </div>
      </div>
    </>
  );
}

export default Benefits;
