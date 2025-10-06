// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCCxCnPmlj9fRORbbsTdyNzyQuqFrd5BVQ",
  authDomain: "zeiterfassung-c8154.firebaseapp.com",
  projectId: "zeiterfassung-c8154",
  databaseURL: "https://zeiterfassung-c8154-default-rtdb.europe-west1.firebasedatabase.app/", 
  storageBucket: "zeiterfassung-c8154.firebasestorage.app",
  messagingSenderId: "571567285839",
  appId: "1:571567285839:web:584b705788d2396a466c3a",
  measurementId: "G-K5V61P16GG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const Analytics = getAnalytics(app);


