import { Link } from "react-router-dom";
import { BsPerson, BsTelephoneInbound } from "react-icons/bs";
import { MdOutlineMail } from "react-icons/md";
import { useSelector } from "react-redux";

export default function TopHeader() {
  const { loggedSeller } = useSelector((state) => state.seller);

  return (
    <div className="hidden lg:block py-2 bg-primary text-base-100">
      <div className="container">
        <div className="flex justify-between items-center text-[13px]">
          <div className="flex items-center">
            <Link
              to="tel: +8801906-198021"
              className="flex items-center gap-2 hover:text-gray-200 duration-300"
            >
              <BsTelephoneInbound />
              <p>+8801906-198021</p>
            </Link>
            <div className="divider divider-horizontal mx-1"></div>
            <Link
              to="mailto: abc@example.com"
              className="flex items-center gap-2 hover:text-gray-200 duration-300"
            >
              <MdOutlineMail className="text-base" />
              <p>suport@pmall.com</p>
            </Link>
          </div>
          <div className="flex items-center gap-6">
            {!loggedSeller?.success || loggedSeller === undefined ? (
              <Link
                to="/seller"
                target="_blank"
                className="flex items-center gap-1 hover:text-gray-200 duration-300"
              >
                <BsPerson className="text-base" />
                <p className="pt-1">Become a Seller</p>
              </Link>
            ) : (
              loggedSeller?.success &&
              loggedSeller?.data?.role == "seller" && (
                <Link
                  to="/seller/dashboard"
                  target="_blank"
                  className="flex items-center gap-1 hover:text-gray-200 duration-300"
                >
                  <BsPerson className="text-base" />
                  <p className="pt-1">Sell on eMall</p>
                </Link>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
