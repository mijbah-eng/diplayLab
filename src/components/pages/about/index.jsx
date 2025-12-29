import Footer from "@/components/Footer/footer";
import Navber2 from "@/components/navber2";
import AboutHero from "./components/AboutHero";
import AboutSection from "./components/AboutSection";

function AboutUs() {
  return (
    <>
      <Navber2 />
      <AboutHero />
      <div className="container">
        <div className="px-2 md:px-0">
          <AboutSection />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AboutUs;
