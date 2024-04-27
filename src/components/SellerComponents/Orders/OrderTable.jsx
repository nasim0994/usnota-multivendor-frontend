import {
  useDeleteOrderMutation,
  useSellerOrderStatusUpdateMutation,
} from "../../../Redux/order/orderApi";
import { Link } from "react-router-dom";
import { GrView } from "react-icons/gr";
import { AiOutlineDelete } from "react-icons/ai";
import Swal from "sweetalert2";
import { useState } from "react";

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

  const [sellerOrderStatusUpdate] = useSellerOrderStatusUpdateMutation();

  const handleChnageStatus = async (mainOrderId, sellerId, id, status) => {
    const isConfirm = window.confirm("Are You Sure Update Delivery Status?");

    const info = {
      status,
      mainOrderId,
      sellerId,
    };

    if (isConfirm) {
      const res = await sellerOrderStatusUpdate({ id, info });

      if (res?.data?.success) {
        Swal.fire("", "Order status ppdate success", "success");
      } else {
        Swal.fire(
          "",
          res?.error?.data?.error
            ? res?.error?.data?.error
            : "Something went wrong",
          "error"
        );
      }
    }
  };

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
                    parseInt(
                      variant?.sellingPrice -
                        (variant?.sellingPrice * product?.productId?.discount) /
                          100
                    ) * parseInt(product?.quantity);
                }
              } else {
                total +=
                  parseInt(
                    product?.productId?.sellingPrice -
                      (product?.productId?.sellingPrice *
                        product?.productId?.discount) /
                        100
                  ) * parseInt(product?.quantity);
              }
            });

            return (
              <tr key={order?._id}>
                <td>{order?._id}</td>
                <td>{order?.createdAt?.split("T")[0]}</td>
                <td>{order?.mainOrderId?.paymentMethod}</td>
                <td>{total} tk</td>
                <td>
                  <select
                    className={`text-sm border rounded px-2 py-1 outline-none ${
                      order?.status === "pending"
                        ? "text-yellow-500 border-yellow-500"
                        : order?.status === "processing"
                        ? "text-indigo-400 border-indigo-400"
                        : "text-green-500 border-green-500"
                    }`}
                    onChange={(e) =>
                      handleChnageStatus(
                        order?.mainOrderId?._id,
                        order?.sellerId,
                        order?._id,
                        e.target.value
                      )
                    }
                    defaultValue={order?.status}
                  >
                    <option value="pending" className="text-yellow-500">
                      Pending
                    </option>

                    <option value="processing" className="text-indigo-400">
                      Processing
                    </option>

                    <option value="warehouse" className="text-green-500">
                      Warehouse
                    </option>
                  </select>
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
