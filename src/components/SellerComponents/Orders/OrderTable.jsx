import { useDeleteOrderMutation } from "../../../Redux/order/orderApi";
import { Link } from "react-router-dom";
import { GrView } from "react-icons/gr";
import { AiOutlineDelete } from "react-icons/ai";
import Swal from "sweetalert2";

export default function OrderTable({ orders }) {
  const [deleteOrder] = useDeleteOrderMutation();

  // const handleDeleteOrder = async (id) => {
  //   const isConfirm = window.confirm("Are you sure delete is order?");
  //   if (isConfirm) {
  //     const res = await deleteOrder(id);
  //     if (res?.data?.success) {
  //       Swal.fire("", "Order delete success", "success");
  //     } else {
  //       Swal.fire("", "something went wrong", "error");
  //     }
  //   }
  // };

  console.log(orders);

  return (
    <div className="mt-4 relative overflow-x-auto">
      <table className="dashboard_table bg-base-100 shadow">
        <thead>
          <tr>
            <th>Order Id</th>
            <th>Date</th>
            <th>Payment Method</th>
            <th>Total Amount</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {orders?.map((order) => {
            let total = 0;
            order?.products?.forEach((product) => {
              if (product?.productId?.variants?.length > 0) {
                const variant = product?.productId?.variants?.find(
                  (variant) =>
                    variant?.color == product?.color &&
                    variant?.size == product?.size
                );
                if (variant) {
                  total +=
                    variant?.sellingPrice * product?.quantity -
                    parseInt(
                      (variant?.sellingPrice * product?.productId?.discount) /
                        100
                    );
                }
              } else {
                total +=
                  product?.productId?.sellingPrice * product?.quantity -
                  parseInt(
                    (product?.productId?.sellingPrice *
                      product?.productId?.discount) /
                      100
                  );
              }
            });

            return (
              <tr key={order?._id}>
                <td>{order?._id}</td>
                <td>{order?.createdAt?.split("T")[0]}</td>
                <td>{order?.mainOrderId?.paymentMethod}</td>
                <td>{total} tk</td>
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
                <td>
                  <div className="flex gap-3">
                    <Link
                      to={`/seller/order/${order?._id}`}
                      className=" hover:text-blue-700"
                    >
                      <GrView />
                    </Link>
                    {/* <button
                  onClick={() => handleDeleteOrder(order?._id)}
                  className="hover:text-red-700"
                >
                  <AiOutlineDelete />
                </button> */}
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
