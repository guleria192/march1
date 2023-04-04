// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAb_a01DaJ-KkK7509x5xjOHupNUexez-Y",
  authDomain: "workplace-march.firebaseapp.com",
  projectId: "workplace-march",
  storageBucket: "workplace-march.appspot.com",
  messagingSenderId: "16794395931",
  appId: "1:16794395931:web:4c8c097900f84ad931dfbe"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth =getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)