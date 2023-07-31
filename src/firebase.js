// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQMfee3aadZ3ZZ3g0OrkhvmGUYDz_OHds",
  authDomain: "hotel-booking-app-3e176.firebaseapp.com",
  projectId: "hotel-booking-app-3e176",
  storageBucket: "hotel-booking-app-3e176.appspot.com",
  messagingSenderId: "459530629489",
  appId: "1:459530629489:web:b766cfa44cdf2d541186d0",
  measurementId: "G-F3QSDK42NB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { auth, provider };