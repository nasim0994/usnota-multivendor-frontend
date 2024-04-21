import { useSelector } from "react-redux";
import {
  useDeleteOrderMutation,
  useGetSellerOrderByIdQuery,
} from "../../../Redux/order/orderApi";
import { Link } from "react-router-dom";
import { GrView } from "react-icons/gr";
import { AiOutlineDelete } from "react-icons/ai";
import Swal from "sweetalert2";

export default function OrderTable() {
  const { loggedSeller } = useSelector((state) => state.seller);
  const sellerId = loggedSeller?.data?._id;
  const { data: orders } = useGetSellerOrderByIdQuery(sellerId);

  const [deleteOrder] = useDeleteOrderMutation();
  const handleDeleteOrder = async (id) => {
    const isConfirm = window.confirm("Are you sure delete is order?");
    if (isConfirm) {
      const res = await deleteOrder(id);
      if (res?.data?.success) {
        Swal.fire("", "Order delete success", "success");
      } else {
        Swal.fire("", "something went wrong", "error");
      }
    }
  };

  return (
    <div className="mt-4 relative overflow-x-auto">
      <table className="dashboard_table">
        <thead>
          <tr>
            <th>Order Id</th>
            <th>Total Products</th>
            <th>Payment Method</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {orders?.data?.map((order) => (
            <tr key={order?._id}>
              <td>#{order?.invoiceNumber}</td>
              <td>{order?.products?.length}</td>
              <td>{order?.paymentMethod}</td>
              <td>
                <div
                  className={`w-max border text-xs ${
                    order?.status === "pending"
                      ? "border-yellow-500"
                      : order?.status === "shipped"
                      ? "border-green-500"
                      : "border-red-500"
                  } rounded px-2 py-1`}
                >
                  {order?.status === "pending" ? (
                    <span className="text-yellow-500">{order?.status}</span>
                  ) : order?.status === "shipped" ? (
                    <span className="text-green-500">{order?.status}</span>
                  ) : (
                    <span className="text-red-500">{order?.status}</span>
                  )}
                </div>
              </td>
              <td className="flex gap-3">
                <Link
                  to={`/admin/order/${order?._id}`}
                  className=" hover:text-blue-700"
                >
                  <GrView />
                </Link>
                <button
                  onClick={() => handleDeleteOrder(order?._id)}
                  className="hover:text-red-700"
                >
                  <AiOutlineDelete />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
