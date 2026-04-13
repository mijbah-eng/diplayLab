import Advertisement_Solutions from "@/components/advertisement";
import CMS_Marketing from "@/components/cms/cms_section_1";
import CustomerReviews from "@/components/customer";
import DigitalSignageSolutions from "@/components/DigitalSignageSolutions";
import FAQ from "@/components/faq/faq";
import Gallery from "@/components/gallery";
import Hero from "@/components/hero";
import RentalProducts from "@/components/rental";
import SolutionCard from "@/components/solution_card";
import { homeFaqsData } from "@/utils";
import NavberMain from "@/components/NavberMain";
import Footer from "@/components/footer";
import ProductSection from "@/components/product";

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
          <Gallery />
          <ProductSection />
          <Advertisement_Solutions />
          <RentalProducts />
          <CustomerReviews />
          <FAQ datas={homeFaqsData} />
        </div>
      </div>
      <Footer />
    </>
  );
}
