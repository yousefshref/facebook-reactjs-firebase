import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCRwXdVjgf3dueuuPeFt2V3-oqRhCdqcYY",
  authDomain: "facebook-1da71.firebaseapp.com",
  projectId: "facebook-1da71",
  storageBucket: "facebook-1da71.appspot.com",
  messagingSenderId: "999987902036",
  appId: "1:999987902036:web:db7800bbd8d2abf3749fc1"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app);
