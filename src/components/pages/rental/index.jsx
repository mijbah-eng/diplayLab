import Footer from "@/components/footer";
import NavberMain from "@/components/NavberMain";
import Rental_Hero from "./components/Rental_Hero";
import RentalDivision from "./components/RentalDivision";
import { RentalOffer } from "./components/RentalOffer";



function Rental() {
  return (
    <>
      <NavberMain />
      <div className="main_div">
        <Rental_Hero />
      <RentalDivision />
      <RentalOffer />
      </div>
      <Footer />
    </>
  );
}

export default Rental;
