import About_Us from "@/components/about_us/about_us";
import Advertisement_1 from "@/components/advertisement/advertisement1";
import Advertisement_Solutions from "@/components/advertisement/advertisement_solutions";

import CMS_Content from "@/components/cms/cms_content";
import CMS_Marketing from "@/components/cms/cms_section_1";
import FAQ from "@/components/faq/faq";
import Footer from "@/components/Footer/footer";
import Hero from "@/components/hero";
import MarqueeSection from "@/components/marquee/marquee";
import Navber from "@/components/navber";
import Products from "@/components/products/products";
import Rental_1 from "@/components/rental/rental_1";
import Rental_2 from "@/components/rental/rental_2";
import SolutionCard from "@/components/solution-card";

export default function Home() {
  return (
    <>
      <div className="relative overflow-x-hidden">
        <Navber />
        <Hero />
        <div className="container">
          <div className="space-large"></div>
          <SolutionCard />
          <div className="space-large"></div>
          <MarqueeSection />
          <div className="space-large"></div>
          <CMS_Marketing />
          <div className="space-large"></div>
          <CMS_Content />
          <div className="space-large"></div>
          <Products />
          <div className="space-large"></div>
          <Rental_1 />
          <div className="space-large"></div>
          <Rental_2 />
          <div className="space-large"></div>
          <Advertisement_1 />
          <div className="space-large"></div>
          <Advertisement_Solutions />
          <div className="space-large"></div>
          <About_Us />
          <div className="space-large"></div>
          <FAQ />
          <div className="space-large"></div>
        </div>
        <Footer />
      </div>
    </>
  );
}
