import React from 'react'
import CurrencyFormat from 'react-currency-format'
import { Link } from 'react-router-dom'
import "../components/css/subtotalstyle.css"
import { useStateValue } from '../StateProvider'


function SubTotal() {
    const [{basket}] = useStateValue()
     
    const GetIt = (basket)=>{
        var amount=0;
        for(let i=0;i<basket.length;i++){
            var x = 0;
            x = basket[i].price;
            console.log(x);
            amount = amount + parseInt(x);
            console.log(i);
        }
        console.log(amount);
        return amount
    
    }

    return (
        <div className="subtotal">
         <h1>Total</h1>   
         <div className="subtotal__info">
        <p>You have {basket.length} items in the basket </p>
        <p>Your Basket's Total is : </p>
        <CurrencyFormat className="subtotal__value"
        decimalScale={2}
        value={GetIt(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₹"} />
         </div>
         <div className="subtotal__button">
             <Link to="/login">
                 <button style={{fontSize:"14px", padding:"5px 10px",color:"black",backgroundColor:"#eb8d1bc2",borderStyle:"none",border:"1px solid black", cursor:"pointer"}} className="subtotal__btn">Proceed to CheckOut</button>
             </Link>
         </div>
        </div>
    )
}

export default SubTotal
