import { FaMoneyBillAlt, FaSpinner } from "react-icons/fa";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { TiChartLine } from "react-icons/ti";
import { useGetSellerOrderByIdQuery } from "../../../../Redux/order/orderApi";
import { useSelector } from "react-redux";
import PaymentRequest from "./PaymentRequest";
import AllPaymentRequest from "./AllPaymentRequest";
import SuccessWithdrawal from "./SuccessWithdrawal";
import PendingWithdrawal from "./PendingWithDrawal";
import { useGetAllPaymentRequestBySellerIdQuery } from "../../../../Redux/payment/paymentApi";

export default function SellerBalance() {
  const { loggedSeller } = useSelector((state) => state.seller);
  const sellerId = loggedSeller?.data?._id;
  const { data: orders } = useGetSellerOrderByIdQuery({ sellerId });

  let totalPrice = 0;
  orders?.data?.forEach((item) => {
    item?.products?.forEach((product) => {
      if (product?.productId?.variants?.length > 0) {
        const variant = product?.productId?.variants?.find(
          (variant) =>
            variant?.color == product?.color && variant?.size == product?.size
        );
        if (variant) {
          totalPrice +=
            variant?.sellingPrice * product?.quantity -
            parseInt(
              (variant?.sellingPrice * product?.productId?.discount) / 100
            );
        }
      } else {
        totalPrice +=
          product?.productId?.sellingPrice * product?.quantity -
          parseInt(
            (product?.productId?.sellingPrice * product?.productId?.discount) /
              100
          );
      }
    });
  });

  const query1 = {};
  query1["status"] = "all";
  const { data: allRequest } = useGetAllPaymentRequestBySellerIdQuery({
    sellerId,
    query: query1,
  });

  const totalWithDrawal = allRequest?.data?.reduce((acc, curr) => {
    return acc + curr.amount;
  }, 0);

  const query2 = {};
  query2["status"] = "pending";
  const { data: pendingRequest } = useGetAllPaymentRequestBySellerIdQuery({
    sellerId,
    query: query2,
  });

  const pendingWithDrawal = pendingRequest?.data?.reduce((acc, curr) => {
    return acc + curr.amount;
  }, 0);

  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4">
        <div className="flex justify-between items-center rounded-lg shadow p-4 bg-base-100">
          <div>
            <p className="text-neutral font-dinMedium">Total Sales</p>
            <h3 className="text-primary font-bold">{totalPrice} tk</h3>
          </div>
          <div className="bg-primary text-base-100 w-11 h-11 rounded-lg flex justify-center items-center">
            <TiChartLine className="text-xl" />
          </div>
        </div>

        <div className="flex justify-between items-center rounded-lg shadow p-4 bg-base-100">
          <div>
            <p className="text-neutral font-dinMedium">Available Balance</p>
            <h3 className="text-primary font-bold">
              {loggedSeller?.data?.balance} tk
            </h3>
          </div>
          <div className="bg-primary text-base-100 w-11 h-11 rounded-lg flex justify-center items-center">
            <FaMoneyBillAlt className="text-xl" />
          </div>
        </div>

        <div className="flex justify-between items-center rounded-lg shadow p-4 bg-base-100">
          <div>
            <p className="text-neutral font-dinMedium">Total Withdrawal</p>
            <h3 className="text-primary font-bold">{totalWithDrawal} tk</h3>
          </div>
          <div className="bg-primary text-base-100 w-11 h-11 rounded-lg flex justify-center items-center">
            <FaMoneyBillTransfer className="text-xl" />
          </div>
        </div>

        <div className="flex justify-between items-center rounded-lg shadow p-4 bg-base-100">
          <div>
            <p className="text-neutral font-dinMedium">Pending Withdrawal</p>
            <h3 className="text-primary font-bold">{pendingWithDrawal} tk</h3>
          </div>
          <div className="bg-primary text-base-100 w-11 h-11 rounded-lg flex justify-center items-center">
            <FaSpinner className="text-xl" />
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4 mt-4 items-start">
        <PaymentRequest loggedSeller={loggedSeller} />

        <div></div>

        <PendingWithdrawal sellerId={sellerId} />

        <SuccessWithdrawal sellerId={sellerId} />
      </div>

      <AllPaymentRequest sellerId={sellerId} />
    </section>
  );
}
