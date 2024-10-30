// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAqMmZZBY60GmgczG5qjTo2iZgD9KZ8quQ",
  authDomain: "simple-blog-90c92.firebaseapp.com",
  projectId: "simple-blog-90c92",
  storageBucket: "simple-blog-90c92.appspot.com",
  messagingSenderId: "1072201600947",
  appId: "1:1072201600947:web:36e16c2633c8037a7cc5c6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)