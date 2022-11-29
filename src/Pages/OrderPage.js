

const OrderPage = (props) => {

    const {shoppingCartProductList, order} = props
    const orderItems = order.items
    console.log(order)
  


    return (
        <div>
            Order Page
            <p>{order.userEmail}</p>
            {order.items.map((item, index)=>{
                let indexFound = null

                for(let i = 0;i < shoppingCartProductList.length; i ++){
                    if(shoppingCartProductList[i].id === item.itemID){
                        indexFound = i
                    }
                }

                return(
                        <div className="orderItem-container" key={index} >
                        <p>{item.itemID}</p>
                        <img src={shoppingCartProductList[indexFound].image}></img>
                        </div>
   
                )
            })}
        
        </div>  )
}

export default OrderPage