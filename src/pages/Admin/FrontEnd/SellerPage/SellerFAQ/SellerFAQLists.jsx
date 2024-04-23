import { Link } from "react-router-dom";
import {
  useDeleteSellerFAQMutation,
  useGetAllSellerFAQQuery,
} from "../../../../../Redux/admin/sellerPage/sellerPageApi";
import Spinner from "../../../../../components/Spinner/Spinner";

import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";

export default function SellerFAQLists() {
  const { data, isLoading } = useGetAllSellerFAQQuery();
  const FAQs = data?.data;
  const [deleteSellerFAQ] = useDeleteSellerFAQMutation();

  const handleDeleteFAQ = async (id) => {
    const isConfirm = window.confirm("Are you sure delete this FAQ?");
    if (isConfirm) {
      const res = await deleteSellerFAQ(id);
      if (res?.data?.success) {
        Swal.fire("", "FAQ delete success", "success");
      } else {
        Swal.fire("", "Something went wrong", "error");
      }
    }
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <section className="bg-base-100 p-4 rounded shadow">
      <div className="flex justify-between items-center">
        <h1 className="font-medium">Seller FAQ</h1>
        <Link
          to="/admin/front-end/seller-page/add-seller-faq"
          className="primary_btn"
        >
          Add New
        </Link>
      </div>
      <div className="mt-4 overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Order</th>
              <th>Question</th>
              <th>Ans</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {FAQs?.map((faq) => (
              <tr key={faq?._id}>
                <td>{faq?.order}</td>
                <td>{faq?.question}</td>
                <td>{faq?.ans}</td>
                <td>
                  <div className="flex items-center gap-2 text-xl">
                    <Link
                      to={`/admin/front-end/seller-page/edit-seller-faq/${faq?._id}`}
                    >
                      <FaRegEdit className="text-lg" />
                    </Link>
                    <button
                      onClick={() => handleDeleteFAQ(faq?._id)}
                      className="text-red-500"
                    >
                      <MdDelete />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
