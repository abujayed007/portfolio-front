// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSjPIGaRn89ryP7g_idLG6Xba8_m2H3b0",
  authDomain: "portfolio-d95c5.firebaseapp.com",
  projectId: "portfolio-d95c5",
  storageBucket: "portfolio-d95c5.appspot.com",
  messagingSenderId: "626005728437",
  appId: "1:626005728437:web:4d7128a09f249b439632fc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth