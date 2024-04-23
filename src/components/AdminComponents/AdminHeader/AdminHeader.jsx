import { useEffect, useState } from "react";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";
import { userLogout } from "../../../Redux/user/userSlice";
import { TbWorldWww } from "react-icons/tb";

export default function AdminHeader({ setSidebar }) {
  const [dropdown, setDropdown] = useState(false);
  const { pathname } = useLocation();
  const { loggedUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    window.addEventListener("click", (e) => {
      if (!e.target.closest(".d_btn")) {
        setDropdown(false);
      }
    });
  }, []);

  return (
    <header className="py-3 px-6 bg-base-100 text-neutral shadow">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setSidebar(true)}
            className="sidebar_btn lg:hidden"
          >
            <HiOutlineMenuAlt2 className="text-xl" />
          </button>

          <div className="tooltip tooltip-bottom" data-tip="Visit Front-End">
            <Link to="/" target="_blank">
              <TbWorldWww className="text-2xl" />
            </Link>
          </div>
        </div>

        <div className="relative">
          <button
            onClick={() => setDropdown(!dropdown)}
            className="d_btn flex items-center gap-1"
          >
            <FaRegUserCircle className="text-lg" />
            {loggedUser?.data?.name}
          </button>

          {dropdown && (
            <div className="absolute top-[140%] right-0 w-40 bg-base-100 rounded shadow p-2">
              <Link
                to="/admin/general-setting/profile"
                className="block hover:bg-gray-100 w-full text-start px-2 py-1 rounded"
              >
                Profile
              </Link>
              <button
                onClick={() => dispatch(userLogout())}
                className="hover:bg-gray-100 text-red-500 w-full text-start px-2 py-1 rounded"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
