import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


const firebaseConfig = {
  apiKey            : "AIzaSyBqvHwexzy_0EqjKoIdIwc4Iq_uh9XArrA"   ,
  authDomain        : "encuestas-react.firebaseapp.com"           ,
  projectId         : "encuestas-react"                           ,
  storageBucket     : "encuestas-react.appspot.com"               ,
  messagingSenderId : "905688338218"                              ,
  appId             : "1:905688338218:web:0412bc810eff4681a11853" ,
  measurementId     : "G-9L9SYFM9D7"
};

// Initialize Firebase
export const FirebaseApp        = initializeApp(firebaseConfig) ;
export const FirebaseAnalytics  = getAnalytics( FirebaseApp)    ;


export const FirebaseAuth = getAuth( FirebaseApp );