// src/app/lib/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5H9OH142GtGM7EwhKitCb_Y9jHVvs1bM",
  authDomain: "course-management-3073a.firebaseapp.com",
  projectId: "course-management-3073a",
  storageBucket: "course-management-3073a.appspot.com", // corrected
  messagingSenderId: "170439466208",
  appId: "1:170439466208:web:28237711a85df28849c485"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firebase services for use in components
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
