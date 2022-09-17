import firebaseConfig from "./config";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// init firebase
initializeApp(firebaseConfig);

const db = getFirestore();
const auth = getAuth();

// export firestore
export { db, auth };
