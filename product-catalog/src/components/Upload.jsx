// UploadPage.js
import React, { useState } from "react";
import { addProduct } from "../firebase/database";

function UploadPage() {
  const [productData, setProductData] = useState({
    name: "",
    price: "",
    description: "",
    category: "",
  });
  const [file, setFile] = useState(null);
  const handleChange = (e) => {
    setProductData({ ...productData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (file) {
      try {
        await addProduct(productData, file);
        alert("Product added successfully!");
      } catch (error) {
        console.error("Error adding product:", error);
        alert("Error adding product");
      }
    } else {
      alert("Please upload an image");
    }
  };

  return (
    <div className="upload-form-container">
      <form className="upload-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Name"
          onChange={handleChange}
          required
        />

        <label htmlFor="price">Price</label>
        <input
          type="number"
          name="price"
          id="price"
          placeholder="Price"
          onChange={handleChange}
          required
        />

        <label htmlFor="description">Description</label>
        <textarea
          name="description"
          id="description"
          placeholder="Description"
          onChange={handleChange}
          required
        />

        <label htmlFor="category">Category</label>
        <input
          type="text"
          name="category"
          id="category"
          placeholder="Category"
          onChange={handleChange}
          required
        />

        <label htmlFor="file">Image</label>
        <input type="file" id="file" onChange={handleFileChange} required />

        <button type="submit">Upload Product</button>
      </form>
    </div>
  );
}

export default UploadPage;
