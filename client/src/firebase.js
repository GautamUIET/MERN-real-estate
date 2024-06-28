// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-real-estate-c3473.firebaseapp.com",
  projectId: "mern-real-estate-c3473",
  storageBucket: "mern-real-estate-c3473.appspot.com",
  messagingSenderId: "575187256686",
  appId: "1:575187256686:web:22e0c509916cd1d9adad7f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);