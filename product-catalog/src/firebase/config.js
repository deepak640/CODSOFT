// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import { getStorage } from "firebase/storage";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCDd8ndZmjjaO2r9tV2evCKZH7UfbIFEro",
  authDomain: "product-catelog-6a7c1.firebaseapp.com",
  databaseURL: "https://product-catelog-6a7c1-default-rtdb.firebaseio.com",
  projectId: "product-catelog-6a7c1",
  storageBucket: "product-catelog-6a7c1.appspot.com",
  messagingSenderId: "182623637367",
  appId: "1:182623637367:web:409fa9f3eb1d150fda1b72",
  measurementId: "G-JF8JX5JQJT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
// Initialize Realtime Database and get a reference to the service
const database = getFirestore(app);

export {storage,database };
export default app;
