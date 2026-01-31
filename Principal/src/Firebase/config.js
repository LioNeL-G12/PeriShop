// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCEo0RyPR7pW-rkFw3Jp8JbRkGtHmc9LjM",
  authDomain: "perishop-reactjs-coder.firebaseapp.com",
  projectId: "perishop-reactjs-coder",
  storageBucket: "perishop-reactjs-coder.firebasestorage.app",
  messagingSenderId: "560956671906",
  appId: "1:560956671906:web:400e66315180831fa954fb"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app) 