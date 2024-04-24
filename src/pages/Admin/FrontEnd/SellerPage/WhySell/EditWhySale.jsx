import { useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import ImageUploading from "react-images-uploading";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  useGetWhySellHereByIdQuery,
  useUpdateWhySellHereMutation,
} from "../../../../../Redux/admin/sellerPage/whySellHereApi";
import Spinner from "../../../../../components/Spinner/Spinner";
import Swal from "sweetalert2";

export default function EditWhySell() {
  const navigate = useNavigate();
  const [images, setImages] = useState([]);

  const { id } = useParams();
  const { data, isLoading: getLoading } = useGetWhySellHereByIdQuery(id);
  const whySell = data?.data;

  const [updateWhySellHere, { isLoading }] = useUpdateWhySellHereMutation();

  const handleUpdate = async (e) => {
    e.preventDefault();

    const form = e.target;

    const icon = images[0]?.file;
    const order = form.order.value;
    const title = form.title.value;
    const description = form.description.value;

    const formData = new FormData();
    formData.append("order", order);
    formData.append("title", title);
    formData.append("description", description);
    if (icon) {
      formData.append("icon", icon);
    }

    const res = await updateWhySellHere({ id, formData });
    if (res?.data?.success) {
      Swal.fire("", "update success", "success");
      setImages([]);
      form.reset();
      navigate("/admin/front-end/seller-page/why-sell-here");
    } else {
      Swal.fire("", "Something went wrong", "error");
    }
  };

  if (getLoading) {
    return <Spinner />;
  }

  return (
    <section className="bg-base-100 p-4 rounded shadow">
      <div className="border-b pb-2">
        <h1 className="font-medium">Edit New Why Sell</h1>
      </div>

      <form onSubmit={handleUpdate} className="mt-4">
        <div className="form_group bg-base-100 shadhow rounded mb-4">
          <div className="mt-2">
            <p className="text-neutral-content">Order</p>
            <input
              type="number"
              name="order"
              required
              defaultValue={whySell?.order}
            />
          </div>

          <div className="mt-2">
            <p className="text-neutral-content">Title</p>
            <input
              type="text"
              name="title"
              required
              defaultValue={whySell?.title}
            />
          </div>

          <div className="mt-2">
            <p className="text-neutral-content">Description</p>
            <textarea
              name="description"
              rows="5"
              required
              defaultValue={whySell?.description}
            ></textarea>
          </div>

          <div className="mt-2 grid sm:grid-cols-2 gap-4">
            <div>
              <p className="mb-2">Icon</p>
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
              {whySell?.icon && (
                <img
                  src={`${import.meta.env.VITE_BACKEND_URL}/sellerWhySellHere/${
                    whySell?.icon
                  }`}
                  alt=""
                  className="w-32 mt-4"
                />
              )}
            </div>
          </div>
        </div>

        <div className="mt-6 flex gap-2">
          <Link
            to="/admin/front-end/seller-page/why-sell-here"
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
