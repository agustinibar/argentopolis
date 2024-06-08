
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAR5jmlJVC8nibvWv-ER-Conp1eUheORYE",
  authDomain: "argentopolis-31d95.firebaseapp.com",
  projectId: "argentopolis-31d95",
  storageBucket: "argentopolis-31d95.appspot.com",
  messagingSenderId: "252153846441",
  appId: "1:252153846441:web:4e0d658ae53306189b27b8",
  measurementId: "G-6BYZYFP83P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
const analytics = getAnalytics(app);