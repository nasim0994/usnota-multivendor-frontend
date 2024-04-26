import { useSelector } from "react-redux";
import { useSellerByIdQuery } from "../../../../Redux/seller/seller/sellerApi";
import Spinner from "../../../../components/Spinner/Spinner";
import { MdOutlineVerified } from "react-icons/md";
import { LuShieldClose } from "react-icons/lu";
import { Link } from "react-router-dom";

import { FaCamera } from "react-icons/fa";
import LogoUploadModal from "./LogoUploadModal";
import BannerUploadModal from "./BannerUploadModal";
import { useState } from "react";
import ProfileForm from "./ProfileForm";

export default function SellerProfile() {
  const { loggedSeller } = useSelector((state) => state.seller);
  const sellerId = loggedSeller?.data?._id;

  const [profileUpdate, setProfileUpdate] = useState(false);
  const [logoModal, setLogoModal] = useState(false);
  const [bannerModal, setBannerModal] = useState(false);

  const { data: sellerInfo, isLoading } = useSellerByIdQuery(sellerId);
  const seller = sellerInfo?.data;

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <section className="bg-base-100 p-4 rounded shadow">
      {/* head */}
      <div>
        {/* Banner */}
        <div className="relative w-full h-28 sm:h-48 bg-gray-100 rounded overflow-hidden">
          {!seller?.banner || seller?.banner === "" ? (
            <p className="flex justify-center items-center w-full h-full text-gray-500">
              Banner 1200px*190px
            </p>
          ) : (
            <img
              src={`${import.meta.env.VITE_BACKEND_URL}/seller/profile/${
                seller?.banner
              }`}
              alt=""
              className="w-full h-full rounded"
            />
          )}

          <div>
            <button
              onClick={() => setBannerModal(true)}
              className="absolute right-6 bottom-4 bg-primary text-base-100 px-3 py-1 rounded"
            >
              <div className="text-sm flex items-center gap-2">
                <FaCamera />
                Update Banner
              </div>
            </button>

            <BannerUploadModal
              bannerModal={bannerModal}
              setBannerModal={setBannerModal}
            />
          </div>
        </div>

        <div className="flex justify-between">
          <div className="flex items-start gap-4 ">
            {/* Logo */}
            <div className="relative w-20 sm:w-32 h-20 sm:h-32 rounded-full shadow border -mt-6 sm:-mt-12 bg-base-100">
              {!seller?.logo || seller?.logo === "" ? (
                <p className="flex justify-center items-center w-full h-full text-primary">
                  {seller?.shopName}
                </p>
              ) : (
                <img
                  src={`${import.meta.env.VITE_BACKEND_URL}/seller/profile/${
                    seller?.logo
                  }`}
                  alt=""
                  className="w-full h-full rounded-full"
                />
              )}

              <div>
                <button
                  onClick={() => setLogoModal(true)}
                  className="absolute bottom-4 -right-1 p-2 rounded-full bg-gray-200 hover:bg-gray-300 duration-200"
                >
                  <FaCamera />
                </button>

                <LogoUploadModal
                  logoModal={logoModal}
                  setLogoModal={setLogoModal}
                />
              </div>
            </div>

            <div className="sm:pt-2">
              <h1 className="sm:text-2xl text-neutral font-medium flex items-center gap-1">
                {seller?.shopName}
                {seller?.verify ? (
                  <MdOutlineVerified className="text-base text-green-500" />
                ) : (
                  <LuShieldClose className="text-base text-red-500" />
                )}
              </h1>
              <div className="mt-1 flex items-center gap-4 text-neutral-content text-[11px] sm:text-[13px]">
                <div className="flex items-center gap-1">
                  <p>Follows ({seller?.follow})</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 pt-4 border-t">
        {/* Personal Info */}

        {profileUpdate ? (
          <ProfileForm
            sellerId={sellerId}
            seller={seller}
            setProfileUpdate={setProfileUpdate}
          />
        ) : (
          <>
            <div className="border p-3 rounded">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm">Shop Name</p>
                  <p className="mt-1 border px-2 py-1 rounded text-[15px] bg-gray-50">
                    {seller?.shopName}
                  </p>
                </div>

                <div>
                  <p className="text-sm">Owner Name</p>
                  <p className="mt-1 border px-2 py-1 rounded text-[15px] bg-gray-50">
                    {seller?.name}
                  </p>
                </div>

                <div>
                  <p className="text-sm">Phone Number</p>
                  <p className="mt-1 border px-2 py-1 rounded text-[15px] bg-gray-50">
                    {seller?.phone}
                  </p>
                </div>

                <div>
                  <p className="text-sm">Email Address</p>
                  <p className="mt-1 border px-2 py-1 rounded text-[15px] bg-gray-50">
                    {seller?.email}
                  </p>
                </div>

                <div>
                  <p className="text-sm">Country</p>
                  <p className="mt-1 border px-2 py-1 rounded text-[15px] bg-gray-50">
                    {seller?.country}
                  </p>
                </div>

                <div>
                  <p className="text-sm">City</p>
                  <p className="mt-1 border px-2 py-1 rounded text-[15px] bg-gray-50">
                    {seller?.city ? seller?.city : "N/A"}
                  </p>
                </div>

                <div>
                  <p className="text-sm">Area</p>
                  <p className="mt-1 border px-2 py-1 rounded text-[15px] bg-gray-50">
                    {seller?.area ? seller?.area : "N/A"}
                  </p>
                </div>

                <div>
                  <p className="text-sm">State</p>
                  <p className="mt-1 border px-2 py-1 rounded text-[15px] bg-gray-50">
                    {seller?.state ? seller?.state : "N/A"}
                  </p>
                </div>

                <div>
                  <p className="text-sm">Full Address</p>
                  <p className="mt-1 border px-2 py-1 rounded text-[15px] bg-gray-50">
                    {seller?.fullAddress}
                  </p>
                </div>

                <div>
                  <p className="text-sm">Store Link</p>
                  <Link
                    to={seller?.storeLink}
                    target="_blank"
                    className="block mt-1 border px-2 py-1 rounded text-[15px] bg-gray-50"
                  >
                    {seller?.storeLink}
                  </Link>
                </div>
              </div>
            </div>

            <div className="mt-4">
              <button
                onClick={() => setProfileUpdate(true)}
                className="primary_btn"
              >
                Update Profile
              </button>
            </div>
          </>
        )}

        {/* <div className="mt-4 border p-3 rounded grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm">ID Name</p>
            <p className="mt-1 border px-2 py-1 rounded text-[15px] bg-gray-50">
              {seller?.idName}
            </p>
          </div>

          <div>
            <p className="text-sm">ID Number</p>
            <p className="mt-1 border px-2 py-1 rounded text-[15px] bg-gray-50">
              {seller?.idNumber}
            </p>
          </div>

          <div>
            <p className="text-sm">ID Photo</p>
            <img
              src={`${import.meta.env.VITE_BACKEND_URL}/seller/profile/${
                seller?.idCard
              }`}
              alt=""
              className="mt-1 rounded"
            />
          </div>
        </div> */}
      </div>
    </section>
  );
}
