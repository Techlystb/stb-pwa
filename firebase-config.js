// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA0cg8b_3FNOuNFizeNr4bT0lprVx_HtlI",
  authDomain: "stb-pwa.firebaseapp.com",
  projectId: "stb-pwa",
  storageBucket: "stb-pwa.firebasestorage.app",
  messagingSenderId: "813734682643",
  appId: "1:813734682643:web:86a232c4be580ccd8a5fe6",
  measurementId: "G-8TQLZNJXJ4"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
