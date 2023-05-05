// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

console.log('environment variable', import.meta.env.VITE_apikey);
const firebaseConfig = {
  apiKey: "AIzaSyCKpW1KwlAQPAMAy86Egh3sv-eHDnbwi8k",
  authDomain: "afghan-cuisine-5c772.firebaseapp.com",
  projectId: "afghan-cuisine-5c772",
  storageBucket: "afghan-cuisine-5c772.appspot.com",
  messagingSenderId: "163071722022",
  appId: "1:163071722022:web:11cc1113294f277ea95ce7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;