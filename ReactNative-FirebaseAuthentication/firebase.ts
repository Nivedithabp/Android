// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebase from "firebase/compat";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB1sYew4qxV2eSST92hU_BIClTRHXF0M54",
    authDomain: "mydairy-8562b.firebaseapp.com",
    projectId: "mydairy-8562b",
    storageBucket: "mydairy-8562b.appspot.com",
    messagingSenderId: "126402592782",
    appId: "1:126402592782:web:ddfab81d7fe1a4f11bfc5f",
    measurementId: "G-FKMECN3TDX"
  };  

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app()
}

const auth = firebase.auth();

export { auth };