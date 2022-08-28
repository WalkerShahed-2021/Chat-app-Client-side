// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBL3TFP3JbZhnHCu5CoGo6y7T90iSwZ5w4",
  authDomain: "landing-chat-app.firebaseapp.com",
  projectId: "landing-chat-app",
  storageBucket: "landing-chat-app.appspot.com",
  messagingSenderId: "614016034486",
  appId: "1:614016034486:web:bd8a655dbf27efbce72817"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;