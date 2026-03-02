import Footer from "../Footer/footer";
import NavberMain from "../NavberMain";
import DetailsHero from "./detailsHero";
import DetailsTechnical from "./detailsTechnical";

function Detail() {
    return ( <>
    <NavberMain />
    <div className="main_div">
    <DetailsHero />
    <DetailsTechnical />
    </div>
    <Footer />
    </> );
}

export default Detail;