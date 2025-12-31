import Navber from "@/components/navber";

import Rental_Options from "./components/Rental_Options";
import Rental_Hero from "./components/Rental_Hero";
import Footer from "@/components/Footer/footer";

function Rental() {
    return ( <>
    <Navber />
    <Rental_Hero />
    <Rental_Options />
    <Footer />
    </> );
}

export default Rental;