// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAyBw5QG4AaMEBjrBRazOQvVbxsq2Ff-3w",
    authDomain: "singup-srig.firebaseapp.com",
    projectId: "singup-srig",
    storageBucket: "singup-srig.appspot.com",
    messagingSenderId: "1068916088847",
    appId: "1:1068916088847:web:a16ed925072d54e8c3837a"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP); 
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);
