import { RouterProvider } from "react-router-dom";
import { routes } from "./Routes/Routes";
import useAuthCheck from "./hooks/useAuthCheck";
import useSellerAuthCheck from "./hooks/useSellerAuthCheck";
import Spinner from "./components/Spinner/Spinner";

export default function App() {
  const authChecked = useAuthCheck();
  const sellerAuthChecked = useSellerAuthCheck();

  if (!authChecked || !sellerAuthChecked) {
    return <Spinner />;
  }

  return <RouterProvider router={routes}></RouterProvider>;
}
