import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

const firebaseConfig = {
 
  apiKey: "AIzaSyBfpWZ2uvQMW6PRBvR2O8k3GHYmoamvGKk",
  authDomain: "amk2-d0f54.firebaseapp.com",
  databaseURL: "https://amk2-d0f54-default-rtdb.firebaseio.com",
  projectId: "amk2-d0f54",
  storageBucket: "amk2-d0f54.appspot.com",
  messagingSenderId: "644445422890",
  appId: "1:644445422890:web:2c9cd0f7901911aa3e8a53",
  measurementId: "G-D8ER1YQJ5V"
};

