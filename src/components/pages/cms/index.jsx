import FAQ from "@/components/faq/faq";
import Footer from "@/components/Footer/footer";
import Navber from "@/components/navber";
import CORE_FEATURES from "./components/CORE_FEATURES";
import Testimonial from "./components/CUSTOMMER_SECTION";
import DEVICE_SECTION from "./components/DeviceSection";
import DigitalSignage from "./components/Digital Signage";
import DIGITAL_SIGNAGE_SECTION from "./components/DIGITAL_SIGNAGE_SECTION";
import DIGITAL_SIGNAGE_SECTION2 from "./components/DIGITAL_SIGNAGE_SECTION2";
import CMS_HERO from "./components/hero";
import HOW_TO_WORK from "./components/HOW_TO_WORK";
import STEPS_SECTION from "./components/STEPS";
import { HeroVideoDialogDemo } from "./components/Video_Section";
import WHY_SECTION from "./components/WHY_SECTION";
import MobileApp from "./components/MobileApp";
import BusinessGrow from "./components/BusinessGrow";
import GetStarted from "./components/GetStarted";
import LeadingFeatures from "./components/LeadingFeatures";
import LotMore from "./components/LotMore";
import NavberMain from "@/components/NavberMain";

function CMS() {
  return (
    <>
      {/* <Navber /> */}
      <NavberMain />
      <div className="main_div">
      <CMS_HERO />
      <CORE_FEATURES />
      <DEVICE_SECTION />
      <DigitalSignage />
      <DIGITAL_SIGNAGE_SECTION />
      <LotMore />
      <HeroVideoDialogDemo />
      <GetStarted />
      <LeadingFeatures />
      <WHY_SECTION />
      <MobileApp />
      <BusinessGrow />
      {/* <DIGITAL_SIGNAGE_SECTION2 /> */}
      <STEPS_SECTION />
      <HOW_TO_WORK />
      <Testimonial />
      <FAQ />

      </div>
      <Footer />
    </>
  );
}

export default CMS;
