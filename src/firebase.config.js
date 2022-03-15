import { initializeApp } from "firebase/app";
import {getFireStore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB_5MyYoHoUNtcE83CycUSMF8mgbWNzr84",
  authDomain: "parks-improvement-project.firebaseapp.com",
  projectId: "parks-improvement-project",
  storageBucket: "parks-improvement-project.appspot.com",
  messagingSenderId: "22595825188",
  appId: "1:22595825188:web:14ee01892eee266a75f2b1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFireStore();