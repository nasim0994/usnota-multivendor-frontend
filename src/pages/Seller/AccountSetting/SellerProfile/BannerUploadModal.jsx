import { useState } from "react";
import ImageUploader from "react-image-upload";
import "react-image-upload/dist/index.css";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
import { useUpdateSellerBannerMutation } from "../../../../Redux/seller/sellerProfile/sellerProfileApi";
import { AiOutlineCloseCircle } from "react-icons/ai";

export default function BannerUploadModal({ bannerModal, setBannerModal }) {
  const { loggedSeller } = useSelector((state) => state.seller);
  const sellerId = loggedSeller?.data?._id;
  const [banner, setBanner] = useState("");
  const [error, setError] = useState("");
  const [updateSellerBanner, { isloading }] = useUpdateSellerBannerMutation();

  const handleUpdateSellerBanner = async () => {
    const bannerFile = banner?.file;
    if (!bannerFile) {
      return setError("Banner is requred");
    } else {
      setError("");
    }

    const formData = new FormData();
    formData.append("banner", bannerFile);

    const res = await updateSellerBanner({ sellerId, formData });

    if (res?.data?.success) {
      Swal.fire("", "Banner upload success", "success");
      setBannerModal(false);
    } else {
      Swal.fire("", "Something went wrong!", "error");
    }
  };

  return (
    <>
      <button
        onClick={() => setBannerModal(false)}
        className={`overlay ${bannerModal && "overlay_show"}`}
      ></button>
      <div
        className={`custom_modal w-[90%] sm:w-[500px] ${
          bannerModal && "modal_show"
        }`}
      >
        <div className="relatieve">
          <h3 className="font-bold text-lg border-b text-center pb-2">
            Choose Banner
          </h3>

          <button
            onClick={() => setBannerModal(false)}
            className="absolute right-5 top-5 text-lg"
          >
            <AiOutlineCloseCircle />
          </button>
        </div>

        <div className="mt-4">
          <ImageUploader onFileAdded={(img) => setBanner(img)} />
          {error && (
            <p className="text-sm text-red-500 text-center mt-1">{error}</p>
          )}
          <div className="flex justify-center gap-2 mt-4">
            <button
              onClick={() => setBannerModal(false)}
              className="bg-red-500 px-4 py-2 rounded"
            >
              Cancel
            </button>
            <button onClick={handleUpdateSellerBanner} className="primary_btn">
              {isloading ? "Loading..." : "Save"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
