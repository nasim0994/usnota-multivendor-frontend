import { useGetAllPaymentRequestBySellerIdQuery } from "../../../../Redux/payment/paymentApi";

export default function PendingWithdrawal({ sellerId }) {
  const query = {};
  query["page"] = 1;
  query["limit"] = 5;
  query["status"] = "pending";
  const { data } = useGetAllPaymentRequestBySellerIdQuery({ sellerId, query });

  return (
    <div className="bg-base-100 shadow p-3 rounded">
      <div>
        <h1>Pending Withdrawal</h1>
      </div>

      <div className="mt-4 overflow-x-auto">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Date</th>
              <th>Ammount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {data?.data?.map((req, i) => (
              <tr key={req?._id}>
                <td>{i + 1}</td>
                <td>{req?.createdAt?.split("T")[0]}</td>
                <td>{req?.amount}</td>
                <td className="text-yellow-500">{req?.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
