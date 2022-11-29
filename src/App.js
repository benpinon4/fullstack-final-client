
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import GlobalLayout from "./Layout/GlobalLayout";
import ErrorPage from "./Pages/ErrorPage";
import HomePage from "./Pages/HomePage";
import ProductsPage from "./Pages/ProductsPage";
import ShoppingCartPage from "./Pages/ShoppingCart";
import LoginPage from "./Pages/LoginPage";
import RegistrationPage from "./Pages/RegistrationPage";
import { useState } from "react";
import OrderPage from "./Pages/OrderPage";


function App() {
  const [shoppingCartProductList, setShoppingCartProductList] = useState([]);
  const [userData, setUserData] = useState({})
  const [order, setOrder] = useState({})
   
  

  const handleAddProducttoCart = (product) => {
    const productQuantity = product.quantity
    console.log(productQuantity)
    const titleCheck = (element) => {
      return element.title === product.title;
    };
    const titleCheck1= shoppingCartProductList.some(titleCheck)
    console.log(titleCheck1)
    if (shoppingCartProductList.some(titleCheck) !== true) {

      let addProduct = {
        id: product.id,
        title: product.title,
        price: product.price,
        product: product.description,
        category: product.category,
        image: product.image,
        rating: product.rating,
        quantity: 1,

      };
      setShoppingCartProductList([
        ...shoppingCartProductList, addProduct
        
      ]);
      console.log(addProduct.quantity)
      console.log(titleCheck1)
    }

    console.log(titleCheck1)
    if (shoppingCartProductList.some(titleCheck) === true) {
      const indexAdd = shoppingCartProductList.findIndex((cartProduct) => {
        return cartProduct.title === product.title;
      });
      console.log(titleCheck1)
      let addRenderProduct = {
        id: product.id,
        title: product.title,
        price: product.price,
        product: product.description,
        category: product.category,
        image: product.image,
        rating: product.rating,
        quantity: (shoppingCartProductList[indexAdd].quantity) + 1,

      };

      console.log(addRenderProduct)

      console.log(product.quantity)

      console.log(addRenderProduct);
      const updatedShoppingCart = [...shoppingCartProductList];

      const spliceShopCart = updatedShoppingCart.splice(
        indexAdd,
        1,
        addRenderProduct
      );
      console.log(spliceShopCart);

      setShoppingCartProductList(updatedShoppingCart);
    }
    console.log(titleCheck1)
  };


  const handleDeleteProductfromCart = (product) => {
    const indexToDelete = shoppingCartProductList.findIndex((cartProduct) => {
      console.log(cartProduct.title);
      console.log(product.title);
      return cartProduct.title === product.title;
    });

    const updatedShoppingCart = [...shoppingCartProductList];

    if (product.quantity > 1) {
      console.log(indexToDelete);

      let deleteRenderProduct = {
        id: product.id,
        title: product.title,
        price: product.price,
        product: product.description,
        category: product.category,
        image: product.image,
        rating: product.rating,
        quantity: Number(product.quantity) - 1,
      };

      const spliceShopCart = updatedShoppingCart.splice(
        indexToDelete,
        1,
        deleteRenderProduct
      );

      console.log(updatedShoppingCart);

      setShoppingCartProductList(updatedShoppingCart);
      return;
    }
    if ((product.quantity = 1)) {
      const spliceShopCart = updatedShoppingCart.splice(indexToDelete, 1);
      setShoppingCartProductList(updatedShoppingCart);
      return;
    }
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
      image: product.image,
      rating: product.rating,
      quantity: Number(product.quantity + 1),
    };

    console.log(addRenderProduct);
    const updatedShoppingCart = [...shoppingCartProductList];

    const spliceShopCart = updatedShoppingCart.splice(
      indexAdd,
      1,
      addRenderProduct
    );
    console.log(spliceShopCart);

    setShoppingCartProductList(updatedShoppingCart);
  };

  let cartTotal = 0;

  for (let i = 0; i < shoppingCartProductList.length; i++) {
    cartTotal = cartTotal + shoppingCartProductList[i].price*shoppingCartProductList[i].quantity;
  }

  const handleCreatePurchaseOrder = (CartList) => {

    
    console.log(CartList)
    
    console.log(userData)

    const purchaseOrder = {
      userID: userData.userID,
      userEmail: userData.email,
      date: new Date(),
      items: CartList.map((item)=>{
        const returnObject = {
          itemID: item.id,
          quantity: item.quantity
        }
        return returnObject
      }),
  
    
    }
    setOrder(purchaseOrder)
    console.log(purchaseOrder)


  };

  console.log(shoppingCartProductList);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <GlobalLayout setUserData={setUserData} />,
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
              handleCreatePurchaseOrder={handleCreatePurchaseOrder}
            />
          ),
        },
        {
          path: "/order-review",
          element: (
            <OrderPage shoppingCartProductList={shoppingCartProductList}     order={order}/>
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
