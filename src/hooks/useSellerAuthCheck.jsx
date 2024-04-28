import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useJwt } from "react-jwt";
import { sellerLoggedIn } from "../Redux/seller/seller/sellerSlice";

export default async function useSellerAuthCheck() {
  const dispatch = useDispatch();
  const [sellerAuthChecked, setSellerAuthChecked] = useState(false);
  const token = localStorage?.getItem("usnota_seller_jwt");
  const { isExpired } = useJwt(token);
  if (isExpired) {
    localStorage.removeItem("usnota_seller_jwt");
  }

  useEffect(() => {
    if (token) {
      fetch(`${import.meta.env.VITE_BACKEND_URL}/seller/me`, {
        headers: {
          authorization: `bearer ${token}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data?.success) {
            dispatch(
              sellerLoggedIn({
                token: token,
                data: data,
              })
            );
          }
        })
        .finally(() => {
          setSellerAuthChecked(true);
        });
    }
  }, [dispatch, setSellerAuthChecked, token]);

  return sellerAuthChecked;
}
