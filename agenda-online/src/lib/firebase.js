import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyBc0TL5sUTTLjC4aLqN-6RB3wjbXh_aHW4",
  authDomain: "react-firebase-tcc.firebaseapp.com",
  projectId: "react-firebase-tcc",
  storageBucket: "react-firebase-tcc.appspot.com",
  messagingSenderId: "104636496642",
  appId: "1:104636496642:web:ed86b7012e55479e85e01b"
};


export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);

export const database = getDatabase(app);
