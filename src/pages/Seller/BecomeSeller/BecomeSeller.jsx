import "../../../Style/Seller.css";
import { Link } from "react-router-dom";
import Footer from "../../../components/Footer/Footer";
import { useGetSellerLogoQuery } from "../../../Redux/logo/logoApi";
import FAQ from "./FAQ";
import SellerBanner from "./SellerBanner";
import MobileApp from "./MobileApp";
import WhySellHere from "./WhySellHere";

export default function BecomeSeller() {
  const { data } = useGetSellerLogoQuery();

  return (
    <div>
      {/* Header */}
      <header className="py-2 bg-base-100">
        <div className="container">
          <Link to="/seller">
            <img
              src={
                data?.data[0]?.logo === null
                  ? "/images/logo/seller-logo.png"
                  : `${import.meta.env.VITE_BACKEND_URL}/logo/${
                      data?.data[0]?.logo
                    }`
              }
              alt=""
              className="w-48"
            />
          </Link>
        </div>
      </header>

      {/* Banner */}
      <SellerBanner />

      {/* Why Sell Here */}
      <WhySellHere />

      {/* mobile app banner */}
      <MobileApp />

      {/* Simple Step to Start Selling */}
      <div className="py-10">
        <div className="w-[95%] xl:w-[1280px] mx-auto">
          <h1 className="text-4xl font-bold">5 Simple Step to Start Selling</h1>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-10">
            <div>
              <img src="/images/step/signup.png" alt="" className="w-24 mb-2" />
              <h2 className="text-lg font-medium">Signup for Free</h2>
              <p className="text-sm mt-2">
                Create your account through our website or mobile app with just
                your phone number
              </p>
            </div>

            <div>
              <img
                src="/images/step/addinfo.png"
                alt=""
                className="w-14 mb-4"
              />
              <h2 className="text-lg font-medium">Add Profile Information</h2>
              <p className="text-sm mt-2">
                Complete your profile by providing your email and store name so
                that we can identify you
              </p>
            </div>

            <div>
              <img
                src="/images/step/addAddress.png"
                alt=""
                className="w-14 mb-4"
              />
              <h2 className="text-lg font-medium"> Add Address Information</h2>
              <p className="text-sm mt-2">
                Provide all address details of your business
              </p>
            </div>

            <div>
              <img
                src="/images/step/bankinfo.png"
                alt=""
                className="w-14 mb-4"
              />
              <h2 className="text-lg font-medium">Add ID & Bank Information</h2>
              <p className="text-sm mt-2">
                Add in your ID & Business related details. Include necessary
                bank information for payments
              </p>
            </div>

            <div>
              <img
                src="/images/step/addProducts.png"
                alt=""
                className="w-14 mb-3"
              />
              <h2 className="text-lg font-medium">List Products</h2>
              <p className="text-sm mt-2">
                Add products to your store through seller center. Start selling
                as soon as your products go live after going through quality
                control
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <FAQ />

      <Footer />
    </div>
  );
}
