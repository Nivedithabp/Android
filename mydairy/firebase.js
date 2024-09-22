import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

// Firebase config (replace this with your own Firebase project config)
const firebaseConfig = {
  apiKey: "AIzaSyB1sYew4qxV2eSST92hU_BIClTRHXF0M54",
  authDomain: "mydairy-8562b.firebaseapp.com",
  projectId: "mydairy-8562b",
  storageBucket: "mydairy-8562b.appspot.com",
  messagingSenderId: "126402592782",
  appId: "1:126402592782:web:ddfab81d7fe1a4f11bfc5f",
  measurementId: "G-FKMECN3TDX"
};

const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth
const auth = getAuth(app);