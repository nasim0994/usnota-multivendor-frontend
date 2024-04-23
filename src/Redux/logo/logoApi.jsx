import { apiSlice } from "../api/apiSlice";

export const logoApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getMainLogo: builder.query({
      query: () => ({
        url: "/logo",
      }),
      providesTags: ["mainLogo"],
    }),

    updateMainLogo: builder.mutation({
      query: ({ id, formData }) => ({
        url: `/logo/update-logo/${id}`,
        method: "PATCH",
        body: formData,
      }),
      invalidatesTags: ["mainLogo"],
    }),

    addLogo: builder.mutation({
      query: (formData) => ({
        url: "/logo/add-logo",
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["mainLogo"],
    }),

    // Seller Logo
    addSellerLogo: builder.mutation({
      query: (formData) => ({
        url: "/logo/add-seller-logo",
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["sellerLogo"],
    }),

    updateSellerLogo: builder.mutation({
      query: ({ sellerId, formData }) => ({
        url: `/logo/update/seller-logo/${sellerId}`,
        method: "PATCH",
        body: formData,
      }),
      invalidatesTags: ["sellerLogo"],
    }),

    getSellerLogo: builder.query({
      query: () => ({
        url: "/logo/seller-logo",
      }),
      providesTags: ["sellerLogo"],
    }),
  }),
});

export const {
  useGetMainLogoQuery,
  useUpdateMainLogoMutation,
  useAddLogoMutation,

  useAddSellerLogoMutation,
  useUpdateSellerLogoMutation,
  useGetSellerLogoQuery,
} = logoApi;
