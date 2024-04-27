import { Link } from "react-router-dom";
import {
  MdOutlineCategory,
  MdOutlineDashboard,
  MdMonitor,
  MdOutlineSettings,
} from "react-icons/md";
import { SiBrandfolder } from "react-icons/si";
import { FaUsers, FaRegImage, FaUserShield, FaStore } from "react-icons/fa";
import { BiSolidShoppingBags } from "react-icons/bi";
import SidebarItems from "./SidebarItems";
import { useGetMainLogoQuery } from "../../../Redux/logo/logoApi";
import { VscPreview } from "react-icons/vsc";
import { IoMdSettings } from "react-icons/io";
import { CiSearch } from "react-icons/ci";

import { useGetBusinessInfoQuery } from "../../../Redux/businessInfoApi/businessInfoApi";

const adminSidebarItems = [
  {
    icon: <MdOutlineDashboard />,
    title: "Dashbaord",
    path: "/admin/dashboard",
  },
  {
    icon: <MdOutlineCategory />,
    title: "Category",
    subMenu: [
      {
        title: "Categories",
        path: "/admin/category/categories",
      },
      {
        title: "Sub Categories",
        path: "/admin/category/sub-categories",
      },
      {
        title: "Sub SubCategories",
        path: "/admin/category/sub-sub-categories",
      },
    ],
  },
  {
    icon: <SiBrandfolder />,
    title: "Brand",
    path: "/admin/brands",
  },
  {
    icon: <BiSolidShoppingBags />,
    title: "Orders",
    path: "/admin/order/all-orders",
  },
  // {
  //   icon: <MdFlashOn />,
  //   title: "Flash Deal",
  //   path: "/admin/flash-deal",
  // },
  {
    icon: <VscPreview />,
    title: "Review",
    path: "/admin/reviews",
  },
  {
    icon: <FaUsers />,
    title: "Customers",
    path: "/admin/customer/all-customers",
  },
  {
    icon: <FaUserShield />,
    title: "Administrator",
    path: "/admin/administrator/all-administrator",
  },
  {
    icon: <FaStore />,
    title: "Seller",
    subMenu: [
      {
        title: "All Seller",
        path: "/admin/seller/all-sellers",
      },
    ],
  },
  {
    icon: <FaRegImage />,
    title: "Banner",
    subMenu: [
      {
        title: "Main Banner",
        path: "/admin/ecommerce-setting/banner",
      },
      {
        title: "Top Campaign Banner",
        path: "/admin/ecommerce-setting/top-campaign-banner",
      },
      {
        title: "Campaign Banner",
        path: "/admin/ecommerce-setting/campaign-banner",
      },
    ],
  },
  {
    icon: <MdOutlineSettings />,
    title: "E-commerce Setting",
    subMenu: [
      {
        title: "Coupon",
        path: "/admin/ecommerce-setting/coupons",
      },
      {
        title: "Shipping Configuration",
        path: "/admin/ecommerce-setting/shipping-configuration",
      },
    ],
  },
  {
    icon: <IoMdSettings />,
    title: "General Setting",
    slug: "general-setting",
    subMenu: [
      {
        title: "Profile",
        path: "/admin/general-setting/profile",
      },
      {
        title: "Business Info",
        path: "/admin/general-setting/business-info",
      },
      {
        title: "Themes",
        path: "/admin/general-setting/themes",
      },
    ],
  },
  {
    icon: <MdMonitor />,
    title: "Front-End Setting",
    subMenu: [
      {
        title: "Logo",
        path: "/admin/front-end/logo",
      },
      {
        title: "Favicon",
        path: "/admin/front-end/favicon",
      },
      // {
      //   title: "About Us",
      //   path: "/admin/front-end/about-us",
      // },
      {
        title: "Contact Us",
        path: "/admin/front-end/contact-us",
      },
      {
        title: "Seller Page",
        subSubMenu: [
          {
            title: "Banner",
            path: "/admin/front-end/seller-page/banner",
          },
          {
            title: "Why Sell Here?",
            path: "/admin/front-end/seller-page/why-sell-here",
          },
          {
            title: "Mobile App",
            path: "/admin/front-end/seller-page/mobile-app",
          },
          {
            title: "FAQ",
            path: "/admin/front-end/seller-page/seller-faq",
          },
        ],
      },
    ],
  },
  {
    icon: <CiSearch className="text-lg" />,
    title: "SEO Setting",
    path: "/admin/seo-setting",
  },
];

export default function AdminSidebar() {
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
            className="w-40 mx-auto h-12"
          />
        </Link>

        <nav>
          <ul>
            {adminSidebarItems?.map((item, i) => (
              <SidebarItems key={i} item={item} />
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
