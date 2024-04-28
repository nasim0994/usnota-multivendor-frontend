import { apiSlice } from "../api/apiSlice";

export const orderApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getMyOrders: builder.query({
      query: (userId) => ({
        url: `/order/user-orders/${userId}`,
      }),
      providesTags: ["order"],
    }),
    getAllOrders: builder.query({
      query: (query) => ({
        url: "/order/all-orders",
        method: "GET",
        params: query,
      }),
      providesTags: ["order"],
    }),
    getOrderById: builder.query({
      query: (id) => ({
        url: `order/${id}`,
      }),
      providesTags: ["order"],
    }),
    addOrder: builder.mutation({
      query: (order) => ({
        url: `/order/post-order`,
        method: "POST",
        body: order,
      }),
      invalidatesTags: ["order"],
    }),
    deleteOrder: builder.mutation({
      query: (id) => ({
        url: `/order/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["order"],
    }),

    statusUpdateByAdmin: builder.mutation({
      query: ({ id, status }) => ({
        url: `/order/admin/update-status/${id}`,
        method: "PATCH",
        body: { status },
      }),
      invalidatesTags: ["order"],
    }),

    initSslPayment: builder.mutation({
      query: (order) => ({
        url: `/payment/ssl-payment`,
        method: "POST",
        body: order,
      }),
      invalidatesTags: ["order"],
    }),

    getOrderByTransactionId: builder.query({
      query: (transactionId) => ({
        url: `/order/transaction/${transactionId}`,
      }),
      providesTags: ["order"],
    }),

    //-----------Seller
    getSellerOrderById: builder.query({
      query: ({ sellerId, query }) => ({
        url: `/order/seller-orders/${sellerId}`,
        method: "GET",
        params: query,
      }),
      providesTags: ["order"],
    }),

    getSellerOrderByOrderId: builder.query({
      query: (id) => ({
        url: `/order/seller-order/single/${id}`,
        method: "GET",
      }),
      providesTags: ["order"],
    }),

    getSellerSeparateOrderById: builder.query({
      query: ({ sellerId, query }) => ({
        url: `/order/orders-separate-seller/${sellerId}`,
        method: "GET",
        params: query,
      }),
      providesTags: ["order"],
    }),

    sellerOrderStatusUpdate: builder.mutation({
      query: ({ id, info }) => ({
        url: `/order/seller/update-status/${id}`,
        method: "PATCH",
        body: info,
      }),
      invalidatesTags: ["order"],
    }),
  }),
});

export const {
  useGetMyOrdersQuery,
  useGetAllOrdersQuery,
  useAddOrderMutation,
  useGetOrderByIdQuery,
  useDeleteOrderMutation,
  useStatusUpdateByAdminMutation,
  useInitSslPaymentMutation,
  useGetOrderByTransactionIdQuery,

  useGetSellerOrderByIdQuery,
  useGetSellerOrderByOrderIdQuery,
  useGetSellerSeparateOrderByIdQuery,
  useSellerOrderStatusUpdateMutation,
} = orderApi;
