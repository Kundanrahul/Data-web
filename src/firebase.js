// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getStorage} from '@firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyA4bHTaDHCAzucC3JSxC1aHuvW-4b-bA3Y",
  authDomain: "auth-fbb.firebaseapp.com",
  projectId: "auth-fbb",
  storageBucket: "auth-fbb.appspot.com",
  messagingSenderId: "281652699661",
  appId: "1:281652699661:web:a3c5c037a62f9daade6b44",
  measurementId: "G-NT70DSCD91"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth= getAuth();
const storage = getStorage(app);
export {app,auth,storage};