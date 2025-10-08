import CMS_Content from "@/components/cms/cms_content";
import CMS_Marketing from "@/components/cms/cms_section_1";
import Hero from "@/components/hero";
import Navber from "@/components/navber";
import SolutionCard from "@/components/solution-card";

export default function Home() {
  return (
    <>
      <div className="">
        <Navber />
        <Hero />
        <div className="px-[15px] md:px-[80px]">
          <SolutionCard />
          <CMS_Marketing />
          <CMS_Content />
        </div>
      </div>
    </>
  );
}
