// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API,
  authDomain: "mern-estate-d930a.firebaseapp.com",
  projectId: "mern-estate-d930a",
  storageBucket: "mern-estate-d930a.appspot.com",
  messagingSenderId: "1022144656370",
  appId: "1:1022144656370:web:4511bbdebcefa162dc316b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);