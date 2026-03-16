import Advertisement_Solutions from "@/components/advertisement";
import CMS_Marketing from "@/components/cms/cms_section_1";
import CustomerReviews from "@/components/customer";
import FAQ from "@/components/faq/faq";
import Footer from "@/components/Footer/footer";
import Hero from "@/components/hero";
import NavberMain from "@/components/NavberMain";
import STEPS_SECTION from "@/components/pages/cms/components/STEPS";
import RentalProducts from "@/components/rental";
import SolutionCard from "@/components/solution_card";

import UseCase from "@/components/useCase";

export default function Home() {
  return (
    <>
      <NavberMain />
      <div className="main_div">
        <Hero />
        <div>
          <CMS_Marketing />
          <SolutionCard />
          <UseCase />
          <STEPS_SECTION />
          <Advertisement_Solutions />
          <RentalProducts />
          <CustomerReviews />
          <FAQ />
        </div>
      </div>
      <Footer />
    </>
  );
}
