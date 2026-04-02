import Advertisement_Solutions from "@/components/advertisement";
import CMS_Marketing from "@/components/cms/cms_section_1";
import CustomerReviews from "@/components/customer";
import DigitalSignageSolutions from "@/components/DigitalSignageSolutions";
import FAQ from "@/components/faq/faq";
import Footer from "@/components/Footer/footer";
import Hero from "@/components/hero";
import ImageSlide from "@/components/image_slide";

import NavberMain from "@/components/NavberMain";
import RentalProducts from "@/components/rental";
import SolutionCard from "@/components/solution_card";
import { homeFaqsData } from "@/utils";

export default function Home() {
  return (
    <>
      <NavberMain />
      <div className="main_div">
        <Hero />
        <div>
          <CMS_Marketing />
          <SolutionCard />
          <DigitalSignageSolutions />
          <Advertisement_Solutions />
          <RentalProducts />
          <CustomerReviews />
          <FAQ datas={homeFaqsData} />
          <ImageSlide />
        </div>
      </div>
      <Footer />
    </>
  );
}
