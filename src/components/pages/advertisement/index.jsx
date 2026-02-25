import Navber from "@/components/navber";
import Advertisement_Hero from "./components/Advertisement_Hero";

import Footer from "@/components/Footer/footer";
import Advertisement_Solutions from "@/components/advertisement/advertisement_solutions";
import NavberMain from "@/components/NavberMain";

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
