import Footer from "../Footer/Footer";
import NavberMain from "../NavberMain";
import AvailableSizes from "./availableSizes";
import DetailsHero from "./detailsHero";
import DetailsTechnical from "./detailsTechnical";
import KeyFeatures from "./keyFeatures";
import RWInstallation from "./rWInstallations";

function Detail() {
  return (
    <>
      <NavberMain />
      <div className="main_div">
        <DetailsHero />
        <DetailsTechnical />
        <KeyFeatures />
        <AvailableSizes />
        <RWInstallation />
      </div>
      <Footer />
    </>
  );
}

export default Detail;
