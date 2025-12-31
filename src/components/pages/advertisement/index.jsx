import Navber from "@/components/navber";
import Advertisement_Hero from "./components/Advertisement_Hero";

import Footer from "@/components/Footer/footer";
import Advertisement_Solutions from "@/components/advertisement/advertisement_solutions";

function Advertisement() {
  return (
    <>
      <Navber />
      <Advertisement_Hero />
      <div className="container">
        <Advertisement_Solutions />
      </div>
      <Footer />
    </>
  );
}

export default Advertisement;
