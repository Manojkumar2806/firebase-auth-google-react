import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAFRFKnkaGDnAq035ZOUbKxaO5IwVXguOI",
  authDomain: "fir-auth-12901.firebaseapp.com",
  projectId: "fir-auth-12901",
  storageBucket: "fir-auth-12901.firebasestorage.app",
  messagingSenderId: "66411081625",
  appId: "1:66411081625:web:1e8673f203a1ec6836ad08",
  measurementId: "G-DNBFQ02DR5",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;
