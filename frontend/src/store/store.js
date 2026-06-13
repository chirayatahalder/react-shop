import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cartSlice";
import wishListSlice from "./slices/wishListSlice";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    wishlist: wishListSlice,
  },
});
