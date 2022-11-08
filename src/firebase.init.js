// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCS1c9lzEBsokuy442g1mV8zXx6-yfA-Oc",
  authDomain: "my-car-care-point-d8bcf.firebaseapp.com",
  projectId: "my-car-care-point-d8bcf",
  storageBucket: "my-car-care-point-d8bcf.appspot.com",
  messagingSenderId: "280872155641",
  appId: "1:280872155641:web:9a214a013c59bf92e32528"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
export default auth;
