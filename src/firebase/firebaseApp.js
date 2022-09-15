import firebaseConfig from "./config";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// init firebase
initializeApp(firebaseConfig);

const db = getFirestore();

// export firestore
export { db };
