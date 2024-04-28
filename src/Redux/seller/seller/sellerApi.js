import { sellerApiSlice } from "../../api/sellerApiSlice";
import { sellerLoggedIn } from "./sellerSlice";

export const sellerApi = sellerApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    sellerRegister: builder.mutation({
      query: (sellerInfo) => ({
        url: "/seller/register",
        method: "POST",
        body: sellerInfo,
      }),
    }),

    sellerLogin: builder.mutation({
      query: (loginInfo) => ({
        url: "/seller/login",
        method: "POST",
        body: loginInfo,
      }),

      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;

          if (result?.data?.success) {
            localStorage.setItem("usnota_seller_jwt", result?.data?.token);
            dispatch(
              sellerLoggedIn({
                token: result?.data?.token,
                data: result?.data,
              })
            );
          }
        } catch (error) {
          // Do not any thing , handel error from ui
        }
      },
    }),

    // all Seller get
    allSellers: builder.query({
      query: () => ({
        url: "/seller/all-sellers",
      }),
      providesTags: ["seller"],
    }),

    // signle Seller get bt Id
    sellerById: builder.query({
      query: (id) => ({
        url: `/seller/${id}`,
      }),
      providesTags: ["seller"],
    }),

    // signle Seller get bt Id
    toggleVerify: builder.mutation({
      query: (id) => ({
        url: `/seller/toggle-verify/${id}`,
        method: "PUT",
      }),
      providesTags: ["seller"],
    }),

    // update info for verification
    updateInfoForVerify: builder.mutation({
      query: ({ id, formData }) => ({
        url: `/seller/update/verify/${id}`,
        method: "PATCH",
        body: formData,
      }),
      providesTags: ["seller"],
    }),
  }),
});

export const {
  useSellerRegisterMutation,
  useSellerLoginMutation,
  useSellerByIdQuery,
  useAllSellersQuery,
  useToggleVerifyMutation,
  useUpdateInfoForVerifyMutation,
} = sellerApi;
