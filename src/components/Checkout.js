import React from 'react'
import "../components/css/checkoutstyle.css"
import { useStateValue } from "../StateProvider"
import banner from "../images/banner.jpg"
import Orders from './Orders'
import SubTotal from './SubTotal'

function Checkout() {
    const [{ basket }] = useStateValue()
    return (
        <div className="checkout">
            <div className="checkout__banner">
                <img src={banner} />
            </div>
            <div className="checkout__orders">
                {basket?.length === 0 ? (
                    <div>
                        <h1>No orders</h1>
                        <p>Please Go back and click on "Add to Cart" to add items to cart</p>
                    </div>
                ) : (
                    <>
                        <h1 style={{ margin: "10px 25px", fontWeight: "500" }}>Your Orders</h1>
                        <div className="checkout__orders__basket">

                            <div className="checkout__placed__orders">
                                {basket?.map(item => (
                                    <Orders
                    
                                        id={item.id}
                                        title={item.title}
                                        rating={item.rating}
                                        price={item.price}
                                        img={item.img}
                                    />
                                ))}
                            </div>
                            <SubTotal />
                        </div>
                    </>
                )}


            </div>

        </div>
    )
}

export default Checkout
