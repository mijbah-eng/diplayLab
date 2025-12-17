import Navber2 from "@/components/navber2";
import Prduct_Hero from "./components/Prduct_Hero";
import Product_Feature from "./components/Product_Feature";
import Products from "./components/Products";
import Footer from "@/components/Footer/footer";

function Product() {
    return ( <>
    <Navber2/>
    <Prduct_Hero />
    <div className="container">
    <Product_Feature />
    <Products />
    </div>
    <Footer />
    </> );
}

export default Product;