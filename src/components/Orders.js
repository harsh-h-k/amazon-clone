import React from 'react'
import "../components/css/ordersStyle.css"
import { useStateValue } from "../StateProvider" ;

function Orders({ id, title, rating, price, img }) {

    const [{basket},dispatch] = useStateValue()

    const RemoveFromBasket = () =>{
        dispatch({
            type :"REMOVE_FROM_BASKET",
                id:id,
                
            }
        )
    }

    return (
        <div className="orders">
            <div className="orders__image" >
                <img src={img} />
            </div>
            <div className="orders__info" >
                <h2>{title}</h2>
                <h4>₹ {price}</h4>
                <button onClick={RemoveFromBasket} >Remove from cart</button>
            </div>
        </div>
    )
}

export default Orders
