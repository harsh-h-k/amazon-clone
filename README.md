# amazon-clone

LIVE at https://clone-86f7a.web.app/


This is a frontend clone of amazon.
Features:
1.Takes orders and stores in basket.
2.Displays selected orders of basket.
3.Sign In and SignOut with FireBase authentication.

It is made with the help of ReactJs, and it is hosted at firebase.
ReactJs:
Hooks Used: useContext , createContext , useReducer

Whole design is fully responsive. 
Used simple CSS throughout the code for beginners to easily understand it.

To use the code, clone this code and create firebase.js in src folder.
Write the following code: 
and paste firebase config files in <<< FIREBASE CONFIG >>> and host it in firebase .
////////////////////////////

import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    <<< FIREBASE CONFIG >>>
})

const auth = firebase.auth();

export {auth} ;

///////////////////////////

You can contact me if you have problem in hoisting or you need any help.
