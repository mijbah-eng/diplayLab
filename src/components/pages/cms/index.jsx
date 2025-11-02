import Navber2 from "@/components/navber2";
import CMS_HERO from "./components/hero";
import CORE_FEATURES from "./components/CORE_FEATURES";
import DEVICE_SECTION from "./components/DeviceSection";
import DIGITAL_SIGNAGE_SECTION from "./components/DIGITAL_SIGNAGE_SECTION";

function CMS() {
    return ( <>
        <Navber2/>
        <CMS_HERO />
        <CORE_FEATURES />
        <DEVICE_SECTION />
        <DIGITAL_SIGNAGE_SECTION />
    </> );
}

export default CMS;