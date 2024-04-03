import { Link } from "react-router-dom";
import { MdOutlineDashboard, MdOutlineVerifiedUser } from "react-icons/md";
import { BsCart4 } from "react-icons/bs";
import { BiSolidShoppingBags } from "react-icons/bi";
import SidebarItems from "./SidebarItems";
import { useGetSellerLogoQuery } from "../../../Redux/logo/logoApi";
import { VscPreview } from "react-icons/vsc";
import { IoMdSettings } from "react-icons/io";

const adminSidebarItems = [
  {
    icon: <MdOutlineDashboard />,
    title: "Dashbaord",
    path: "/seller/dashboard",
  },
  {
    icon: <MdOutlineVerifiedUser />,
    title: "Verification",
    path: "/seller/verification",
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
  const { data } = useGetSellerLogoQuery();

  return (
    <div className="h-full flex flex-col justify-between">
      <div>
        <Link to="/seller/dashboard" className="block border-b py-4">
          <img
            src={
              data?.data[0]?.logo === null
                ? "/images/logo/logo.png"
                : `${import.meta.env.VITE_BACKEND_URL}/logo/${
                    data?.data[0]?.logo
                  }`
            }
            alt=""
            className="w-48 mx-auto"
          />
        </Link>

        <nav>
          <ul className="text-neutral-content">
            {adminSidebarItems?.map((item, i) => (
              <SidebarItems key={i} item={item} />
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
