import NavberMain from "../NavberMain";
import DetailsHero from "./detailsHero";
import DetailsTechnical from "./detailsTechnical";
import KeyFeatures from "./keyFeatures";
import Packaging from "./Packaging";
import Footer from "../Footer/footer";
import RWInstallation from "./rWInstallations";

function Detail() {
  return (
    <>
      <NavberMain />
      <div className="main_div">
        <DetailsHero />
        <DetailsTechnical />
        <KeyFeatures />
        <Packaging />
        <RWInstallation />
      </div>
      <Footer />
    </>
  );
}

export default Detail;
