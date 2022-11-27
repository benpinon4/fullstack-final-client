import { Button } from "react-bootstrap"
import {useState, useEffect} from "react"

const ProductCard = (props) => {

    const {product, handleAddProducttoCart} = props




    return(
        <div className="productCard-container">
            <h2>{product.title}</h2>
            <img src={product.image}></img>
            <p>${product.price}</p>
            <Button onClick={()=>{
               handleAddProducttoCart(product)
            }}>Add to Cart</Button>
        </div>

    )

    
}

export default ProductCard