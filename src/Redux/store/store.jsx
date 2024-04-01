import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../api/apiSlice";
import cartSlice from "../cart/cartSlice";
import userSlice from "../user/userSlice";
import wishlistSlice from "../wishlist/wishlistSlice";
import sellerSlice from "../seller/seller/sellerSlice";
import { sellerApiSlice } from "../api/sellerApiSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    seller: sellerSlice,
    cart: cartSlice,
    wishlist: wishlistSlice,
    [apiSlice.reducerPath]: apiSlice.reducer,
    [sellerApiSlice.reducerPath]: sellerApiSlice.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      apiSlice.middleware,
      sellerApiSlice.middleware
    ),
});
