import FAQ from "@/components/faq/faq";
import Footer from "@/components/Footer/footer";
import NavberMain from "@/components/NavberMain";
import { cmsFaqsData } from "@/utils";
import CORE_FEATURES from "./components/CORE_FEATURES";
import Testimonial from "./components/CUSTOMMER_SECTION";
import DEVICE_SECTION from "./components/DeviceSection";
import DigitalSignage from "./components/Digital Signage";
import DIGITAL_SIGNAGE_SECTION from "./components/DIGITAL_SIGNAGE_SECTION";
import GetStarted from "./components/GetStarted";
import CMS_HERO from "./components/hero";
import HOW_TO_WORK from "./components/HOW_TO_WORK";
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
        <CORE_FEATURES />
        <DEVICE_SECTION />
        <DigitalSignage />
        <DIGITAL_SIGNAGE_SECTION />
        {/* <LotMore /> */}
        <GetStarted />
        <LeadingFeatures />
        <HeroVideoDialogDemo />
        <WHY_SECTION2 />
        {/* <WHY_SECTION /> */}
        {/* <MobileApp /> */}
        {/* <BusinessGrow /> */}
        <STEPS_SECTION />
        <HOW_TO_WORK />
        <Testimonial />
        <FAQ datas={cmsFaqsData} />
      </div>
      <Footer />
    </>
  );
}

export default CMS;
