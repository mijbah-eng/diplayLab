import Advertisement_Hero from "./components/Advertisement_Hero";
import NavberMain from "@/components/NavberMain";
import Advertisement_Solutions from "@/components/advertisement";
import Footer from "@/components/Footer";

function Advertisement() {
  return (
    <>
      <NavberMain />
      <div className="main_div">
        <Advertisement_Hero />
        <div className="container">
          <Advertisement_Solutions />
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Advertisement;
