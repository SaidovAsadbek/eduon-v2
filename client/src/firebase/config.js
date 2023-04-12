import { initializeApp } from "firebase/app";
import { getAuth, RecaptchaVerifier } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDgK6EupcFyvwcO5TkIbFhFyQnGbE8HCgE",
    authDomain: "eduon-cf5b3.firebaseapp.com",
    projectId: "eduon-cf5b3",
    storageBucket: "eduon-cf5b3.appspot.com",
    messagingSenderId: "505279960176",
    appId: "1:505279960176:web:8f83abd2a02d17c9d950b5",
    measurementId: "G-N0KXN8YGE1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);
export default app;
