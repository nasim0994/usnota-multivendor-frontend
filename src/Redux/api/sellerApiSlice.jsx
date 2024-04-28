import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const sellerApiSlice = createApi({
  reducerPath: "sellerApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BACKEND_URL,
    prepareHeaders: async (headers) => {
      const token = localStorage.getItem("usnota_seller_jwt");
      if (token) {
        headers.set("Authorization", `bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: () => ({}),
  tagTypes: ["seller", "product"],
});
