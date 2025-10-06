import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
//   apiKey: "DEIN_API_KEY",
//   authDomain: "DEIN_PROJEKT.firebaseapp.com",
  databaseURL: "https://zeiterfassung-71109-default-rtdb.europe-west1.firebasedatabase.app/", // 👈 ganz wichtig!
//   projectId: "DEIN_PROJEKT_ID",
//   storageBucket: "DEIN_PROJEKT.appspot.com",
//   messagingSenderId: "DEINE_SENDER_ID",
//   appId: "DEINE_APP_ID"
};

// Firebase initialisieren
const app = initializeApp(firebaseConfig);


// Realtime Database referenzieren
export const db = getDatabase(app);