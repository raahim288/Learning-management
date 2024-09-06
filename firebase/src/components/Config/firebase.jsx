
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrtcDDKpw47kSnZ60FZAKQkcOg3sBdv1k",
  authDomain: "learning-management-9bd13.firebaseapp.com",
  projectId: "learning-management-9bd13",
  storageBucket: "learning-management-9bd13.appspot.com",
  messagingSenderId: "732472972378",
  appId: "1:732472972378:web:0bce1029a4388aee9fb463"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
const database = getFirestore(app);

export  {auth,database} ;






