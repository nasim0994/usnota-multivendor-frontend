import { useEffect, useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import ImageUploading from "react-images-uploading";
import Swal from "sweetalert2";
import Spinner from "../../../../components/Spinner/Spinner";

import {
  useAddLogoMutation,
  useAddSellerLogoMutation,
  useGetMainLogoQuery,
  useGetSellerLogoQuery,
  useUpdateMainLogoMutation,
  useUpdateSellerLogoMutation,
} from "../../../../Redux/logo/logoApi";

export default function Logo() {
  const [logos, setLogos] = useState([]);
  const [sellerLogos, setSellerLogos] = useState([]);

  const { data, isLoading } = useGetMainLogoQuery();
  const [addLogo, { isLoading: addLoading, isSuccess, isError }] =
    useAddLogoMutation();

  const [
    updateMainLogo,
    {
      isLoading: updateLoading,
      isSuccess: updateSuccess,
      isError: updateError,
    },
  ] = useUpdateMainLogoMutation();

  //---------Seller logo
  const { data: sellerData, isLoading: sellerIsLoading } =
    useGetSellerLogoQuery();
  const [addSellerLogo, { isLoading: sellerAddIsLoading }] =
    useAddSellerLogoMutation();
  const [updateSellerLogo, { isLoading: updateSellerLoading }] =
    useUpdateSellerLogoMutation();

  const id = data?.data[0]?._id;
  const sellerId = sellerData?.data[0]?._id;

  const handleUpdateAddMainLogo = async () => {
    const logo = logos[0]?.file;
    if (!logo) {
      return Swal.fire("", "Logo is required", "error");
    }

    let formData = new FormData();
    formData.append("logo", logo);

    if (data?.data?.length > 0) {
      await updateMainLogo({ id, formData });
    } else {
      await addLogo(formData);
    }
  };

  const handleUpdateAddSellerLogo = async () => {
    const sellerLogo = sellerLogos[0]?.file;
    if (!sellerLogo) {
      return Swal.fire("", "Logo is required", "error");
    }

    let formData = new FormData();
    formData.append("logo", sellerLogo);

    if (sellerData?.data?.length > 0) {
      const res = await updateSellerLogo({ sellerId, formData });
      console.log(res);
      if (res?.data?.success) {
        Swal.fire("", "Logo update success", "success");
        setSellerLogos([]);
      } else {
        Swal.fire("", "something went wrong", "error");
      }
    } else {
      const res = await addSellerLogo(formData);
      if (res?.data?.success) {
        Swal.fire("", "Logo add success", "success");
        setSellerLogos([]);
      } else {
        Swal.fire("", "something went wrong", "error");
      }
    }
  };

  useEffect(() => {
    // update
    if (updateSuccess) {
      Swal.fire("", "Logo Update success", "success");
      setLogos([]);
    }
    if (updateError) {
      Swal.fire("", "somethin wrong, please try again", "error");
    }

    // Add
    if (isSuccess) {
      Swal.fire("", "Logo successfully added", "success");
      setLogos([]);
    }
    if (isError) {
      Swal.fire("", "Something went wrong when uploading", "error");
    }
  }, [updateSuccess, updateError, isSuccess, isError]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <section>
      <div className="p-4 border-b bg-base-100 rounded">
        <h1 className="font-medium text-neutral">Logo Setting</h1>
      </div>

      <div className="grid md:grid-cols-2 gap-4 mt-4">
        <div className="bg-base-100 rounded shadow">
          <div>
            <p className="text-neutral-content border-b p-3">
              Logo <small>(max 120px/56px)</small>
            </p>
            <div className="p-4 sm:flex items-center gap-4">
              <ImageUploading
                value={logos}
                onChange={(file) => setLogos(file)}
                dataURLKey="data_url"
              >
                {({ onImageUpload, onImageRemove, dragProps }) => (
                  <div
                    className="border rounded border-dashed p-4 w-max"
                    {...dragProps}
                  >
                    <div className="flex items-center gap-2">
                      <span
                        onClick={onImageUpload}
                        className="px-4 py-1.5 rounded-2xl text-base-100 bg-primary cursor-pointer text-sm"
                      >
                        Choose Image
                      </span>

                      <p className="text-neutral-content">or Drop here</p>
                    </div>

                    <div className={`${logos?.length > 0 && "mt-4"} `}>
                      {logos?.map((img, index) => (
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

              {data?.data[0]?.logo && logos?.length >= 0 && (
                <img
                  src={`${import.meta.env.VITE_BACKEND_URL}/logo/${
                    data?.data[0]?.logo
                  }`}
                  alt=""
                  className="w-32 mt-4"
                />
              )}
            </div>
          </div>

          <div className="flex justify-end mt-6 border-t p-4">
            <button
              disabled={(updateLoading || addLoading) && "disabled"}
              onClick={handleUpdateAddMainLogo}
              className="primary_btn"
            >
              {updateLoading || addLoading
                ? "Loading"
                : id
                ? "Update Logo"
                : "Add Logo"}
            </button>
          </div>
        </div>

        <div className="bg-base-100 rounded shadow">
          <div>
            <p className="text-neutral-content border-b p-3">Seller Logo</p>
            <div className="p-4 sm:flex items-center gap-4">
              <ImageUploading
                value={sellerLogos}
                onChange={(file) => setSellerLogos(file)}
                dataURLKey="data_url"
              >
                {({ onImageUpload, onImageRemove, dragProps }) => (
                  <div
                    className="border rounded border-dashed p-4 w-max"
                    {...dragProps}
                  >
                    <div className="flex items-center gap-2">
                      <span
                        onClick={onImageUpload}
                        className="px-4 py-1.5 rounded-2xl text-base-100 bg-primary cursor-pointer text-sm"
                      >
                        Choose Image
                      </span>

                      <p className="text-neutral-content">or Drop here</p>
                    </div>

                    <div className={`${sellerLogos?.length > 0 && "mt-4"} `}>
                      {sellerLogos?.map((img, index) => (
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

              {sellerData?.data[0]?.logo && sellerLogos?.length >= 0 && (
                <img
                  src={`${import.meta.env.VITE_BACKEND_URL}/logo/${
                    sellerData?.data[0]?.logo
                  }`}
                  alt=""
                  className="w-32 mt-4"
                />
              )}
            </div>
          </div>

          <div className="flex justify-end mt-6 border-t p-4">
            <button
              disabled={
                (sellerAddIsLoading || updateSellerLoading) && "disabled"
              }
              onClick={handleUpdateAddSellerLogo}
              className="primary_btn"
            >
              {sellerAddIsLoading || updateSellerLoading
                ? "Loading"
                : sellerId
                ? "Update Seller Logo"
                : "Add Seller Logo"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
