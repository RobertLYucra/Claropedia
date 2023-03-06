// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDGUTCQlabdw8RE5qCtJ1iIHeqvuYCdwpc",
  authDomain: "claropedia-d11b6.firebaseapp.com",
  projectId: "claropedia-d11b6",
  storageBucket: "claropedia-d11b6.appspot.com",
  messagingSenderId: "812954094113",
  appId: "1:812954094113:web:fdd2e216c7dd661048f160",
  measurementId: "G-NVF0QV2TR3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth =getAuth(app)