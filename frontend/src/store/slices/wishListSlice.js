import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const wishListSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    toggleItem: (state, action) => {
      const existingItem = state.some((u) => u.id === action.payload.id);
      if (existingItem) {
        const existingItemIndex = state.find((u) => u.id === existingItem.id);
        if (existingItemIndex !== -1) {
          state.splice(existingItemIndex, 1);
        }
      } else {
        state.push(action.payload);
      }
    },
    clearWishList: () => {},
  },
});

// export actions
export const { toggleItem, clearWishList } = wishListSlice.actions;

// export reducer
export default wishListSlice.reducer;
