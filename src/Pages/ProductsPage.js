import ProductCard from "../Components/ProductCard";
import { useState, useEffect } from "react";

const ProductsPage = (props) => {
  const { handleAddProducttoCart } = props;

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
    <div>
      Products Page
      <div className="productsList-container">
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
  );
};

export default ProductsPage;
