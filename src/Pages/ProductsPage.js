import ProductCard from "../Components/ProductCard";
import ShoppingCartPage from "./ShoppingCart";
import { useState, useEffect } from "react";
import ShoppingCartSummary from "../Components/ShoppingCartSummary.js";

const ProductsPage = (props) => {
  const { handleAddProducttoCart, cartTotal, shoppingCartProductList } = props;

  const [productList, setProductList] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");

      const result = await response.json();

    //   const edittedProductList = result.map((product) => {
    //     return {
    //       ...product,
    //       render: true,
    //     };
    //   });

      setProductList(result);
    };
    fetchProducts();
  }, []);

  return (
    <div className="flex justify-content">

    <div className="flex row w-100">

      <div className="text-center">
           Products Page
      </div>
      <div>
      <div className="mx-10 w-100 sm:flex-row md:flex column  justify-center flex-wrap border-solid ">
        {productList.map((product, index) => {
          return (
            <ProductCard 
              key={index}
              product={product}
              handleAddProducttoCart={handleAddProducttoCart}
            />
          );
        })}
      </div>
      </div>

      

      
    </div>
    <div className="w-">
      <ShoppingCartSummary cartTotal={cartTotal} shoppingCartProductList={shoppingCartProductList} />
      </div>
    </div>
  );
};

export default ProductsPage;
