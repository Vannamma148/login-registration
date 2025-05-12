// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyANnT8uuNiqfd5lbwoTgGX6o8fkBTaxz5c",
  authDomain: "avndocs-c6e98.firebaseapp.com",
  projectId: "avndocs-c6e98",
  storageBucket: "avndocs-c6e98.firebasestorage.app",
  messagingSenderId: "389449819985",
  appId: "1:389449819985:web:a31001d4b6c6533762d570",
  measurementId: "G-YRLHJ8GC6N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export  const auth  = getAuth(app);