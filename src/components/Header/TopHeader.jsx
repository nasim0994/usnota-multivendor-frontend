import { Link } from "react-router-dom";
import { BsFacebook, BsTelephoneInbound, BsYoutube } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";
import { MdOutlineEmail } from "react-icons/md";

const TopHeader = () => {
  return (
    <div className="hidden lg:block bg-primary py-1.5 border-b text-base-100">
      <div className="container mx-auto font-medium">
        <div className="flex justify-between items-center text-sm">
          <div className="flex items-center">
            <ul className="flex items-center gap-2">
              <li>
                <Link
                  to="https://www.facebook.com/beautyqueen5962"
                  target="_blank"
                  className="hover:text-base-100 duration-200"
                >
                  <BsFacebook />
                </Link>
              </li>
              <li>
                <Link
                  to="https://api.whatsapp.com/send?phone=8801768765962"
                  target="_blank"
                >
                  <IoLogoWhatsapp className="text-[15px]" />
                </Link>
              </li>
              <li>
                <Link to="">
                  <AiFillInstagram className="text-base mr-1" />
                </Link>
              </li>
              <li>
                <Link to="">
                  <BsYoutube className="text-[15px] mt-px" />
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex items-center gap-6 ">
            <ul className="flex gap-4 items-center font-medium">
              <li className="border-r pr-3">
                <Link to="tel: 01706260994" className="flex items-center gap-2">
                  <BsTelephoneInbound />
                  +8801706-260994
                </Link>
              </li>

              <li>
                <Link to="" className="flex items-center gap-1.5">
                  <MdOutlineEmail className="text-base" />
                  nuaim.emanager@gmail.com
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
