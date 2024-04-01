import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { AiOutlineLogin } from "react-icons/ai";
import { BiUser } from "react-icons/bi";
import { BsPerson, BsTelephoneInbound } from "react-icons/bs";
import { CgLogOff } from "react-icons/cg";
import { HiOutlineClipboardCheck } from "react-icons/hi";
import { MdOutlineMail } from "react-icons/md";
import { TbAddressBook } from "react-icons/tb";
import SignUpInModal from "../signUpModal/SignUpInModal";

export default function TopHeader() {
  const [accountDropdown, setAccountDropdown] = useState(false);
  const [formToggle, setFormToggle] = useState("login");

  useEffect(() => {
    document.addEventListener("click", (e) => {
      if (!e.target.closest("#topAccount")) {
        setAccountDropdown(false);
      }
    });
  }, []);

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
            <Link
              to="/seller/verification"
              target="_blank"
              className="flex items-center gap-1 hover:text-gray-200 duration-300"
            >
              <BsPerson className="text-base" />
              <p className="pt-1">Sell on eMall</p>
            </Link>
            <Link
              to="/seller"
              target="_blank"
              className="flex items-center gap-1 hover:text-gray-200 duration-300"
            >
              <BsPerson className="text-base" />
              <p className="pt-1">Become a Seller</p>
            </Link>

            <ul>
              <li>
                <label
                  onClick={() => setFormToggle("login")}
                  htmlFor="signUpIn"
                  className="flex items-center gap-1 hover:text-gray-200 duration-300 cursor-pointer"
                >
                  <AiOutlineLogin /> Signup/Login
                </label>

                <SignUpInModal
                  formToggle={formToggle}
                  setFormToggle={setFormToggle}
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
