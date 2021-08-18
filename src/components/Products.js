import React from 'react'
import "../components/css/productstyle.css"
import Card from '../components/Card'


function Products() {
    return (
        <>
            <div className="products__row">

                <Card id="1"
                    title="Redmi 9 (Sky Blue, 4GB RAM, 64GB Storage) | 2.3GHz Mediatek Helio G35 Octa core Processor"
                    rating="4"
                    price="8999.00"
                    img="https://images-na.ssl-images-amazon.com/images/I/71A9Vo1BatL._SL1500_.jpg"
                />
                <Card id="2"
                    title="Mi Smart Band 5 – India’s No. 1 Fitness Band, 1.1-inch AMOLED Color Display, Magnetic Charging, 2 Weeks Battery "
                    rating="4"
                    price="2499.00"
                    img="https://images-na.ssl-images-amazon.com/images/I/719ZywAmvOL._SL1500_.jpg"
                />
            </div>

            <div className="products__row">
                <Card id="3"
                    title="Levi's Men's Slim Fit Jeans"
                    rating="5"
                    price="1359.00"
                    img="https://images-na.ssl-images-amazon.com/images/I/91StXhp9m%2BL._UL1500_.jpg"
                />
                <Card id="4"
                    title="Fossil Chronograph Black Men Watch CH2882"
                    rating="4"
                    price="5999.00"
                    img="https://images-na.ssl-images-amazon.com/images/I/81wGRwNp2VL._UL1500_.jpg"
                />
                <Card id="5"
                    title="Levi's Men's Printed Regular Fit Polo"
                    rating="3"
                    price="549.00"
                    img="https://images-na.ssl-images-amazon.com/images/I/914HUFmtoTL._UL1500_.jpg"
                />

            </div>

            <div className="products__row">

                <Card id="6"
                    title="boAt Rockerz 295v2 Wireless Neckband with BT v5.0, IPX7 Water Resistance, ASAP Fast Charge, Vibration Alert, Dual EQs, Immersive Sound, Up to 12H Playback(Active Black)"
                    rating="5"
                    price="1399.00"
                    img="https://images-na.ssl-images-amazon.com/images/I/61MXBi-72OL._SL1500_.jpg"
                />

                <Card id="7"
                title="IFB 8kg 5 Star Fully-Automatic Front Loading Washing Machine (Senator WXS, Silver, 3D Wash Technology,Aqua Energie,Anti- Allergen,In-built heater)"
                rating="4"
                price="36990.00"
                img="https://m.media-amazon.com/images/I/710CPzd-ojS._SL1500_.jpg" />
            

            </div>
        </>
    )
}

export default Products
