import { sellerApiSlice } from "../../api/sellerApiSlice";

export const sellerProfileApi = sellerApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    updateSellerProfileLogo: builder.mutation({
      query: ({ sellerId, formData }) => ({
        url: `/seller/update/logo/${sellerId}`,
        method: "PATCH",
        body: formData,
      }),
      invalidatesTags: ["seller"],
    }),

    updateSellerBanner: builder.mutation({
      query: ({ sellerId, formData }) => ({
        url: `/seller/update/banner/${sellerId}`,
        method: "PATCH",
        body: formData,
      }),
      invalidatesTags: ["seller"],
    }),

    updateSellerProfileInfo: builder.mutation({
      query: ({ sellerId, profileInfo }) => ({
        url: `/seller/update/profileInfo/${sellerId}`,
        method: "PATCH",
        body: profileInfo,
      }),
      invalidatesTags: ["seller"],
    }),
  }),
});

export const {
  useUpdateSellerProfileLogoMutation,
  useUpdateSellerBannerMutation,
  useUpdateSellerProfileInfoMutation,
} = sellerProfileApi;
