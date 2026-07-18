// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
    authDomain: "authexamsnotes-3fe18.firebaseapp.com",
    projectId: "authexamsnotes-3fe18",
    storageBucket: "authexamsnotes-3fe18.firebasestorage.app",
    messagingSenderId: "754612691546",
    appId: "1:754612691546:web:24333600b5f7f3c304ee63"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

const provider= new GoogleAuthProvider()

export {auth, provider}