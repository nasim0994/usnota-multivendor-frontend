import { apiSlice } from "../../api/apiSlice";

export const sellerPageApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllSellerFAQ: builder.query({
      query: () => ({
        url: "/seller-faq/all",
      }),
      providesTags: ["sellerFAQ"],
    }),

    getSellerFAQById: builder.query({
      query: (id) => ({
        url: `/seller-faq/single/${id}`,
      }),
      providesTags: ["sellerFAQ"],
    }),

    addSellerFAQ: builder.mutation({
      query: (info) => ({
        url: `/seller-faq/add`,
        method: "POST",
        body: info,
      }),
      invalidatesTags: ["sellerFAQ"],
    }),

    updateSellerFAQ: builder.mutation({
      query: ({ id, info }) => ({
        url: `/seller-faq/update/${id}`,
        method: "PATCH",
        body: info,
      }),
      invalidatesTags: ["sellerFAQ"],
    }),

    deleteSellerFAQ: builder.mutation({
      query: (id) => ({
        url: `/seller-faq/delete/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["sellerFAQ"],
    }),
  }),
});

export const {
  useGetAllSellerFAQQuery,
  useGetSellerFAQByIdQuery,
  useAddSellerFAQMutation,
  useUpdateSellerFAQMutation,
  useDeleteSellerFAQMutation,
} = sellerPageApi;
