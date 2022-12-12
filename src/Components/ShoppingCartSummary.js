import {Link} from "react-router-dom"

const ShoppingCartSummary = (props)=>{
 
const {cartTotal, shoppingCartProductList} =props

return (
    <div className="hidden md:block bg-sky-50 w-100 h-100 border-2">
            <h3 >Cart Summary</h3>
    <div className="mb-10" >
        
        <div>

            <label>Cart Total: ${cartTotal}</label>
            {shoppingCartProductList.map((product, index)=>{
                return (
                    <div key={index} className="flex-row bg-gray-200 m-2 border-2">
                        <p>{product.title}</p>
                        <p>quantity: {product.quantity}</p>
                    </div>
                )
            })}
            
        </div>
    </div>
            <Link className="no-underline text-white ml-5 p-2 text-lg border-2 bg-gray-500" to="/shopping-cart">Proceed to Checkout</Link>
    </div>

)
}

export default ShoppingCartSummary