import Footer from "@/components/Footer/footer";
import Navber from "@/components/navber";
import Prduct_Hero from "./components/Prduct_Hero";
import Product_Feature from "./components/Product_Feature";
import Products from "./components/Products";

function Product() {
  return (
    <>
      <Navber />
      <Prduct_Hero />
      <div className="container">
        <Product_Feature />
        <Products />
      </div>
      <Footer />
    </>
  );
}

export default Product;
