// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAEJLR9wTs5nbjls3B2aF1og9WxaevL0fM",
  authDomain: "wishlist-26c17.firebaseapp.com",
  projectId: "wishlist-26c17",
  storageBucket: "wishlist-26c17.appspot.com",
  messagingSenderId: "212636515205",
  appId: "1:212636515205:web:0f0c1347ac831c1e1be2ec"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {
  app, db,
};