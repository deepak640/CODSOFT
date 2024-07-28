import React, { useState } from "react";
import { useSelector } from "react-redux";
import Product from "./Product";

const CartPage = () => {
  const { cart } = useSelector((state) => state.cart);

  // Calculate the total price
  const totalPrice = cart.reduce((acc, product) => acc + product.price * 1, 0);
  console.log("🚀 ~ CartPage ~ totalPrice:", totalPrice);

  return (
    <>
      <div className="product-list">
        {cart.length ? (
          cart.map((product, index) => (
            <Product key={index} product={product} cart={true} />
          ))
        ) : (
          <h1>No data available</h1>
        )}
      </div>
      <h2 align="right" style={{margin:"20px"}}>Total Price: ${totalPrice.toFixed(2)}</h2>
    </>
  );
};

export default CartPage;
