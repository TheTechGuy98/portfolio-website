import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCH6Zy0mB8l7IOPqtKR2uW4m4_djCBOoPk",
  authDomain: "portfolio-pratnar.firebaseapp.com",
  projectId: "portfolio-pratnar",
  storageBucket: "portfolio-pratnar.appspot.com",
  messagingSenderId: "438422194094",
  appId: "1:438422194094:web:22f3a49a6526b2a1e7ea3f",
  measurementId: "G-XS12E0BVF9",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
