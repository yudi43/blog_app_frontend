import firebase from "firebase/app";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBqpXXi9-fIOTg7oIR5EPCJQZczxQwVUYg",
  authDomain: "blog-app-3c502.firebaseapp.com",
  projectId: "blog-app-3c502",
  storageBucket: "blog-app-3c502.appspot.com",
  messagingSenderId: "1054938801750",
  appId: "1:1054938801750:web:c0452bab4aafd743defdf7",
  measurementId: "G-ERSPTLY5M3",
};
// Initialize Firebase
export const firebase_app = firebase.initializeApp(firebaseConfig);
