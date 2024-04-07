// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC551lMx0kIkjp5p4f8TzoQTjl5ZFT4b9c",
  authDomain: "dragon-news-reacts.firebaseapp.com",
  projectId: "dragon-news-reacts",
  storageBucket: "dragon-news-reacts.appspot.com",
  messagingSenderId: "1074057617706",
  appId: "1:1074057617706:web:55e64642b6c1834394be53"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;