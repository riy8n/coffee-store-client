// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAFCelr6GpJbr4Bii3dCEN7OChquHDUzU4",
  authDomain: "coffee-store-app-ccd83.firebaseapp.com",
  projectId: "coffee-store-app-ccd83",
  storageBucket: "coffee-store-app-ccd83.firebasestorage.app",
  messagingSenderId: "391181190609",
  appId: "1:391181190609:web:9a6d894ae9cdc9f11f0cf0"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export  const auth = getAuth(app);