import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, push, get, update, remove } from "firebase/database";

// Deine Firebase-Konfiguration
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

// Firebase initialisieren
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// Exportiere die Datenbank
export { db, ref, set, push, get, update, remove };


