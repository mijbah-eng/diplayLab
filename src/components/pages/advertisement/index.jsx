import Navber2 from "@/components/navber2";
import Advertisement_Hero from "./components/Advertisement_Hero";
import Advertisement_Solutions from "./components/Advertisement_Solutions";
import Footer from "@/components/Footer/footer";

function Advertisement() {
    return ( <>
    <Navber2/>
    <Advertisement_Hero />
    <div className="container">

    <Advertisement_Solutions />
    </div>
    <Footer />
    </> );
}

export default Advertisement;