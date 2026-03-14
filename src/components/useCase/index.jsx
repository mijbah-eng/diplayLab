import { Tabs, TabsList } from "../ui/tabs";
import ContentSection from "./ContentSection";
import TabSection from "./TabSection";

function UseCase() {
  return (
    <>
      <div className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          {/* Heading */}
          <h2 className="text-center text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Digital Signage Solutions for Every Industry
          </h2>

          <p className="text-center text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
            Our platform helps organizations communicate better, engage
            customers, and deliver impactful digital experiences.
          </p>

          <Tabs defaultValue="retail" orientation="vertical">
            {/* Layout wrapper */}
            <div className="flex flex-col md:flex-row gap-12 pt-5">
              {/* LEFT SIDE */}
              <TabsList className="flex flex-col w-full md:w-[30%] h-fit bg-transparent p-0">
                <TabSection />
              </TabsList>

              {/* RIGHT SIDE */}
              <div className="w-full md:w-[70%]">
                <ContentSection />
              </div>
            </div>
          </Tabs>
        </div>
      </div>

      {/* <div className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="">
            <h2 className="text-center h2_text mb-6">
              Digital Signage Solutions for Every Industry
            </h2>
            <p className="text-center text-xl text-gray-600 mb-8">
                Our platform helps organizations communicate better, engage customers, and deliver impactful digital experiences.
              </p>
            <Tabs className="flex ">
              <TabsList variant="none" className="w-[25%] bg-transparent mb-5">
                <TabSection />
              </TabsList>
              <div className="w-[75%]">
                <ContentSection />
              </div>
            </Tabs>
          </div>
        </div>
      </div> */}
    </>
  );
}

export default UseCase;
