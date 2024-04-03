import { useNavigate, useParams } from "react-router-dom";
import {
  useSellerByIdQuery,
  useToggleVerifyMutation,
} from "../../../../../Redux/seller/seller/sellerApi";
import Spinner from "../../../../../components/Spinner/Spinner";
import Swal from "sweetalert2";

export default function ViewSeller() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, isLoading } = useSellerByIdQuery(id);
  const seller = data?.data;

  const [toggleVerify] = useToggleVerifyMutation();

  const handleUpdateSeller = async (id) => {
    const isConfirm = window.confirm("Are you sure update seller verification");
    if (isConfirm) {
      const res = await toggleVerify(id);
      if (res?.data?.success) {
        Swal.fire("", "Seller Verify Update success", "success");
        navigate("/admin/seller/all-sellers");
        setTimeout(() => {
          location.reload();
        }, 1000);
      } else {
        Swal.fire("", "Something went wrong", "error");
      }
    }
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <section>
      <div className="container">
        <div>
          <p className="text-lg mb-2 tetx-primary">Shop Info</p>

          <div className="grid sm:grid-cols-2 gap-4 border rounded p-4 bg-base-100">
            <div>
              <p className="text-sm text-neutral-content">Owner Name</p>
              <p className="border rounded px-2 py-1.5">{seller?.name}</p>
            </div>
            <div>
              <p className="text-sm text-neutral-content">Shop Name</p>
              <p className="border rounded px-2 py-1.5">{seller?.shopName}</p>
            </div>
            <div>
              <p className="text-sm text-neutral-content">Email</p>
              <p className="border rounded px-2 py-1.5">{seller?.email}</p>
            </div>
            <div>
              <p className="text-sm text-neutral-content">Phone</p>
              <p className="border rounded px-2 py-1.5">{seller?.phone}</p>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <p className="text-lg mb-2 text-primary">Shop Address</p>

          <div className="grid sm:grid-cols-2 gap-4 border rounded p-4 bg-base-100">
            <div>
              <p className="text-sm text-neutral-content">Country</p>
              <p className="border rounded px-2 py-1.5">{seller?.country}</p>
            </div>
            <div>
              <p className="text-sm text-neutral-content">City</p>
              <p className="border rounded px-2 py-1.5">{seller?.city}</p>
            </div>
            <div>
              <p className="text-sm text-neutral-content">Area</p>
              <p className="border rounded px-2 py-1.5">{seller?.area}</p>
            </div>
            <div>
              <p className="text-sm text-neutral-content">State</p>
              <p className="border rounded px-2 py-1.5">{seller?.state}</p>
            </div>
            <div>
              <p className="text-sm text-neutral-content">Full Address</p>
              <p className="border rounded px-2 py-1.5">
                {seller?.fullAddress}
              </p>
            </div>
            <div>
              <p className="text-sm text-neutral-content">
                Facebook/website Link
              </p>
              <p className="border rounded px-2 py-1.5">{seller?.storeLink}</p>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <p className="text-lg mb-2 text-primary">ID Information</p>

          <div className="grid sm:grid-cols-2 gap-4 border rounded p-4 bg-base-100">
            <div>
              <p className="text-sm text-neutral-content">ID Name</p>
              <p className="border rounded px-2 py-1.5">{seller?.idName}</p>
            </div>
            <div>
              <p className="text-sm text-neutral-content">ID Number</p>
              <p className="border rounded px-2 py-1.5">{seller?.idNumber}</p>
            </div>
            <div>
              <p className="text-sm text-neutral-content">ID Photo</p>
              <img
                src={`${import.meta.env.VITE_BACKEND_URL}/seller/profile/${
                  seller?.idCard
                }`}
                alt=""
                className="mt-1 rounded"
              />
            </div>
          </div>
        </div>

        <div className="mt-4">
          <button
            className="primary_btn"
            onClick={() => handleUpdateSeller(seller?._id)}
          >
            {seller?.verify ? "Cancel Verify" : "Confirm Verify"}
          </button>
        </div>
      </div>
    </section>
  );
}
