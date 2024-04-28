import { Navigate, useLocation } from "react-router-dom";
import Spinner from "../components/Spinner/Spinner";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";

const AdminRoute = ({ children }) => {
  const { loggedUser } = useSelector((state) => state.user);
  const location = useLocation();
  const token = localStorage.getItem("usnota_jwt");
  let admin =
    loggedUser?.data?.role === "admin" ||
    loggedUser?.data?.role === "superAdmin";

  if (!loggedUser?.success && !token) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (!admin) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (loggedUser?.success && admin) {
    return children;
  }

  if (!loggedUser?.success || !token) {
    return <Spinner />;
  }

  return <Spinner></Spinner>;
};

export default AdminRoute;
