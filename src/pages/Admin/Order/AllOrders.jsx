import { Link } from "react-router-dom";
import { useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { GrView } from "react-icons/gr";
import { FaMoneyBillTransfer } from "react-icons/fa6";

import { toast } from "react-toastify";
import {
  useDeleteOrderMutation,
  useGetAllOrdersQuery,
  useStatusUpdateByAdminMutation,
} from "../../../Redux/order/orderApi";

import Spinner from "../../../components/Spinner/Spinner";
import Pagination from "../../../components/Pagination/Pagination";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import Swal from "sweetalert2";
import { useTransferBalanceByAdminMutation } from "../../../Redux/payment/paymentApi";

export default function AllOrders() {
  const [currentPage, setCurrentPage] = useState(1);

  const [toggleOrder, setToggleOrder] = useState(null);
  const handelToggleOrder = (i) => {
    if (toggleOrder === i) {
      return setToggleOrder(null);
    }
    setToggleOrder(i);
  };

  const query = {};
  query["page"] = currentPage;
  query["limit"] = 10;

  const { data, isLoading, isError, error } = useGetAllOrdersQuery({
    ...query,
  });

  const [deleteOrder] = useDeleteOrderMutation();

  const [statusUpdateByAdmin] = useStatusUpdateByAdminMutation();

  const deleteOrderHandler = async (id) => {
    const isConfirm = window.confirm("Do you want to delete this order?");

    try {
      if (isConfirm) {
        const result = await deleteOrder(id);
        if (result?.data?.success) {
          toast.success(result?.data?.message);
        }
      }
    } catch (error) {
      toast.error(error?.data?.error);
    }
  };

  const handleChnageStatus = async (id, status) => {
    const isConfirm = window.confirm("Are You Sure Update Delivery Status?");

    if (isConfirm) {
      const res = await statusUpdateByAdmin({ id, status });

      if (res?.data?.success) {
        Swal.fire("", "Order status update success", "success");
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

  const [transferBalanceByAdmin] = useTransferBalanceByAdminMutation();

  const handleTransferBalance = async (sellerId, mainOrderId, amount) => {
    const isConfirm = window.confirm("Are You Sure Transfer Balance?");
    if (isConfirm) {
      const info = {
        mainOrderId,
        amount,
      };
      const res = await transferBalanceByAdmin({ sellerId, info });

      if (res?.data?.success) {
        Swal.fire("", "Balance Transfer success", "success");
        setTimeout(() => {
          location.reload();
        }, 500);
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

  let content = null;
  if (isLoading) {
    return (content = <Spinner />);
  }
  if (!isLoading && isError) {
    content = <p>{error.error}</p>;
  }
  if (!isLoading && !isError && data?.data?.length > 0) {
    content = data?.data?.map((order, i) => (
      <>
        <tr key={order?._id}>
          <td>#{order?.invoiceNumber}</td>
          <td>{order?.createdAt?.split("T")[0]}</td>
          <td>{order?.paymentMethod}</td>
          <td>{order?.totalPrice} tk</td>
          <td>
            <select
              className={`text-sm border rounded px-2 py-1 outline-none ${
                order?.status == "pending"
                  ? "text-yellow-500 border-yellow-500"
                  : order?.status == "processing"
                  ? "text-indigo-400 border-indigo-400"
                  : order?.status == "shipped"
                  ? "text-green-500 border-green-500"
                  : "text-red-500 border-red-500"
              }`}
              onChange={(e) => handleChnageStatus(order?._id, e.target.value)}
              defaultValue={order?.status}
            >
              <option value="pending" className="text-yellow-500">
                Pending
              </option>

              <option value="processing" className="text-indigo-400">
                Processing
              </option>

              <option value="shipped" className="text-green-500">
                Shipped
              </option>

              <option value="delivered" className="text-red-500">
                Delivered
              </option>
            </select>
          </td>
          <td>
            <div className="flex gap-3 items-center">
              <Link
                to={`/admin/order/${order?._id}`}
                className=" hover:text-blue-700"
              >
                <GrView />
              </Link>

              <button
                onClick={() => deleteOrderHandler(order?._id)}
                className="hover:text-red-700"
              >
                <AiOutlineDelete />
              </button>

              <button onClick={() => handelToggleOrder(i)}>
                <MdOutlineKeyboardArrowDown className="text-lg" />
              </button>
            </div>
          </td>
        </tr>

        {order?.products?.map((sellerOrder) => {
          let total = 0;
          sellerOrder?.products?.forEach((product) => {
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
            <tr
              key={sellerOrder?._id}
              className={`${toggleOrder === i ? "table-row" : "hidden"}`}
            >
              <td className="bg-gray-200">{sellerOrder?.sellerId?.shopName}</td>
              <td className="bg-gray-200">''</td>
              <td className="bg-gray-200">''</td>
              <td className="bg-gray-200">{total} tk</td>
              <td className="bg-gray-200 ">
                <p
                  className={`text-sm ${
                    sellerOrder?.status == "pending"
                      ? "text-yellow-500"
                      : sellerOrder?.status == "processing"
                      ? "text-indigo-400"
                      : "text-green-500"
                  }`}
                >
                  {sellerOrder?.status}
                </p>
              </td>
              <td className="bg-gray-200">
                {order?.status == "delivered" && !sellerOrder?.paid && (
                  <button
                    className="tooltip tooltip-bottom"
                    data-tip="Transfer Balance"
                    onClick={() =>
                      handleTransferBalance(
                        sellerOrder?.sellerId?._id,
                        order?._id,
                        total
                      )
                    }
                  >
                    <FaMoneyBillTransfer className="text-xl" />
                  </button>
                )}
              </td>
            </tr>
          );
        })}
      </>
    ));
  }

  return (
    <div className="relative overflow-x-auto shadow-lg">
      <table className="dashboard_table">
        <thead>
          <tr>
            <th>Order Id</th>
            <th>Date</th>
            <th>PAYMENT METHOD</th>
            <th>Total Price</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{content}</tbody>
      </table>

      {data?.data?.length > 10 && (
        <Pagination
          pages={data?.meta?.pages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      )}
    </div>
  );
}
