import { useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { GrView } from "react-icons/gr";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import {
  useDeleteOrderMutation,
  useGetAllOrdersQuery,
  useStatusUpdateMutation,
} from "../../../Redux/order/orderApi";
import Spinner from "../../../components/Spinner/Spinner";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Pagination from "../../../components/Pagination/Pagination";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

export default function AllOrders() {
  const [viewOrder, setViewOrder] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const query = {};
  query["page"] = currentPage;
  query["limit"] = 10;

  const { data, isLoading, isError, error } = useGetAllOrdersQuery({
    ...query,
  });

  const [deleteOrder] = useDeleteOrderMutation();
  const [statusUpdate, { isLoading: statusLoading }] =
    useStatusUpdateMutation();

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

  const statusHandler = async (id, status) => {
    const isConfirm = window.confirm("Do you want to update status?");

    if (status === "pending") {
      status = "shipped";
    } else if (status === "shipped") {
      status = "delivered";
    } else {
      status = "pending";
    }

    if (isConfirm) {
      try {
        const result = await statusUpdate({ id, status });
        if (result?.data?.success) {
          toast.success(result?.data?.message);
        }
      } catch (error) {
        toast.error(error?.data?.error);
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
    content = data?.data?.map((order) => (
      <tbody key={order?._id}>
        <tr>
          <td>#{order?.invoiceNumber}</td>
          <td>{order?.createdAt?.split("T")[0]}</td>
          <td>{order?.paymentMethod}</td>
          <td>{order?.totalPrice} tk</td>
          <td>
            {statusLoading ? (
              <p>Loading...</p>
            ) : (
              <button
                onClick={() => statusHandler(order?._id, order?.status)}
                disabled={order?.status === "delivered"}
                className={`border text-xs ${
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
              </button>
            )}
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

              <button onClick={() => setViewOrder(!viewOrder)}>
                <MdOutlineKeyboardArrowDown className="text-lg" />
              </button>
            </div>
          </td>
        </tr>

        {viewOrder &&
          order?.products?.map((sellerOrder) => {
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
              <tr key={sellerOrder?._id}>
                <td className="bg-gray-200">{sellerOrder?._id}</td>
                <td className="bg-gray-200">''</td>
                <td className="bg-gray-200">
                  Shop: {sellerOrder?.sellerId?.shopName}
                </td>
                <td className="bg-gray-200">{total} tk</td>
                <td
                  className={`bg-gray-200 text-sm ${
                    order?.status === "pending"
                      ? "text-yellow-500"
                      : order?.status === "processing"
                      ? "text-indigo-400"
                      : "text-green-500"
                  }`}
                >
                  {sellerOrder?.status}
                </td>
                <td className="bg-gray-200"></td>
              </tr>
            );
          })}
      </tbody>
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
        <>{content}</>
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
