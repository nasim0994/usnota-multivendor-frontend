import { Link } from "react-router-dom";
import { BsPerson, BsTelephoneInbound } from "react-icons/bs";
import { MdOutlineMail } from "react-icons/md";
import { FiSend } from "react-icons/fi";
import { useSelector } from "react-redux";
import { useGetContactQuery } from "../../Redux/contact/contactApi";

export default function TopHeader() {
  const { loggedSeller } = useSelector((state) => state.seller);
  const { data: contact, isLoading } = useGetContactQuery();
  const contactInfo = contact?.data[0];

  return (
    <div className="hidden lg:block py-1 bg-primary text-base-100">
      <div className="container">
        <div className="flex justify-between items-center text-[13px]">
          <div className="flex items-center">
            <Link
              to="tel: +8801906-198021"
              className="flex items-center gap-2 hover:text-gray-200 duration-300"
            >
              <BsTelephoneInbound />
              <p>{contactInfo?.phone}</p>
            </Link>
            <div className="divider divider-horizontal mx-1"></div>
            <Link
              to="mailto: abc@example.com"
              className="flex items-center gap-2 hover:text-gray-200 duration-300"
            >
              <MdOutlineMail className="text-base" />
              <p>{isLoading ? "example@gmail.com" : contactInfo?.email}</p>
            </Link>
          </div>
          <div className="flex items-center gap-6">
            <Link
              to="/tracj-order"
              className="flex items-center gap-1 hover:text-gray-200 duration-300"
            >
              <FiSend className="text-base" />
              <p className="pt-1">Track Order</p>
            </Link>
            <Link
              to="/seller"
              target="_blank"
              className="flex items-center gap-1 hover:text-gray-200 duration-300"
            >
              <BsPerson className="text-base" />
              <p className="pt-1">Become a Seller</p>
            </Link>
            {loggedSeller?.success && loggedSeller?.data?.role == "seller" && (
              <Link
                to="/seller/dashboard"
                target="_blank"
                className="flex items-center gap-1 hover:text-gray-200 duration-300"
              >
                <BsPerson className="text-base" />
                <p className="pt-1">Sell on Shoping Hobe</p>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
