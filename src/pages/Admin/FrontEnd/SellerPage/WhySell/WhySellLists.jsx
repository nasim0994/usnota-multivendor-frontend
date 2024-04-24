import { Link } from "react-router-dom";
import {
  useDeleteWhySellHereMutation,
  useGetWhySellHereQuery,
} from "../../../../../Redux/admin/sellerPage/whySellHereApi";
import Spinner from "../../../../../components/Spinner/Spinner";
import { AiFillEdit } from "react-icons/ai";
import { MdDeleteOutline } from "react-icons/md";
import Swal from "sweetalert2";

export default function WhySellLists() {
  const { data, isLoading } = useGetWhySellHereQuery();
  const whySellHere = data?.data;

  const [deleteWhySellHere] = useDeleteWhySellHereMutation();

  const handleDelete = async (id) => {
    const isConfirm = window.confirm("Are you sure delete this itms?");
    if (isConfirm) {
      const res = await deleteWhySellHere(id);
      if (res?.data?.success) {
        Swal.fire("", "delete success", "success");
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
        <h1 className="font-medium">Why Sell Here</h1>
        <Link
          to="/admin/front-end/seller-page/add-why-sell"
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
              <th>Icon</th>
              <th>Title</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {whySellHere?.map((whysell) => (
              <tr key={whysell?._id}>
                <td>
                  <img
                    src={`${
                      import.meta.env.VITE_BACKEND_URL
                    }/sellerWhySellHere/${whysell?.icon}`}
                    alt="icon"
                    className="w-10 h-10 rounded-full"
                  />
                </td>
                <td>{whysell?.title}</td>
                <td>{whysell?.description}</td>
                <td>
                  <div className="flex items-center gap-2 text-lg">
                    <Link
                      to={`/admin/front-end/seller-page/edit-why-sell/${whysell?._id}`}
                    >
                      <AiFillEdit />
                    </Link>
                    <button onClick={() => handleDelete(whysell?._id)}>
                      <MdDeleteOutline className="text-red-500" />
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
