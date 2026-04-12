import NavberMain from "@/components/NavberMain";
import Rental_Hero from "./components/Rental_Hero";
import Rental_Options from "./components/Rental_Options";
import Footer from "@/components/Footer";

function Rental() {
  return (
    <>
      <NavberMain />
      <div className="main_div">
        <Rental_Hero />
        <Rental_Options />
      </div>
      <Footer />
    </>
  );
}

export default Rental;
