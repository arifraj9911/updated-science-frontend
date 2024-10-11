// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_APIKEY,
//   authDomain: import.meta.env.VITE_AUTHDOMAIN,
//   projectId: import.meta.env.VITE_PROJECTID,
//   storageBucket: import.meta.env.VITE_STORAGEBUCKET,
//   messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
//   appId: import.meta.env.VITE_APPID,
// };
const firebaseConfig = {
  apiKey: "AIzaSyBvtfKoTKrCyqnbHrR3oMN5XIUKMY-Ge9U",
  authDomain: "science-academy-21760.firebaseapp.com",
  projectId: "science-academy-21760",
  storageBucket: "science-academy-21760.appspot.com",
  messagingSenderId: "237607741543",
  appId: "1:237607741543:web:2b9a6344834adbf56f8cc2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
