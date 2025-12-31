import FAQ from "@/components/faq/faq";
import Footer from "@/components/Footer/footer";
import Navber from "@/components/navber";
import CORE_FEATURES from "./components/CORE_FEATURES";
import Testimonial from "./components/CUSTOMMER_SECTION";
import DEVICE_SECTION from "./components/DeviceSection";
import DIGITAL_SIGNAGE_SECTION from "./components/DIGITAL_SIGNAGE_SECTION";
import DIGITAL_SIGNAGE_SECTION2 from "./components/DIGITAL_SIGNAGE_SECTION2";
import CMS_HERO from "./components/hero";
import HOW_TO_WORK from "./components/HOW_TO_WORK";
import STEPS_SECTION from "./components/STEPS";
import { HeroVideoDialogDemo } from "./components/Video_Section";
import WHY_SECTION from "./components/WHY_SECTION";

function CMS() {
  return (
    <>
      <Navber />
      <CMS_HERO />
      <CORE_FEATURES />
      <DEVICE_SECTION />
      <HeroVideoDialogDemo />
      <DIGITAL_SIGNAGE_SECTION />
      <DIGITAL_SIGNAGE_SECTION2 />
      <STEPS_SECTION />
      <HOW_TO_WORK />
      <WHY_SECTION />
      <Testimonial />
      <FAQ />
      <Footer />
    </>
  );
}

export default CMS;
