import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAlSU0XnrYbqUrezkivn7I3X-lVIUilanA",
  authDomain: "remotelelo-4bf98.firebaseapp.com",
  projectId: "remotelelo-4bf98",
  storageBucket: "remotelelo-4bf98.appspot.com",
  messagingSenderId: "503472852878",
  appId: "1:503472852878:web:be4b46d82da8970a789edf",
  measurementId: "G-56V293V2WJ"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, app };