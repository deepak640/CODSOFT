import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: JSON.parse(localStorage.getItem("products")) || [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      state.cart.push({ ...action.payload, id: state.cart.length });
      localStorage.setItem("products", JSON.stringify(state.cart));
    },
    removeFromCart(state, action) {
      const index = state.cart.findIndex(
        (element) => element.id === action.payload.id
      );
      console.log("🚀 ~ removeFromCart ~ index:", index)
      state.cart.splice(index,1);
      localStorage.setItem("products", JSON.stringify(state.cart));
    },
  },
});
export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
