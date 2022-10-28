// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyArwYAg4O8zGp4YZU37p-31SDSAvt8xexY",
  authDomain: "algotest-b8239.firebaseapp.com",
  projectId: "algotest-b8239",
  storageBucket: "algotest-b8239.appspot.com",
  messagingSenderId: "604395395262",
  appId: "1:604395395262:web:b93ae727e49c574bad26ef",
  measurementId: "G-ZDTR21XXFC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
