// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC4U41YZD_fKChhuds3kYTp8AujukLx4ec",
  authDomain: "netflixgpt-aa864.firebaseapp.com",
  projectId: "netflixgpt-aa864",
  storageBucket: "netflixgpt-aa864.appspot.com",
  messagingSenderId: "643929510509",
  appId: "1:643929510509:web:5a67e4f5778d09fc73e564",
  measurementId: "G-D4FGBVRPQ0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
