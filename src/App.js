import React,{useEffect}  from 'react'
import './App.css';
import { BrowserRouter as Router,Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Body from "./components/Body"
import Products from "./components/Products"
import Checkout from './components/Checkout';
import Login from './components/Login';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';


function App() {

    const [{user}, dispatch] = useStateValue();

    useEffect(() => {
      
      const unsubscribe = auth.onAuthStateChanged((authUser)=>{
        if(authUser){
          ///logged in
          dispatch({
            type : "SET_USER",
            user : authUser,
          })
        }
        else{
          //logged out
          dispatch({
            type : "SET_USER",
            user : null,
          })
        }
      })
      return()=>{
        unsubscribe();
      }
    }, [])

    console.log("USER :  " , user)

  return( 
    <Router>

      <Switch>

      <Route path="/login">
        <Login />
      </Route>
   
      <Route path="/checkout">
      <Navbar />
      <Checkout />
      </Route>
     
      <Route path="/">
      <Navbar />
      <Body />
      <Products />
      </Route>

      </Switch>

    </Router>
  )
}

export default App;
