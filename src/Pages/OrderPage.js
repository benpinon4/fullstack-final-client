import { useEffect } from "react"
import {Button} from "react-bootstrap"


const OrderPage = (props) => {

    const { nocompleteOrder, shippingInfo, billingInfo} = props
    // const orderItems = order.items
    const urlEndpoint = process.env.REACT_APP_URL_ENDPOINT;

    const orderSummary = {...nocompleteOrder}

    console.log(orderSummary)
    console.log(shippingInfo)
    console.log(billingInfo)


    // const handleSendOrder = async() => {
    //     const orderResponse = await fetch(`${urlEndpoint}/orders/send-order`, {
    //         method: "POST",
    //             headers: {
    //                         "Content-Type" : "application/json"
    //                      },
    //             body: JSON.stringify({
    //                 order,
    //                     })
    //             })

    //     const payloadResponse = await orderResponse.json()        
    //     console.log(payloadResponse)    
    
    // }

      
    


    return (
        <div>
            Order Page
            <div>OrderSummary</div>
            {/* <div>Order Total: ${orderSummary.orderSummary.cartTotal}</div>
            <div>
                {orderSummary.orderSummary.items.map((item, index)=>{
                    return (
                        <div key={index}>
                            <img src={item.image}></img>
                            <h4>Quantity: {item.quantity}</h4>
                        </div>
                    )
                })}
            </div> */}
            {/* <div>
                Shipping Address:<p>{shippingInfo[0].streetAdress} {shippingInfo[0].aptUnit} {shippingInfo[0].city} {shippingInfo[0].state} {shippingInfo[0].zip}</p>
            </div>
             */}
            <Button onClick={()=>{
                // handleSendOrder(order)
                
            }}>Confirm Order</Button>
        
        </div>  )
}

export default OrderPage