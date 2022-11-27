import {Button} from "react-bootstrap"
import {useEffect, useState} from "react"
import ProductCard from "./ProductCard"
const ShoppingCartProductCard = (props) => {


    const {product, handleAddFromShoppingCart, handleDeleteProductfromCart, shoppingCartProductList } = props


    let yesNo = ""
    let count = 0
    //Item Count Functionality

    for (let i = 0; i < shoppingCartProductList.length; i++){
        yesNo = "yes"

    if(shoppingCartProductList[i].title === product.title){
        yesNo = "yes"
    }
    if(shoppingCartProductList[i].title !== product.title){
        yesNo = "no"
    }
    if(yesNo === "yes"){
        count++
    }
    }
    console.log(count)





    



    if(product.render === false) {
        return(
          <></>
        )
    }

    if(product.render === undefined){
        return(
            
            <div className="shoppingListCard-container">
                
            <h4>{product.title}</h4>
            <img src={product.image}></img>
            <p>${product.price}</p>
            <div className="itemQuantityAdjuster-container">
            <label>Quantity: {count}</label>
            <div className="itemQuantityButtonsAdjuster-container">
            <Button onClick={()=>{
                // itemCount()
                handleAddFromShoppingCart(product)                
            }}>+</Button>
            <br></br>
            <Button onClick={()=>{
                // if(itemQuantity < 1){
                //     setItemQuantiy(0)
                // }
                // if(itemQuantity >= 1){
                    // itemCount()
                    handleDeleteProductfromCart(product)
                // }
                
            }}>-</Button>
            
            </div>
            </div>

        </div>
    )

    
    }

}

export default ShoppingCartProductCard