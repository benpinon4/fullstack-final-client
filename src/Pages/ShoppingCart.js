import ShoppingCartProductCard from "../Components/ShoppingCartProductCard"
import { Button } from "react-bootstrap"

const ShoppingCartPage = (props) => {

    const {shoppingCartProductList, handleAddFromShoppingCart, handleDeleteProductfromCart, cartTotal, setShoppingCartProductList} = props


    
    return (
        <div>Shopping Cart
            <br></br>
            Cart Total: ${cartTotal.toFixed(2)}
            <Button onClick={()=>{

            }}>Purchase</Button>
            <Button onClick={()=>{
                setShoppingCartProductList([])
            }}>Empty Cart</Button>
        <div className="shoppingCartList-container">
        
            {shoppingCartProductList.length < 1 && <h3>No Items in Cart</h3>}
            
            {shoppingCartProductList.length >= 1 && <div> {shoppingCartProductList.map((product, index)=>{
                
                return(
                <ShoppingCartProductCard key={index} product={product} handleAddFromShoppingCart={handleAddFromShoppingCart} handleDeleteProductfromCart={handleDeleteProductfromCart}
                shoppingCartProductList={shoppingCartProductList}/>)
              
            })}
            </div>}
           
        </div>

        </div>
        
    )
}

export default ShoppingCartPage