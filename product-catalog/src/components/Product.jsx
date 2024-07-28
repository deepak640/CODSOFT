import React from "react";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../slice/cartSlice";
const Product = ({ product, cart }) => {
  const dispatch = useDispatch();
  const onAddToCart = () => {
    dispatch(addToCart(product));
  };
  const removeCart = () => {
    dispatch(removeFromCart(product));
  };
  return (
    <div className="product">
      <img src={product.imageUrl} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Category: {product.category}</p>
      <p>Price: {product.price}</p>
      {cart ? (
        <button className="add-to-cart" onClick={() => removeCart(product)}>
          Remove
        </button>
      ) : (
        <button className="add-to-cart" onClick={() => onAddToCart(product)}>
          Add to Cart
        </button>
      )}
    </div>
  );
};

export default Product;
