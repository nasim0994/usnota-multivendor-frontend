import { Link } from "react-router-dom";
import {
  MdOutlineCategory,
  MdOutlineDashboard,
  MdMonitor,
  MdOutlineSettings,
} from "react-icons/md";
import { SiBrandfolder } from "react-icons/si";
import { RiAdminFill } from "react-icons/ri";
import { BsCart4 } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";
import { BiSolidShoppingBags } from "react-icons/bi";
import SidebarItems from "./SidebarItems";
import { useGetMainLogoQuery } from "../../../Redux/logo/logoApi";
import { VscPreview } from "react-icons/vsc";
import { IoMdSettings } from "react-icons/io";
import { MdFlashOn } from "react-icons/md";
import { CiSearch } from "react-icons/ci";

import { useGetBusinessInfoQuery } from "../../../Redux/businessInfoApi/businessInfoApi";

const adminSidebarItems = [
  {
    icon: <MdOutlineDashboard />,
    title: "Dashbaord",
    path: "/seller/dashboard",
  },
  {
    icon: <BsCart4 />,
    title: "Product",
    subMenu: [
      {
        title: "Add New Product",
        path: "/seller/product/add-product",
      },
      {
        title: "All Products",
        path: "/seller/product/all-products",
      },
    ],
  },
  {
    icon: <BiSolidShoppingBags />,
    title: "Order",
    subMenu: [
      {
        title: "All Orders",
        path: "/seller/order/all-orders",
      },
    ],
  },
  {
    icon: <VscPreview />,
    title: "Review",
    path: "/seller/reviews",
  },
  {
    icon: <IoMdSettings />,
    title: "General Setting",
    slug: "general-setting",
    subMenu: [
      {
        title: "Profile",
        path: "/seller/general-setting/profile",
      },
    ],
  },
];

export default function SellerSidebar() {
  const { data } = useGetMainLogoQuery();
  const { data: businessInfo } = useGetBusinessInfoQuery();

  return (
    <div className="h-full flex flex-col justify-between">
      <div>
        <Link to="/admin/dashboard" className="block border-b py-4">
          <img
            src={
              data?.data[0]?.logo === null
                ? "/images/logo/logo.png"
                : `${import.meta.env.VITE_BACKEND_URL}/logo/${
                    data?.data[0]?.logo
                  }`
            }
            alt=""
            className="w-28 mx-auto h-16"
          />
        </Link>

        <nav className="admin_siderbar">
          <ul>
            {adminSidebarItems?.map((item, i) => (
              <SidebarItems key={i} item={item} />
            ))}
          </ul>
        </nav>
      </div>

      <div className="bg-[#445360] p-2 flex justify-between items-center font-light">
        <p>Visit Front-End</p>
        <Link to="/" target="_blank" className="text-primary hover:underline">
          {businessInfo?.data[0]?.companyName}
        </Link>
      </div>
    </div>
  );
}
