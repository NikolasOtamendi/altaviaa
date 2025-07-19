import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDTMJ721vLqIPWpWSB4-mSWHV5sAWmb0u4",
  authDomain: "altavilla-78a6e.firebaseapp.com",
  databaseURL: "https://altavilla-78a6e-default-rtdb.firebaseio.com",
  projectId: "altavilla-78a6e",
  storageBucket: "altavilla-78a6e.firebasestorage.app",
  messagingSenderId: "488902406735",
  appId: "1:488902406735:web:bfb1e487b7b05beae9b03a",
  measurementId: "G-WR39YNF3MQ"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);
