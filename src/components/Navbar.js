import React from 'react'
import './css/navstyle.css'
import { Link } from 'react-router-dom'
import { useStateValue } from '../StateProvider'
import { auth } from '../firebase';


function Navbar() {

    const [{ basket ,user }] = useStateValue();
    const login = () =>{
        if(user){
            auth.signOut();
        }
    }
    console.log(basket)

    return (
        <nav>
        <div className="header">
            <div className="header__logo">
            <Link to="/">
            <img src="https://www.nicepng.com/png/full/16-167642_amazon-logo-amazon-logo-white-text.png" alt="logo" />
            </Link>
            </div>
            <div className="header__search">
                <input type="text" />
                <i class="fas fa-search"></i>
            </div>
            <div className="header__links">
                
                <div className="header__links__text" >
                <Link to={!user && "/login"} style={{textDecoration:"none",color:"white"}}>
                    <h4 className="header__text__one">{user ? user.email : "hello"}</h4>
                    <h2 onClick={login} className="header__text__one">
                    {user ? 'Sign Out': 'Sign in'}
                    </h2>
                    </Link>
                </div>

                <div className="header__links__text" >
                    <h4 className="header__text__one">Orders &#38; </h4>
                    <h2 className="header__text__one">
                        Returns
                    </h2>
                </div>

                <div className="header__links__text" >
                    <h4 className="header__text__one">Your</h4>
                    <h2 className="header__text__one">
                        Prime
                    </h2>
                </div>
            </div>
            <div className="header__basket">
            <Link to="/checkout" style={{display:"flex"}}>
            <i class="fas fa-shopping-cart"></i>
            <h4 className="header__cart__value">{basket?.length}</h4>
            </Link>
            </div>
        </div> 
        </nav>
    )
}

export default Navbar
