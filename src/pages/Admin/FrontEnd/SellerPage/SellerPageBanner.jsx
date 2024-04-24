import { useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import ImageUploading from "react-images-uploading";
import {
  useAddSellerBannerMutation,
  useGetSellerBannerQuery,
  useUpdateSellerBannerMutation,
} from "../../../../Redux/admin/sellerPage/sellerBannerApi";
import Swal from "sweetalert2";

export default function SellerPageBanner() {
  const [images, setImages] = useState([]);

  const { data } = useGetSellerBannerQuery();
  const banner = data?.data[0];
  const id = data?.data?.length > 0 && data?.data[0]?._id;

  const [addSellerBanner, { isLoading: addLoading }] =
    useAddSellerBannerMutation();
  const [updateSellerBanner, { isLoading: updateLoading }] =
    useUpdateSellerBannerMutation();

  const handleAddUpdateBanner = async (e) => {
    e.preventDefault();

    const image = images[0]?.file;
    const title = e.target.title.value;
    const description = e.target.description.value;

    if (!image) {
      return Swal.fire("", "Background Image is required", "warning");
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    if (image) {
      formData.append("image", image);
    }

    if (id) {
      const res = await updateSellerBanner({ id, formData });
      if (res?.data?.success) {
        Swal.fire("", "Banner update success", "success");
        setImages([]);
      } else {
        Swal.fire("", "Something went wrong", "error");
      }
    } else {
      const res = await addSellerBanner(formData);
      if (res?.data?.success) {
        Swal.fire("", "Banner add success", "success");
        setImages([]);
      } else {
        Swal.fire("", "Something went wrong", "error");
      }
    }
  };

  return (
    <section className="bg-base-100 rounded shadow">
      <div className="p-4 border-b">
        <h3 className="font-medium text-neutral">Seller Page Banner Section</h3>
      </div>

      <form onSubmit={handleAddUpdateBanner} className="p-4">
        <div className="form_group bg-base-100 shadhow rounded mb-4">
          <div className="mt-2">
            <p className="text-neutral-content">Title</p>
            <input
              type="text"
              name="title"
              required
              defaultValue={banner?.title}
            />
          </div>

          <div className="mt-2">
            <p className="text-neutral-content">Description</p>
            <textarea
              name="description"
              rows="5"
              required
              defaultValue={banner?.description}
            ></textarea>
          </div>

          <div className="mt-2 grid sm:grid-cols-2 gap-4">
            <div>
              <p className="mb-2">Background Image</p>
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
              {data?.data[0]?.image && (
                <img
                  src={`${import.meta.env.VITE_BACKEND_URL}/sellerBanner/${
                    data?.data[0]?.image
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
