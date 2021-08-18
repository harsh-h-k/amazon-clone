import React from 'react'
import '../components/css/cardstyle.css'
import { useStateValue } from '../StateProvider';

function Card({id , title ,rating , price , img}) {

    const [{basket}, dispatch] = useStateValue()

    const addToBasket = () =>{
        //add to basket
        dispatch({
            type: "ADD_TO_BASKET",
            item:{
                id,
                title,
                rating,
                price,
                img,
            }
        })
    };



    return (
        <div className="card__container">
           <div className="card__heading">
           <h2> {title} </h2>
            <h4>₹ {price}</h4>
           </div> 
            <div className="card__img">
                <img src={img} alt="product-image"/>
            </div>
            <div className="card__button">
                <button onClick={addToBasket} >Add to Cart</button>
            </div>
        </div>
    )
}

export default Card
