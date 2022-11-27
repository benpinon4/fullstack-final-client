import logo from "./logo.svg";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import GlobalLayout from "./Layout/GlobalLayout";
import ErrorPage from "./Pages/ErrorPage";
import HomePage from "./Pages/HomePage";
import ProductsPage from "./Pages/ProductsPage";
import ShoppingCartPage from "./Pages/ShoppingCart";
import LoginPage from "./Pages/LoginPage";
import RegistrationPage from "./Pages/RegistrationPage";
import { useEffect, useState } from "react";

function App() {
  const [shoppingCartProductList, setShoppingCartProductList] = useState([]);

  const handleAddProducttoCart = (product) => {


    const titleCheck = (element) => {
      return element.title === product.title 
    }
    if(shoppingCartProductList.some(titleCheck) !== true){
       setShoppingCartProductList([...shoppingCartProductList, product]);
    }
    if(shoppingCartProductList.some(titleCheck) === true){

      const indexAdd = shoppingCartProductList.findIndex((cartProduct) => {

        return cartProduct.title === product.title;
      });
      
      let addRenderProduct = {
        id: product.id,
        title: product.title,
        price: product.price,
        product: product.description,
        category: product.category,
        image: product.imgage,
        rating: product.rating,
        render: false
      }
  
      console.log(addRenderProduct)
      const updatedShoppingCart = [...shoppingCartProductList];
  
      const spliceShopCart = updatedShoppingCart.splice(indexAdd, 0, addRenderProduct);
      console.log(spliceShopCart);
  
      setShoppingCartProductList(updatedShoppingCart);
   }

    
  };


  const handleDeleteProductfromCart = (product) => {
    const indexToDelete = shoppingCartProductList.findIndex((cartProduct) => {
      console.log(cartProduct.title);
      console.log(product.title);
      return cartProduct.title === product.title;
    });
    console.log(indexToDelete);

    const updatedShoppingCart = [...shoppingCartProductList];

    const spliceShopCart = updatedShoppingCart.splice(indexToDelete, 1);
    console.log(spliceShopCart);

    console.log(updatedShoppingCart);

    setShoppingCartProductList(updatedShoppingCart);
  };

  const handleAddFromShoppingCart = (product) => {

    const indexAdd = shoppingCartProductList.findIndex((cartProduct) => {

      return cartProduct.title === product.title;
    });
    
    let addRenderProduct = {
      id: product.id,
      title: product.title,
      price: product.price,
      product: product.description,
      category: product.category,
      image: product.imgage,
      rating: product.rating,
      render: false
    }

    console.log(addRenderProduct)
    const updatedShoppingCart = [...shoppingCartProductList];

    const spliceShopCart = updatedShoppingCart.splice(indexAdd, 0, addRenderProduct);
    console.log(spliceShopCart);

    setShoppingCartProductList(updatedShoppingCart);

  }

  let cartTotal = 0;
  

    for (let i = 0; i < shoppingCartProductList.length; i++) {
      cartTotal = cartTotal + shoppingCartProductList[i].price;
    }



  console.log(shoppingCartProductList);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <GlobalLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "/login",
          element: <LoginPage />,
        },
        {
          path: "/registration",
          element: <RegistrationPage />,
        },
        {
          path: "/products",
          element: (
            <ProductsPage handleAddProducttoCart={handleAddProducttoCart} />
          ),
        },
        {
          path: "/shopping-cart",
          element: (
            <ShoppingCartPage
              shoppingCartProductList={shoppingCartProductList}
              handleAddFromShoppingCart={handleAddFromShoppingCart}
              handleDeleteProductfromCart={handleDeleteProductfromCart}
              cartTotal={cartTotal}
              setShoppingCartProductList={setShoppingCartProductList}
            />
          ),
        },
      ],
    },
  ]);

  return (
    <div className="App">
      <header className="App-header">
        <RouterProvider router={router} />
      </header>
    </div>
  );
}

export default App;
