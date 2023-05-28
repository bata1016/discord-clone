import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { GoogleAuthProvider, getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDLDrI1NN7SQHZQjIlQGuXZdidU0TsE6x8",
  authDomain: "discord-clone-116a7.firebaseapp.com",
  projectId: "discord-clone-116a7",
  storageBucket: "discord-clone-116a7.appspot.com",
  messagingSenderId: "825609044595",
  appId: "1:825609044595:web:1edce4b275adb221ed6006"
};

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const auth = getAuth(app)
const prvider = new GoogleAuthProvider()

export {db, auth, prvider};


