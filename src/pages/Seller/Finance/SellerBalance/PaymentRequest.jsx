import Swal from "sweetalert2";
import { useCreatePaymentRequestMutation } from "../../../../Redux/payment/paymentApi";

export default function PaymentRequest({ loggedSeller }) {
  const [createPaymentRequest, { isLoading }] =
    useCreatePaymentRequestMutation();

  const handlePaymentRequest = async (e) => {
    e.preventDefault();

    const amount = e.target.amount.value;

    if (loggedSeller?.data?.balance < amount) {
      return Swal.fire("", "Not availbe Balance", "warning");
    }

    const info = {
      amount,
      sellerId: loggedSeller?.data?._id,
    };

    const res = await createPaymentRequest(info);
    if (res?.data?.success) {
      Swal.fire("", "Payment Withdrawal Request success", "success");
      e.target.amount.value = "";
    } else {
      Swal.fire("", "something went wrong", "error");
    }
  };

  return (
    <div className="bg-base-100 shadow p-3 rounded">
      <div>
        <h1>Request Withdrawal</h1>
      </div>

      <form onSubmit={handlePaymentRequest} className="mt-4 form_group">
        <div className="flex flex-col sm:flex-row items-center gap-2">
          <input type="number" name="amount" defaultValue="0" />
          <button className="primary_btn">
            {isLoading ? "Loading..." : "Submite"}
          </button>
        </div>
      </form>
    </div>
  );
}
