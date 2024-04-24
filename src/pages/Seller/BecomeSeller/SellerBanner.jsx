import { useState } from "react";
import SellerForm from "./Form/SellerForm";
import { useGetSellerBannerQuery } from "../../../Redux/admin/sellerPage/sellerBannerApi";

export default function SellerBanner() {
  const [formToggle, setFormToggle] = useState("login");
  const { data, isLoading } = useGetSellerBannerQuery();
  const banner = data?.data[0];

  const imageUrl = `${import.meta.env.VITE_BACKEND_URL}/sellerBanner/${
    data?.data[0]?.image
  }`;

  if (isLoading) {
    return <div className="h-40 lg:min-h-[90vh] w-full bg-gray-300"></div>;
  }

  return (
    <div
      style={{
        "--image-url": `linear-gradient(310deg, #000000ab, #000000c9) , url(${imageUrl})`,
      }}
      className={`merchantBanner py-10 lg:min-h-[90vh] lg:flex justify-center items-center bg-[image:var(--image-url)]`}
    >
      <div className="container">
        <div className="lg:grid grid-cols-2 gap-40 justify-between items-center text-base-100">
          <div className="mb-10 lg:mb-0">
            <h1 className="text-4xl font-semibold mb-4">{banner?.title}</h1>
            <p>{banner?.description}</p>
            <button
              onClick={() => setFormToggle("signup")}
              className="px-8 py-2 bg-primary mt-4 rounded scale-[.98] hover:scale-[1] duration-300"
            >
              Signup
            </button>
          </div>

          {/* Login/ Signup */}
          <div className="bg-base-100 text-neutral px-4 py-10 rounded-lg md:w-3/4 mx-auto">
            <div className="text-center mb-4">
              <h2 className="text-2xl font-semibold">Welcome</h2>
              <p className="text-sm">
                To Shoping Hobe Seller Login/Registration Panel
              </p>
            </div>

            {/* Seller Signup/login Form */}
            <SellerForm formToggle={formToggle} setFormToggle={setFormToggle} />
          </div>
        </div>
      </div>
    </div>
  );
}
