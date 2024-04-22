import { useState } from "react";
import ImageUploader from "react-image-upload";
import "react-image-upload/dist/index.css";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
import { useUpdateSellerProfileLogoMutation } from "../../../../Redux/seller/sellerProfile/sellerProfileApi";
import { AiOutlineCloseCircle } from "react-icons/ai";

export default function LogoUploadModal({ logoModal, setLogoModal }) {
  const { loggedSeller } = useSelector((state) => state.seller);
  const sellerId = loggedSeller?.data?._id;
  const [logo, setLogo] = useState("");
  const [error, setError] = useState("");
  const [updateSellerProfileLogo, { isloading }] =
    useUpdateSellerProfileLogoMutation();

  const handleUpdateSellerProfileLogo = async () => {
    const logoFile = logo?.file;
    if (!logoFile) {
      return setError("Logo is requred");
    } else {
      setError("");
    }

    const formData = new FormData();
    formData.append("logo", logoFile);

    const res = await updateSellerProfileLogo({ sellerId, formData });

    if (res?.data?.success) {
      Swal.fire("", "Logo upload success", "success");
      setLogoModal(false);
    } else {
      Swal.fire("", "Something went wrong!", "error");
    }
  };

  return (
    <>
      <button
        onClick={() => setLogoModal(false)}
        className={`overlay ${logoModal && "overlay_show"}`}
      ></button>
      <div
        className={`custom_modal w-[90%] sm:w-[500px] ${
          logoModal && "modal_show"
        }`}
      >
        <div className="relatieve">
          <h3 className="font-bold text-lg border-b text-center pb-2">
            Choose profile picture
          </h3>

          <button
            onClick={() => setLogoModal(false)}
            className="absolute right-5 top-5 text-lg"
          >
            <AiOutlineCloseCircle />
          </button>
        </div>

        <div className="mt-4">
          <ImageUploader onFileAdded={(img) => setLogo(img)} />
          {error && (
            <p className="text-sm text-red-500 text-center mt-1">{error}</p>
          )}
          <div className="flex justify-center gap-2 mt-4">
            <button
              onClick={() => setLogoModal(false)}
              className="bg-red-500 px-4 py-2 rounded"
            >
              Cancel
            </button>
            <button
              onClick={handleUpdateSellerProfileLogo}
              className="primary_btn"
            >
              {isloading ? "Loading..." : "Save"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
