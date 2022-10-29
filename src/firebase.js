// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFD4-F_ysLSj6jc1-G8NYXh87NUc39ryA",
  authDomain: "react-portfolio-dashboar-6d577.firebaseapp.com",
  projectId: "react-portfolio-dashboar-6d577",
  storageBucket: "react-portfolio-dashboar-6d577.appspot.com",
  messagingSenderId: "829788720562",
  appId: "1:829788720562:web:7dc0e3e66051c6f19ce8ab"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const storage = getStorage(app);
export const db = getFirestore(app);
export const signInWithGoogle = () => signInWithPopup(auth, provider);
