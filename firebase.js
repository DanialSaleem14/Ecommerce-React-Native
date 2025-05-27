// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDk5b-8sDu7HJy82SSiXzsybPK9_3TZ0rc",
  authDomain: "ecommerce-e3398.firebaseapp.com",
  projectId: "ecommerce-e3398",
  storageBucket: "ecommerce-e3398.firebasestorage.app",
  messagingSenderId: "57902285563",
  appId: "1:57902285563:web:e8c5b8346cef9672a7a65e",
  measurementId: "G-MW0LCFX6ZR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Export authentication instance
export const auth = getAuth(app);
export const db = {};