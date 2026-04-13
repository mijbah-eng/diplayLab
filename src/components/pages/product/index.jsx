import NavberMain from "@/components/NavberMain";
import Prduct_Hero from "./components/Prduct_Hero";
import Product_Feature from "./components/Product_Feature";
import Products from "./components/Products";
import Footer from "@/components/footer";
import ProductCetagory from "@/components/ProductCetagory";
import NewProdcutDesign from "@/components/newProductsDesign";

function Product() {
  return (
    <>
      <NavberMain />
      <div className="main_div">
        <Prduct_Hero />
        <div className="max-w-7xl mx-auto">
          <ProductCetagory />
          
        </div>
          <NewProdcutDesign />
          <Products />
        
      </div>
      <Footer />
    </>
  );
}

export default Product;
