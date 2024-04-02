import { Link } from "react-router-dom";
import { useAllSellersQuery } from "../../../../Redux/seller/seller/sellerApi";
import Spinner from "../../../../components/Spinner/Spinner";
import { MdDelete } from "react-icons/md";
import { FaEye } from "react-icons/fa";

export default function AllSellers() {
  const { data, isLoading, isError, error } = useAllSellersQuery();

  const handleUpdateSeller = async (e) => {
    const isConfirm = window.confirm("Are you sure update seller verification");
    if (isConfirm) {
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
    content = data?.data?.map((user) => (
      <tr key={user?._id}>
        <td>{user?.shopName}</td>
        <td>{user?.phone}</td>
        <td>
          <label class="relative inline-flex items-center cursor-pointer">
            <input
              checked={user?.verify && user?.verify}
              type="checkbox"
              value={user?.verify}
              class="sr-only peer"
              onChange={(e) => handleUpdateSeller(e.target.value)}
            />
            <div class="w-11 h-[23px] bg-gray-200 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[1.5px] after:start-[1px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
          </label>
        </td>
        <td className={`${user?.status ? "text-green-500" : "text-red-500"}`}>
          {user?.status ? "active" : "unActive"}
        </td>
        <td>
          <div className="flex items-center gap-2 text-lg">
            <Link>
              <FaEye className="text-primary" />
            </Link>
            <button>
              <MdDelete className="text-red-500" />
            </button>
          </div>
        </td>
      </tr>
    ));
  }

  return (
    <div className="relative overflow-x-auto shadow-lg">
      <table className="dashboard_table">
        <thead>
          <tr>
            <th>Shop Name</th>
            <th>Phone</th>
            <th>Verify</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{content}</tbody>
      </table>
    </div>
  );
}
