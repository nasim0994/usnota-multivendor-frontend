import { Link, useNavigate, useParams } from "react-router-dom";
import {
  useGetSellerFAQByIdQuery,
  useUpdateSellerFAQMutation,
} from "../../../../../Redux/admin/sellerPage/sellerPageApi";
import Spinner from "../../../../../components/Spinner/Spinner";
import Swal from "sweetalert2";

export default function EditSellerFAQ() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data, isLoading: getIsLoading } = useGetSellerFAQByIdQuery(id);
  const FAQ = data?.data;

  const [updateSellerFAQ, { isLoading }] = useUpdateSellerFAQMutation();

  const handleEditSellerFAQ = async (e) => {
    e.preventDefault();

    const form = e.target;
    const order = form.order.value;
    const question = form.question.value;
    const ans = form.ans.value;

    const info = {
      question,
      ans,
      order,
    };

    const res = await updateSellerFAQ({ id, info });
    if (res?.data?.success) {
      Swal.fire("", "FAQ update success", "success");
      navigate("/admin/front-end/seller-page/seller-faq");
      form.reset();
    } else {
      Swal.fire("", "Something went wrong", "error");
    }
  };

  if (getIsLoading) {
    return <Spinner />;
  }

  return (
    <section className="bg-base-100 p-4 rounded shadow">
      <div className="border-b pb-2">
        <h1 className="font-medium">Edit Seller FAQ</h1>
      </div>

      <form onSubmit={handleEditSellerFAQ} className="mt-4">
        <div className="form_group bg-base-100 shadhow rounded mb-4">
          <div className="mt-2">
            <p className="text-neutral-content">Order</p>
            <input
              type="number"
              name="order"
              required
              defaultValue={FAQ?.order}
            />
          </div>

          <div className="mt-2">
            <p className="text-neutral-content">Question</p>
            <input
              type="text"
              name="question"
              required
              defaultValue={FAQ?.question}
            />
          </div>

          <div className="mt-2">
            <p className="text-neutral-content">Ans</p>
            <textarea
              name="ans"
              rows="5"
              required
              defaultValue={FAQ?.ans}
            ></textarea>
          </div>
        </div>

        <div className="mt-6 flex gap-2">
          <Link
            to="/admin/front-end/seller-page/seller-faq"
            className="bg-red-600 text-base-100 px-4 py-2 rounded"
          >
            Cancel
          </Link>
          <button disabled={isLoading && "disabled"} className="primary_btn">
            {isLoading ? "Loading..." : "Update"}
          </button>
        </div>
      </form>
    </section>
  );
}
