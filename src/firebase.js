import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyClM1m9z5LK5Ctf1O1OKrsnpKfC5I96w-U",
  authDomain: "xhatar-27dd3.firebaseapp.com",
  projectId: "xhatar-27dd3",
  storageBucket: "xhatar-27dd3.appspot.com",
  messagingSenderId: "556150907641",
  appId: "1:556150907641:web:07b1751dc3d126fe793828"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();