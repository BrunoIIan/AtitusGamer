// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyADLlgIrbldPU7ZqUdWghqstGtQn2CAXKs",
  authDomain: "atitusgamer-9e2fc.firebaseapp.com",
  projectId: "atitusgamer-9e2fc",
  storageBucket: "atitusgamer-9e2fc.appspot.com",
  messagingSenderId: "371572806178",
  appId: "1:371572806178:web:6cfb886bb526dce03e707b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
//export const auth = getAuth(app)