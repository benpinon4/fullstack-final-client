import {Button} from "react-bootstrap"
import {useEffect, useState} from "react"
import ProductCard from "./ProductCard"
const ShoppingCartProductCard = (props) => {


    const {product, handleAddFromShoppingCart, handleDeleteProductfromCart, shoppingCartProductList } = props


    // let yesNo = ""
    // let count = 0
    //Item Count Functionality

    // for (let i = 0; i < shoppingCartProductList.length; i++){
    //     yesNo = "yes"

    // if(shoppingCartProductList[i].title === product.title){
    //     yesNo = "yes"
    // }
    // if(shoppingCartProductList[i].title !== product.title){
    //     yesNo = "no"
    // }
    // if(yesNo === "yes"){
    //     count++
    // }
    // }
    // console.log(count)





    



    // if(product.render === false) {
    //     return(
    //       <></>
    //     )
    // }

    // if(product.render === undefined){
        return(
            
            <div className="shoppingListCard-container flex justify-between h-1/4 border-2">
              <div className="">
      
              <p>{product.title}</p>
            
                    <div className="">
                        <img className="h-20" src={product.image}></img> 
                    </div>
                </div>  

            <p>${product.price}</p>
            
            
            <div className="itemQuantityButtonsAdjuster-container">
            <button onClick={()=>{
                // itemCount()
                handleAddFromShoppingCart(product)                
            }}>+</button>
            <br></br>
            <button onClick={()=>{
                // if(itemQuantity < 1){
                //     setItemQuantiy(0)
                // }
                // if(itemQuantity >= 1){
                    // itemCount()
                    handleDeleteProductfromCart(product)
                // }
                
            }}>-</button>
            
            </div>
            <div className="itemQuantityAdjuster-container">
            <label>Quantity: {product.quantity}</label>
            </div>

        </div>
    )

    
    // }

}

export default ShoppingCartProductCard