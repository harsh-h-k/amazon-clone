# amazon-clone
LIVE at https://clone-86f7a.web.app/
This is a frontend clone of amazon.
It is made with the help of ReactJs, and it is hosted at firebase.
Whole design is fully responsive. 
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
