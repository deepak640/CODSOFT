// firebase/database.js
import {
  ref as storageRef,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage";
import { database, storage } from "./config";
import { collection, addDoc, getDocs } from "firebase/firestore";
const collectionRef = collection(database, "products");
export const addProduct = async (productData, file) => {
  try {
    // Create a storage reference for the file
    const fileRef = storageRef(storage, `images/${file.name}`);

    // Upload the file to Firebase Storage
    const snapshot = await uploadBytes(fileRef, file);

    // Get the URL of the uploaded file
    const fileURL = await getDownloadURL(snapshot.ref);

    // Add the file URL to product data
    const productDataWithImage = {
      ...productData,
      imageUrl: fileURL,
    };

    // Push the product data to the Realtime Database
    const res = await addDoc(collectionRef, productDataWithImage);
    console.log(res);
  } catch (error) {
    console.log(error);
    console.error("Error adding product:", error);
    throw error;
  }
};

export const getProducts = async () => {
  try {
    const {docs} = await getDocs(collectionRef);
    return docs
  } catch (error) {
    console.log(error);
  }
};
