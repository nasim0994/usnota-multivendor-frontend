import { apiSlice } from "../api/apiSlice";

export const paymentApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createPaymentRequest: builder.mutation({
      query: (info) => ({
        url: "/payment-request/add",
        method: "POST",
        body: info,
      }),
      invalidatesTags: ["paymentRequest"],
    }),

    getAllPaymentRequest: builder.query({
      query: () => ({
        url: "/payment-request/all",
      }),
      providesTags: ["paymentRequest"],
    }),

    getAllPaymentRequestBySellerId: builder.query({
      query: ({ sellerId, query }) => ({
        url: `/payment-request/seller/${sellerId}`,
        params: query,
      }),
      providesTags: ["paymentRequest"],
    }),

    transferBalanceByAdmin: builder.mutation({
      query: ({ sellerId, info }) => ({
        url: `/payment-request/transfer-balance/${sellerId}`,
        method: "PATCH",
        body: info,
      }),
      invalidatesTags: ["paymentRequest"],
    }),

    acceptRequestByAdmin: builder.mutation({
      query: ({ requestId, sellerId, amount }) => ({
        url: `/payment-request/accept-request/${requestId}/${sellerId}`,
        method: "PATCH",
        body: { amount },
      }),
      invalidatesTags: ["paymentRequest"],
    }),
  }),
});

export const {
  useCreatePaymentRequestMutation,
  useGetAllPaymentRequestQuery,
  useGetAllPaymentRequestBySellerIdQuery,
  useTransferBalanceByAdminMutation,
  useAcceptRequestByAdminMutation,
} = paymentApi;
