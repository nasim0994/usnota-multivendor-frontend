import { apiSlice } from "../../api/apiSlice";

export const whySellHereApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getWhySellHere: builder.query({
      query: () => ({
        url: "/why-sell-here",
      }),
      providesTags: ["whySellHereApi"],
    }),

    getWhySellHereById: builder.query({
      query: (id) => ({
        url: `/why-sell-here/${id}`,
      }),
      providesTags: ["whySellHereApi"],
    }),

    addWhySellHere: builder.mutation({
      query: (formData) => ({
        url: `/why-sell-here/add`,
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["whySellHereApi"],
    }),

    updateWhySellHere: builder.mutation({
      query: ({ id, formData }) => ({
        url: `/why-sell-here/update/${id}`,
        method: "PATCH",
        body: formData,
      }),
      invalidatesTags: ["whySellHereApi"],
    }),

    deleteWhySellHere: builder.mutation({
      query: (id) => ({
        url: `/why-sell-here/delete/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["whySellHereApi"],
    }),
  }),
});

export const {
  useGetWhySellHereQuery,
  useGetWhySellHereByIdQuery,
  useAddWhySellHereMutation,
  useUpdateWhySellHereMutation,
  useDeleteWhySellHereMutation,
} = whySellHereApi;
