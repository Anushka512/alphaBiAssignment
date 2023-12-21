// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
import { getFirestore, collection, doc, setDoc, deleteDoc, serverTimestamp , query} from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCvWfB4L_5nMrKcQ7Z8aAxTaCtulFw96Vw",
  authDomain: "alphabi-73ec2.firebaseapp.com",
  projectId: "alphabi-73ec2",
  storageBucket: "alphabi-73ec2.appspot.com",
  messagingSenderId: "539895811734",
  appId: "1:539895811734:web:c43ee9370cbfdacddb7cb7",
  measurementId: "G-XJBY4J5E6D"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);


export { auth, db,query};