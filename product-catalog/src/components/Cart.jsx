import React from "react";
import { useSelector } from "react-redux";
import Product from "./Product";

const CartPage = () => {
  const cart = useSelector((state) => state.cart.cart);

  return (
    <div className="product-list">
      {cart.length ? (
        cart.map((product, index) => (
          <Product key={index} product={product} cart={true} />
        ))
      ) : (
        <h1>No data available</h1>
      )}
    </div>
  );
};

export default CartPage;
