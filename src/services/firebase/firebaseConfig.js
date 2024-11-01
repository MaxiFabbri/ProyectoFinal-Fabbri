
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyA7QaDI3HVGIJRJ_jYWCCOlHRdSlJBHkzk",
  authDomain: "react-fabbri-coderhouse.firebaseapp.com",
  projectId: "react-fabbri-coderhouse",
  storageBucket: "react-fabbri-coderhouse.appspot.com",
  messagingSenderId: "721808501072",
  appId: "1:721808501072:web:f12b1f44b2fd6503996455"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)