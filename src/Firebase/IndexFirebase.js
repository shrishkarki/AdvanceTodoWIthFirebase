// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbPjB0bXztFfnz_K7Z1R0t-A1poXPWPDk",
  authDomain: "complex-todo.firebaseapp.com",
  projectId: "complex-todo",
  storageBucket: "complex-todo.appspot.com",
  messagingSenderId: "244393329484",
  appId: "1:244393329484:web:bf7fe0297da71862bf05e9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);