// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const {
  REACT_APP_API_KEY,
  REACT_APP_DOMAIN,
  REACT_APP_DB_URL,
  REACT_APP_ID,
  REACT_APP_BUCKET,
  REACT_APP_SENDERID,
  REACT_APP_APPID,
  REACT_APP_MID,
} = process.env;
console.log("🚀 ~ process.env:", process.env)
const firebaseConfig = {
  apiKey: REACT_APP_API_KEY,
  authDomain: REACT_APP_DOMAIN,
  databaseURL: REACT_APP_DB_URL,
  projectId: REACT_APP_ID,
  storageBucket: REACT_APP_BUCKET,
  messagingSenderId: REACT_APP_SENDERID,
  appId: REACT_APP_APPID,
  measurementId: REACT_APP_MID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
// Initialize Realtime Database and get a reference to the service
const database = getFirestore(app);

export { storage, database };
export default app;
