// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQ1RPE_N0dztyraKttlu-0N7lIv_4vRYA",
  authDomain: "netflixgpt-1703b.firebaseapp.com",
  projectId: "netflixgpt-1703b",
  storageBucket: "netflixgpt-1703b.firebasestorage.app",
  messagingSenderId: "915600467304",
  appId: "1:915600467304:web:b429fb3463d9222e42e2dd",
  measurementId: "G-P2N0KK2B5L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();