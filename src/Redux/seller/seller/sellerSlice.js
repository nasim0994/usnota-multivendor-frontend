import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: "",
  loggedSeller: undefined,
};

const sellerSlice = createSlice({
  name: "seller",
  initialState,
  reducers: {
    sellerLoggedIn: (state, action) => {
      state.token = action.payload.token;
      state.loggedSeller = action.payload.data;
    },
    sellerLogout: (state) => {
      state.token = "";
      localStorage.removeItem("shoppinghobe_seller_jwt");
      state.loggedSeller = undefined;
    },
  },
});

export const { sellerLoggedIn, sellerLogout } = sellerSlice.actions;
export default sellerSlice.reducer;
