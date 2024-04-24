import { apiSlice } from "../../api/apiSlice";

export const sellerPageApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getSellerBanner: builder.query({
      query: () => ({
        url: "/seller-banner",
      }),
      providesTags: ["sellerBanner"],
    }),

    addSellerBanner: builder.mutation({
      query: (formData) => ({
        url: `/seller-banner/add`,
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["sellerBanner"],
    }),

    updateSellerBanner: builder.mutation({
      query: ({ id, formData }) => ({
        url: `/seller-banner/update/${id}`,
        method: "PATCH",
        body: formData,
      }),
      invalidatesTags: ["sellerBanner"],
    }),
  }),
});

export const {
  useGetSellerBannerQuery,
  useAddSellerBannerMutation,
  useUpdateSellerBannerMutation,
} = sellerPageApi;
