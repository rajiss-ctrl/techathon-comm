// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "schlbox-8ed91.firebaseapp.com",
  projectId: "schlbox-8ed91",
  storageBucket: "schlbox-8ed91.appspot.com",
  messagingSenderId: "7679172506",
  appId: "1:7679172506:web:fcd696e3360eead5a26423"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth =getAuth()
export const storage = getStorage(app)
export default app