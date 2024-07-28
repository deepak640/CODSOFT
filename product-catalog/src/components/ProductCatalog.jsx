// src/components/ProductCatalog.js
import React from "react";
import { useQuery } from "react-query";
import { getProducts } from "../firebase/database";
import Product from "./Product";
import Lottie from "lottie-react";
function ProductCatalog() {
  const { data, error, isLoading } = useQuery(
    "products", // key
    async () => {
      const data = await getProducts();
      return data.map((item) => item.data());
    }
  );

  if (isLoading)
    return (
      <div className="lottie-loading">
        <Lottie
          animationData={require("../assets/Loading.json")}
          style={{ width: 200, height: 200 }}
        />
      </div>
    );
  if (error) return <div>Error: {error.message}</div>;

  return (
      <div className="product-list">
        {data ? (
          data.map((product, index) => (
            <Product key={index} product={product} />
          ))
        ) : (
          <h1>No data available</h1>
        )}
      </div>
  );
}

export default ProductCatalog;
