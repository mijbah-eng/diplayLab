import About_Us from "@/components/about_us/about_us";
import Advertisement_1 from "@/components/advertisement/advertisement1";
import Advertisement_2 from "@/components/advertisement/advertisement2";
import CMS_Content from "@/components/cms/cms_content";
import CMS_Marketing from "@/components/cms/cms_section_1";
import FAQ from "@/components/faq/faq";
import Footer from "@/components/Footer/footer";
import Hero from "@/components/hero";
import Navber from "@/components/navber";
import Products from "@/components/products/products";
import Rental_1 from "@/components/rental/rental_1";
import Rental_2 from "@/components/rental/rental_2";
import SolutionCard from "@/components/solution-card";


export default function Home() {
  return (
    <>
      <div className="relative">
        <Navber />
        <Hero />
        <div className="px-[15px] md:px-[80px]">
          <SolutionCard />
          <CMS_Marketing />
          <CMS_Content />
          <Products />
          <Rental_1 />
          <Rental_2 />
          <Advertisement_1 />
          <Advertisement_2 />
          <About_Us />
          <FAQ />
        </div>
        <Footer />
      </div>
    </>
  );
}
