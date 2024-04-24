import { apiSlice } from "../../api/apiSlice";

export const sellerMobileAppApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getSellerMobileApp: builder.query({
      query: () => ({
        url: "/seller-mobileApp",
      }),
      providesTags: ["sellerMobileApp"],
    }),

    addSellerMobileApp: builder.mutation({
      query: (formData) => ({
        url: `/seller-mobileApp/add`,
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["sellerMobileApp"],
    }),

    updateSellerMobileApp: builder.mutation({
      query: ({ id, formData }) => ({
        url: `/seller-mobileApp/update/${id}`,
        method: "PATCH",
        body: formData,
      }),
      invalidatesTags: ["sellerMobileApp"],
    }),
  }),
});

export const {
  useGetSellerMobileAppQuery,
  useAddSellerMobileAppMutation,
  useUpdateSellerMobileAppMutation,
} = sellerMobileAppApi;
