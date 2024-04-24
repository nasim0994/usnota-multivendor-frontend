import { apiSlice } from "../api/apiSlice";

export const productApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getFeaturedProducts: builder.query({
      query: (query) => ({
        url: `/product/featured-products`,
        method: "GET",
        params: query,
      }),
      providesTags: ["product", "review"],
    }),

    getPopularProducts: builder.query({
      query: () => ({
        url: `/product/popular-products`,
        method: "GET",
      }),
      providesTags: ["product", "review"],
    }),

    getAllProducts: builder.query({
      query: (query) => ({
        url: `/product/all-products`,
        method: "GET",
        params: query,
      }),
      providesTags: ["product", "review"],
    }),

    getProductById: builder.query({
      query: (id) => ({
        url: `/product/${id}`,
      }),
      providesTags: ["product", "review"],
    }),

    getProductBySlug: builder.query({
      query: (slug) => ({
        url: `/product/getbyslug/${slug}`,
      }),
      providesTags: ["product", "review"],
    }),

    getProductBySellerId: builder.query({
      query: ({ id, query }) => ({
        url: `/product/seller/${id}`,
        params: query,
      }),

      providesTags: ["product", "review", "seller"],
    }),

    addProduct: builder.mutation({
      query: (formData) => ({
        url: `/product/add-product`,
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["product", "review"],
    }),

    updateProduct: builder.mutation({
      query: ({ id, formData }) => ({
        url: `/product/update-product/${id}`,
        method: "PATCH",
        body: formData,
      }),
      invalidatesTags: ["product", "review"],
    }),

    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `/product/delete/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["product", "review"],
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useGetFeaturedProductsQuery,
  useGetProductByIdQuery,
  useGetProductBySlugQuery,
  useAddProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
  useGetProductBySellerIdQuery,
  useGetPopularProductsQuery,
} = productApi;
