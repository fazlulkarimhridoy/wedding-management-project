// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLIju8qpHA7jobgxOWOyaH8GJkEChdHu0",
  authDomain: "wedding-management-websi-5a8dc.firebaseapp.com",
  projectId: "wedding-management-websi-5a8dc",
  storageBucket: "wedding-management-websi-5a8dc.appspot.com",
  messagingSenderId: "128938532923",
  appId: "1:128938532923:web:58b1e9a9b921361d2c7c1e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;