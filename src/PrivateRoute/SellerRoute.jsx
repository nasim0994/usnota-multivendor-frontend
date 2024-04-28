import { Navigate, useLocation } from "react-router-dom";
import Spinner from "../components/Spinner/Spinner";
import { useSelector } from "react-redux";

export default function SellerRoute({ children }) {
  const { loggedSeller } = useSelector((state) => state.seller);
  const location = useLocation();
  const token = localStorage.getItem("shoppinghobe_seller_jwt");
  let seller = loggedSeller?.data?.role === "seller";

  if (!loggedSeller?.success && !token) {
    return <Navigate to="/seller" state={{ from: location }} replace />;
  }

  if (!seller) {
    return <Navigate to="/seller" state={{ from: location }} replace />;
  }

  if (loggedSeller?.success && seller) {
    return children;
  }

  if (!loggedSeller?.success || !token) {
    return <Spinner />;
  }

  return <Spinner></Spinner>;
}
