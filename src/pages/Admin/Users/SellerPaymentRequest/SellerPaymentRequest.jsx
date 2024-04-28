import Swal from "sweetalert2";
import {
  useAcceptRequestByAdminMutation,
  useGetAllPaymentRequestQuery,
} from "../../../../Redux/payment/paymentApi";
import { FaCheck } from "react-icons/fa";

export default function SellerPaymentRequest() {
  const query = {};
  query["page"] = 1;
  query["limit"] = 5;
  query["status"] = "all";
  const { data } = useGetAllPaymentRequestQuery();

  const [acceptRequestByAdmin] = useAcceptRequestByAdminMutation();

  const handleAcceptRequest = async (data) => {
    const isConfirm = window.confirm("Are you sure accept withdrawal?");
    const requestId = data?._id;
    const sellerId = data?.sellerId?._id;
    const amount = data?.amount;

    if (isConfirm) {
      const res = await acceptRequestByAdmin({ requestId, sellerId, amount });

      if (res?.data?.success) {
        Swal.fire("", "Withdrawal request accept success", "success");
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
    <div className="bg-base-100 shadow p-3 rounded">
      <div>
        <h1>Seller Payment REquest</h1>
      </div>

      <div className="mt-4 overflow-x-auto">
        <table>
          <thead>
            <tr>
              <th>SL</th>
              <th>Date</th>
              <th>Seller</th>
              <th>Available Balance</th>
              <th>Ammount</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data?.data?.map((req, i) => (
              <tr key={req?._id}>
                <td>{i + 1}</td>
                <td>{req?.createdAt?.split("T")[0]}</td>
                <td>{req?.sellerId?.shopName}</td>
                <td>{req?.sellerId?.balance} tk</td>
                <td>{req?.amount} tk</td>
                <td
                  className={`${
                    req?.status === "pending"
                      ? "text-yellow-500"
                      : req?.status === "processing"
                      ? "text-indigo-400"
                      : "text-green-500"
                  }`}
                >
                  {req?.status}
                </td>
                <td>
                  {req?.status == "success" ? (
                    <div>
                      <FaCheck className="text-green-500" />
                    </div>
                  ) : (
                    <button onClick={() => handleAcceptRequest(req)}>
                      <FaCheck className="hover:text-green-500 duration-300" />
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
