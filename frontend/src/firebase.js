import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDpDUWtn5utpGfK2n2dUppaNHhcG6gOrJY",
  authDomain: "spot-d722d.firebaseapp.com",
  projectId: "spot-d722d",
  storageBucket: "spot-d722d.appspot.com",
  messagingSenderId: "51203580196",
  appId: "1:51203580196:web:a0fad91b9e9552196ad3b1",
  measurementId: "G-LZVWLX1YKL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { auth, provider };


