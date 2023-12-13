
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-qgHs8CJyXWl3ncHz8xYXY-4E37kzjZE",
  authDomain: "datazen-website.firebaseapp.com",
  projectId: "datazen-website",
  storageBucket: "datazen-website.appspot.com",
  messagingSenderId: "932520053833",
  appId: "1:932520053833:web:88bde464df61a136da8398",
  measurementId: "G-7RF84PSTVZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
