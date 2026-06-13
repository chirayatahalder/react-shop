import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      let newItem = action.payload;

      let existingItem = state.find((u) => u.id === newItem.id);
      if (existingItem) {
        // console.log("Product exists, incrementing quantity");
        existingItem.quantity += 1;
      } else {
        // console.log("Product does not exist, adding to cart");
        state.push({ ...newItem, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      const itemIndex = state.findIndex((item) => item.id === action.payload);
      if (itemIndex !== -1) {
        state.splice(itemIndex, 1);
      }
    },
    increaseQuantity: (state, action) => {
      let item = state.find((u) => u.id === action.payload);
      if (item) {
        item.quantity += 1;
      }
    },
    decreaseQuantity: (state, action) => {
      let item = state.find((u) => u.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },
    setQuantity: (state, action) => {
      let { id, quantity } = action.payload;
      console.log(id, quantity);
    },
  },
});

// export actions
export const {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  setQuantity,
} = cartSlice.actions;

// exportreducer
export default cartSlice.reducer;
