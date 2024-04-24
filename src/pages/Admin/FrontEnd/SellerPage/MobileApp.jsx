import { useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import ImageUploading from "react-images-uploading";
import {
  useAddSellerMobileAppMutation,
  useGetSellerMobileAppQuery,
  useUpdateSellerMobileAppMutation,
} from "../../../../Redux/admin/sellerPage/sellerMobileAppApi";
import Swal from "sweetalert2";

export default function MobileApp() {
  const [images, setImages] = useState([]);

  const { data } = useGetSellerMobileAppQuery();
  const mobileApp = data?.data[0];
  const id = data?.data?.length > 0 && data?.data[0]?._id;

  const [addSellerMobileApp, { isLoading: addLoading }] =
    useAddSellerMobileAppMutation();
  const [updateSellerMobileApp, { isLoading: updateLoading }] =
    useUpdateSellerMobileAppMutation();

  const handleAddUpdate = async (e) => {
    e.preventDefault();

    const image = images[0]?.file;
    const title = e.target.title.value;
    const mainTitle = e.target.mainTitle.value;
    const description = e.target.description.value;
    const appLink = e.target.appLink.value;

    if (!image) {
      return Swal.fire("", "Image is required", "warning");
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("mainTitle", mainTitle);
    formData.append("description", description);
    formData.append("appLink", appLink);
    if (image) {
      formData.append("image", image);
    }

    if (id) {
      const res = await updateSellerMobileApp({ id, formData });
      if (res?.data?.success) {
        Swal.fire("", "Mobile App update success", "success");
        setImages([]);
      } else {
        Swal.fire("", "Something went wrong", "error");
      }
    } else {
      const res = await addSellerMobileApp(formData);
      if (res?.data?.success) {
        Swal.fire("", "Mobile App add success", "success");
        setImages([]);
      } else {
        Swal.fire("", "Something went wrong", "error");
      }
    }
  };

  return (
    <section className="bg-base-100 rounded shadow">
      <div className="p-4 border-b">
        <h3 className="font-medium text-neutral">
          Seller Page Mobile App Section
        </h3>
      </div>

      <form onSubmit={handleAddUpdate} className="p-4">
        <div className="form_group bg-base-100 shadhow rounded mb-4">
          <div className="mt-2">
            <p className="text-neutral-content">Title</p>
            <input
              type="text"
              name="title"
              required
              defaultValue={mobileApp?.title}
            />
          </div>

          <div className="mt-2">
            <p className="text-neutral-content">Main Title</p>
            <input
              type="text"
              name="mainTitle"
              required
              defaultValue={mobileApp?.title}
            />
          </div>

          <div className="mt-2">
            <p className="text-neutral-content">Description</p>
            <textarea
              name="description"
              rows="3"
              required
              defaultValue={mobileApp?.description}
            ></textarea>
          </div>

          <div className="mt-2">
            <p className="text-neutral-content">App Link</p>
            <input
              type="text"
              name="appLink"
              required
              defaultValue={mobileApp?.appLink}
            />
          </div>

          <div className="mt-2 grid sm:grid-cols-2 gap-4">
            <div>
              <p className="mb-2">Image</p>
              <ImageUploading
                value={images}
                onChange={(icn) => setImages(icn)}
                dataURLKey="data_url"
              >
                {({ onImageUpload, onImageRemove, dragProps }) => (
                  <div
                    className="border rounded border-dashed p-4"
                    {...dragProps}
                  >
                    <div className="flex items-center gap-2">
                      <span
                        onClick={onImageUpload}
                        className="w-max px-4 py-1.5 rounded-2xl text-base-100 bg-primary cursor-pointer text-sm"
                      >
                        Choose Image
                      </span>

                      <p className="text-neutral-content">or Drop here</p>
                    </div>

                    <div className={`${images?.length > 0 && "mt-4"} `}>
                      {images?.map((img, index) => (
                        <div key={index} className="image-item relative">
                          <img src={img["data_url"]} alt="" className="w-40" />
                          <div
                            onClick={() => onImageRemove(index)}
                            className="w-7 h-7 bg-primary rounded-full flex justify-center items-center text-base-100 absolute top-0 right-0 cursor-pointer"
                          >
                            <AiFillDelete />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </ImageUploading>
            </div>

            <div>
              {mobileApp?.image && (
                <img
                  src={`${import.meta.env.VITE_BACKEND_URL}/sellerBanner/${
                    mobileApp?.image
                  }`}
                  alt=""
                  className="w-32 mt-4"
                />
              )}
            </div>
          </div>
        </div>

        <div className="mt-6">
          <button
            disabled={(updateLoading || addLoading) && "disabled"}
            className="primary_btn"
          >
            {updateLoading || addLoading ? "Loading..." : "Submit"}
          </button>
        </div>
      </form>
    </section>
  );
}
