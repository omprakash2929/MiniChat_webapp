
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use


// const firebaseConfig = {
//   apiKey: "AIzaSyBPN5BumVOdNX7JNu8PLXvXQol6-Qu3g9A",
//   authDomain: "minichat-47712.firebaseapp.com",
//   projectId: "minichat-47712",
//   storageBucket: "minichat-47712.appspot.com",
//   messagingSenderId: "1000180505183",
//   appId: "1:1000180505183:web:bf61b3d1c469e54ea1d9ea",
//   measurementId: "G-J5Y6QWBDVP"
// };
const firebaseConfig = {
  apiKey: "AIzaSyBFvpyBv7A2_4L9ToKQjZpGxzJ0nQ7GB8U",
  authDomain: "webchat-406c1.firebaseapp.com",
  projectId: "webchat-406c1",
  storageBucket: "webchat-406c1.appspot.com",
  messagingSenderId: "1011856920611",
  appId: "1:1011856920611:web:e153fe6b762314fa8ba196"
};



export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();