// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGCUFsgZQeX7kSMOnaGj5NFy4Tcj3oTVM",
  authDomain: "munshi-digital-sign.firebaseapp.com",
  projectId: "munshi-digital-sign",
  storageBucket: "munshi-digital-sign.appspot.com",
  messagingSenderId: "493830668326",
  appId: "1:493830668326:web:f7324441b292907f2226e7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;