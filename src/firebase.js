import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyBe8WSGZyBIAlF4VjLB3lgtFe9v5UwK3MU",
  authDomain: "reactdboard.firebaseapp.com",
  projectId: "reactdboard",
  storageBucket: "reactdboard.appspot.com",
  messagingSenderId: "88352684367",
  appId: "1:88352684367:web:d053409ff4781226e22d3a",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth();
