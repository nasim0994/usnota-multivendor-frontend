import React from "react";
import { useGetSellerMobileAppQuery } from "../../../Redux/admin/sellerPage/sellerMobileAppApi";
import { Link } from "react-router-dom";

export default function MobileApp() {
  const { data, isLoading } = useGetSellerMobileAppQuery();
  const mobileApp = data?.data[0];

  if (isLoading) {
    return <div className="h-32 lg:h-60 w-full bg-gray-300"></div>;
  }

  return (
    <div className="py-10">
      <div className="bg-gradient-to-r from-[#1E1436] to-primary md:h-96">
        <div className="w-[95%] xl:w-[1280px] mx-auto">
          <div className="md:flex justify-between py-10">
            <div className="md:w-[70%] text-base-100">
              <p>{mobileApp?.title}</p>
              <h6 className="text-4xl font-semibold">{mobileApp?.mainTitle}</h6>
              <p className="mt-4 w-4/5 text-[17px]">{mobileApp?.description}</p>

              <Link to={mobileApp?.appLink} target="_blank">
                <img
                  src="/images/play_store.png"
                  alt=""
                  className="w-44 mt-8"
                />
              </Link>
            </div>

            <div className="md:w-[30%]">
              <img
                src={`${import.meta.env.VITE_BACKEND_URL}/sellerBanner/${
                  mobileApp?.image
                }`}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
