import { sellerApiSlice } from "../../api/sellerApiSlice";
import { sellerLoggedIn } from "./sellerSlice";

export const sellerApi = sellerApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    sellerRegister: builder.mutation({
      query: (userInfo) => ({
        url: "/seller/register",
        method: "POST",
        body: userInfo,
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
            localStorage.setItem("multivendor_seller_jwt", result?.data?.token);
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
        url: "/seller/all-seller",
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
  }),
});

export const {
  useSellerRegisterMutation,
  useSellerLoginMutation,
  useSellerByIdQuery,
} = sellerApi;
