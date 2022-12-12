import { Button } from "react-bootstrap"
import {useState, useEffect} from "react"

const ProductCard = (props) => {

    const {product, handleAddProducttoCart} = props




    return(
        <div className="productCard-container w-3/4 ms-2 rounded-2xl bg-gray-100 flex flex-col justify-center md:w-1/5">
            <h6>{product.title}</h6>
            <img className="h-1/3 w-1/3" src={product.image}></img>
            <p>${product.price}</p>
            <Button onClick={()=>{
               handleAddProducttoCart(product)
            }}>Add to Cart</Button>
        </div>

    )

    
}

export default ProductCard