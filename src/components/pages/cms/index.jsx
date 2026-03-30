import Benefits from "@/components/cms_tab/Benefits";
import FAQ from "@/components/faq/faq";
import Footer from "@/components/Footer/footer";
import NavberMain from "@/components/NavberMain";
import { cmsFaqsData } from "@/utils";
import DEVICE_SECTION from "./components/DeviceSection";
import DigitalSignage from "./components/Digital Signage";
import GetStarted from "./components/GetStarted";
import CMS_HERO from "./components/hero";
import LeadingFeatures from "./components/LeadingFeatures";
import STEPS_SECTION from "./components/STEPS";
import { HeroVideoDialogDemo } from "./components/Video_Section";
import WHY_SECTION2 from "./components/WHY_SECTION2";

function CMS() {
  return (
    <>
      <NavberMain />
      <div className="main_div">
        <CMS_HERO />
        <GetStarted />
        <LeadingFeatures />
        <Benefits />
        <HeroVideoDialogDemo />
        <WHY_SECTION2 />
        <DEVICE_SECTION />
        <DigitalSignage />
        {/* <CORE_FEATURES /> */}
        {/* <DIGITAL_SIGNAGE_SECTION /> */}
        {/* <LotMore /> */}
        {/* <WHY_SECTION /> */}
        {/* <MobileApp /> */}
        {/* <BusinessGrow /> */}
        <STEPS_SECTION />
        {/* <HOW_TO_WORK /> */}
        {/* <Testimonial /> */}
        <FAQ datas={cmsFaqsData} />
      </div>
      <Footer />
    </>
  );
}

export default CMS;
