import Footer from "@/components/Footer/footer";
import NavberMain from "@/components/NavberMain";
import Prduct_Hero from "./components/Prduct_Hero";
import Product_Feature from "./components/Product_Feature";
import Products from "./components/Products";

function Product() {
  return (
    <>
      <NavberMain />
      <div className="main_div">
        <Prduct_Hero />
        <div className="container">
          <Product_Feature />
          <Products />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Product;
