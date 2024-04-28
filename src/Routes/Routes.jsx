import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import AboutUs from "../pages/AboutUs/AboutUs";
import Cart from "../pages/Cart/Cart";
import FAQ from "../pages/FAQ/FAQ";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import Shop from "../pages/Shop/Shop";
import Signup from "../pages/Signup/Signup";

import AccountLayout from "../Layout/AccountLayout";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import EditePeofile from "../pages/Account/EditePeofile/EditePeofile";
import Orders from "../pages/Account/Orders/Orders";
import Profile from "../pages/Account/Profile/Profile";
import Setting from "../pages/Account/Setting/Setting";
import Wishlist from "../pages/Account/Wishlist/Wishlist";
import Checkout from "../pages/Checkout/Checkout";
import PaymentResult from "../pages/Checkout/PaymentResult";

import OrderDetailsPage from "../pages/Account/OrderDetails/OrderDetails";
import MyReviews from "../pages/Account/Reviews/MyReviews";

//------------------------Admin Layout
import AdminLayout from "../Layout/AdminLayout/AdminLayout";
import AdminRoute from "../PrivateRoute/AdminRoute";

//---------------Dashboard
import Dashboard from "../pages/Admin/Dashboard/Dashboard";

//---------------Category
import AddCategory from "../pages/Admin/Category/Categories/AddCategory";
import AllCategories from "../pages/Admin/Category/Categories/AllCategories";
import EditCategory from "../pages/Admin/Category/Categories/Editcategory";

import AddSubCategory from "../pages/Admin/Category/SubCategories/AddSubCategory";
import AllSubCategories from "../pages/Admin/Category/SubCategories/AllSubCategories";
import EditSubCategory from "../pages/Admin/Category/SubCategories/EditSubCategory";

import AddSubSubCategory from "../pages/Admin/Category/SubSubCategory/AddSubSubCategory";
import AllSubSubCategory from "../pages/Admin/Category/SubSubCategory/AllSubSubCategory";
import EditSubSubCategory from "../pages/Admin/Category/SubSubCategory/EditSubSubCategory";

//---------------Brand
import AllBrands from "../pages/Admin/Brand/AllBrands";
import AddBrand from "../pages/Admin/Brand/AddBrand";
import EditBrand from "../pages/Admin/Brand/EditBrand";

// //---------------Product
// import AddProduct from "../pages/Admin/Product/AddProduct";
// import ProductList from "../pages/Admin/Product/ProductList";
// import EditProduct from "../pages/Admin/Product/EditProduct";

//---------------Order
import AllOrders from "../pages/Admin/Order/AllOrders";
import OrderDetails from "../pages/Admin/Order/OrderDetails";

//---------------Review
import AllReview from "../pages/Admin/AllReview/AllReview";

//---------------User
import AllUser from "../pages/Admin/User/AllUser";

//---------------Administrator
import AddAdministrator from "../pages/Admin/Administrator/AddAdministrator";
import Administrator from "../pages/Admin/Administrator/Administrator";

//--------------ecommerce-setting
import CouponLists from "../pages/Admin/EcommerceSetting/Coupon/CouponLists";
import AddCoupon from "../pages/Admin/EcommerceSetting/Coupon/AddCoupon";
import EditCoupon from "../pages/Admin/EcommerceSetting/Coupon/EditCoupon";

import Banner from "../pages/Admin/EcommerceSetting/Banner/Banner";
import AddBanner from "../pages/Admin/EcommerceSetting/Banner/AddBanner";
import EditBanner from "../pages/Admin/EcommerceSetting/Banner/EditBanner";

//-----------General Setting
import AdminProfile from "../pages/Admin/GeneralSetting/AdminProfile/AdminProfile";
import Themes from "../pages/Admin/GeneralSetting/Theme/Themes";
import BusinessInfo from "../pages/Admin/GeneralSetting/BusinessInfo/BusinessInfo";

import CampaignBanners from "../pages/Admin/EcommerceSetting/CampaignBanners/CampaignBanners";
import AddCampaignBanner from "../pages/Admin/EcommerceSetting/CampaignBanners/AddCampaignBanner";
import EditCampaignBanner from "../pages/Admin/EcommerceSetting/CampaignBanners/EditCampaignBanner";

//--------------Front-End
import About from "../pages/Admin/FrontEnd/About/About";
import Contact from "../pages/Admin/FrontEnd/Contact/Contact";
import Logo from "../pages/Admin/FrontEnd/Logo/Logo";
import Favicon from "../pages/Admin/FrontEnd/Favicon/Favicon";
import EditAdministrator from "../pages/Admin/Administrator/EditAdmin";

//--------------Flash Deal
import FlashDealList from "../pages/Admin/FlashDeal/FlashDealList";
import AddFlashDeal from "../pages/Admin/FlashDeal/AddFlashDeal";
import TopCampaignBanner from "../pages/Admin/EcommerceSetting/TopCampaignBanner/TopCampaignBanner";
import SEOSetting from "../pages/Admin/SEOSetting/SEOSetting";
import ShippingConfiguration from "../pages/Admin/EcommerceSetting/ShippingConfiguration/ShippingConfiguration";

//-----------------Seller
import BecomeSeller from "../pages/Seller/BecomeSeller/BecomeSeller";

import SellerRoute from "../PrivateRoute/SellerRoute";
import SellerLayout from "../Layout/SellerLayout";

import SellerDashboard from "../pages/Seller/SellerDashboard/SellerDashboard";
import Verification from "../pages/Seller/Verification/Verification";
import Store from "../pages/Seller/Store/Store";

//---------------Product
import ProductList from "../pages/Seller/Product/ProductList";
import AddProduct from "../pages/Seller/Product/AddProduct";
import EditProduct from "../pages/Seller/Product/EditProduct";
import AllSellers from "../pages/Admin/Users/Sellers/AllSellers";
import ViewSeller from "../pages/Admin/Users/Sellers/ViewSeller/ViewSeller";

//---------------Seller
import SellerOrders from "../pages/Seller/Orders/SellerOrders";
import SellerReview from "../pages/Seller/SellerReview/SellerReview";
import SellerProfile from "../pages/Seller/AccountSetting/SellerProfile/SellerProfile";

import SellerContact from "../pages/Seller/Support/SellerContact/SellerContact";
import SellerHelpCenter from "../pages/Seller/Support/SellerHelpCenter/SellerHelpCenter";
import SellerPageBanner from "../pages/Admin/FrontEnd/SellerPage/SellerPageBanner";
import MobileApp from "../pages/Admin/FrontEnd/SellerPage/MobileApp";
import WhySellLists from "../pages/Admin/FrontEnd/SellerPage/WhySell/WhySellLists";
import AddWhySell from "../pages/Admin/FrontEnd/SellerPage/WhySell/AddWhySell";
import EditWhySale from "../pages/Admin/FrontEnd/SellerPage/WhySell/EditWhySale";
import SellerFAQLists from "../pages/Admin/FrontEnd/SellerPage/SellerFAQ/SellerFAQLists";
import AddSellerFAQ from "../pages/Admin/FrontEnd/SellerPage/SellerFAQ/AddSellerFAQ";
import EditSellerFAQ from "../pages/Admin/FrontEnd/SellerPage/SellerFAQ/EditSellerFAQ";
import SellerBalance from "../pages/Seller/Finance/SellerBalance/SellerBalance";
import SellerPayout from "../pages/Seller/Finance/SellerPayout/SellerPayout";
import SellerOrderDetails from "../pages/Seller/Orders/SellerOrderDetails/SellerOrderDetails";
import TrackOrder from "../pages/TrackOrder/TrackOrder";
import SellerPaymentRequest from "../pages/Admin/Users/SellerPaymentRequest/SellerPaymentRequest";

export const routes = createBrowserRouter([
  // ----- Main
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/shops",
        element: <Shop />,
      },
      {
        path: "/shops/:category",
        element: <Shop />,
      },
      {
        path: "/shops/:category/:subCategory",
        element: <Shop />,
      },
      {
        path: "/shops/:category/:subCategory/:subSubCategory",
        element: <Shop />,
      },
      {
        path: "/shops/brand/:brand",
        element: <Shop />,
      },
      {
        path: "/product/:id",
        element: <ProductDetails />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/faq",
        element: <FAQ />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/checkout",
        element: (
          <PrivateRoute>
            <Checkout />
          </PrivateRoute>
        ),
      },
      {
        path: "/payment-result/:transactionId",
        element: (
          <PrivateRoute>
            <PaymentResult />
          </PrivateRoute>
        ),
      },

      //------Seller
      {
        path: "/store/:id",
        element: <Store />,
      },

      //
      {
        path: "/track-order",
        element: <TrackOrder />,
      },
    ],
  },

  // ----- Account
  {
    path: "/account",
    element: (
      <PrivateRoute>
        <AccountLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: "/account/profile",
        element: <Profile />,
      },
      {
        path: "/account/profile/edite",
        element: <EditePeofile />,
      },
      {
        path: "/account/wishlist",
        element: <Wishlist />,
      },
      {
        path: "/account/orders",
        element: <Orders />,
      },
      {
        path: "/account/orders/:id",
        element: <OrderDetailsPage />,
      },
      {
        path: "/account/reviews",
        element: <MyReviews />,
      },
      {
        path: "/account/setting",
        element: <Setting />,
      },
    ],
  },

  // ----- Admin
  {
    path: "/admin",
    element: (
      <AdminRoute>
        <AdminLayout />
      </AdminRoute>
    ),
    children: [
      {
        path: "/admin",
        element: <Dashboard />,
      },
      {
        path: "/admin/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/admin/category/categories",
        element: <AllCategories />,
      },
      {
        path: "/admin/category/add-category",
        element: <AddCategory />,
      },
      {
        path: "/admin/category/edit/:id",
        element: <EditCategory />,
      },
      {
        path: "/admin/category/sub-categories",
        element: <AllSubCategories />,
      },
      {
        path: "/admin/category/add-sub-category",
        element: <AddSubCategory />,
      },
      {
        path: "/admin/category/edit-sub-category/:id",
        element: <EditSubCategory />,
      },
      {
        path: "/admin/category/sub-sub-categories",
        element: <AllSubSubCategory />,
      },
      {
        path: "/admin/category/add-sub-sub-category",
        element: <AddSubSubCategory />,
      },
      {
        path: "/admin/category/edit-sub-sub-category/:id",
        element: <EditSubSubCategory />,
      },
      {
        path: "/admin/brands",
        element: <AllBrands />,
      },
      {
        path: "/admin/add-brand",
        element: <AddBrand />,
      },
      {
        path: "/admin/edit-brand/:id",
        element: <EditBrand />,
      },
      {
        path: "/admin/order/all-orders",
        element: <AllOrders />,
      },
      {
        path: "/admin/order/:id",
        element: <OrderDetails />,
      },
      {
        path: "/admin/customer/all-customers",
        element: <AllUser />,
      },

      //--------------Flash Deal
      // {
      //   path: "/admin/flash-deal/add",
      //   element: <AddFlashDeal />,
      // },
      // {
      //   path: "/admin/flash-deal",
      //   element: <FlashDealList />,
      // },

      //--------------Review
      {
        path: "/admin/reviews",
        element: <AllReview />,
      },

      //--------------Sellers
      {
        path: "/admin/seller/all-sellers",
        element: <AllSellers />,
      },
      {
        path: "/admin/seller/view/:id",
        element: <ViewSeller />,
      },

      {
        path: "/admin/seller/payment-request",
        element: <SellerPaymentRequest />,
      },

      //--------------Administrator
      {
        path: "/admin/administrator/all-administrator",
        element: <Administrator />,
      },
      {
        path: "/admin/administrator/add-administrator",
        element: <AddAdministrator />,
      },
      {
        path: "/admin/administrator/edit-administrator/:id",
        element: <EditAdministrator />,
      },

      //--------------ecommerce-setting
      {
        path: "/admin/ecommerce-setting/coupons",
        element: <CouponLists />,
      },
      {
        path: "/admin/ecommerce-setting/coupons/add-coupon",
        element: <AddCoupon />,
      },
      {
        path: "/admin/ecommerce-setting/coupons/edit-coupon/:id",
        element: <EditCoupon />,
      },

      {
        path: "/admin/ecommerce-setting/shipping-configuration",
        element: <ShippingConfiguration />,
      },

      //-------------Banner
      {
        path: "/admin/ecommerce-setting/banner",
        element: <Banner />,
      },
      {
        path: "/admin/ecommerce-setting/add-banner",
        element: <AddBanner />,
      },
      {
        path: "/admin/ecommerce-setting/edit-banner/:id",
        element: <EditBanner />,
      },

      //---------Top Campaign Banner
      {
        path: "/admin/ecommerce-setting/top-campaign-banner",
        element: <TopCampaignBanner />,
      },

      //---------CampaignBanner
      {
        path: "/admin/ecommerce-setting/campaign-banner",
        element: <CampaignBanners />,
      },
      {
        path: "/admin/ecommerce-setting/add-campaign-banner",
        element: <AddCampaignBanner />,
      },
      {
        path: "/admin/ecommerce-setting/edit-campaign-banner/:id",
        element: <EditCampaignBanner />,
      },

      //----------General Setting
      {
        path: "/admin/general-setting/profile",
        element: <AdminProfile />,
      },
      {
        path: "/admin/general-setting/business-info",
        element: <BusinessInfo />,
      },
      {
        path: "/admin/general-setting/themes",
        element: <Themes />,
      },

      //--------------Front-End
      {
        path: "/admin/front-end/logo",
        element: <Logo />,
      },
      {
        path: "/admin/front-end/favicon",
        element: <Favicon />,
      },
      {
        path: "/admin/front-end/about-us",
        element: <About />,
      },
      {
        path: "/admin/front-end/contact-us",
        element: <Contact />,
      },
      //-----Seller Page
      {
        path: "/admin/front-end/seller-page/banner",
        element: <SellerPageBanner />,
      },
      {
        path: "/admin/front-end/seller-page/why-sell-here",
        element: <WhySellLists />,
      },
      {
        path: "/admin/front-end/seller-page/add-why-sell",
        element: <AddWhySell />,
      },
      {
        path: "/admin/front-end/seller-page/edit-why-sell/:id",
        element: <EditWhySale />,
      },

      {
        path: "/admin/front-end/seller-page/mobile-app",
        element: <MobileApp />,
      },

      {
        path: "/admin/front-end/seller-page/seller-faq",
        element: <SellerFAQLists />,
      },
      {
        path: "/admin/front-end/seller-page/add-seller-faq",
        element: <AddSellerFAQ />,
      },
      {
        path: "/admin/front-end/seller-page/edit-seller-faq/:id",
        element: <EditSellerFAQ />,
      },

      //----------SEO Setting
      {
        path: "/admin/seo-setting",
        element: <SEOSetting />,
      },
    ],
  },

  //-----------Seller
  {
    path: "/seller",
    element: <BecomeSeller />,
  },
  {
    path: "/seller",
    element: (
      <SellerRoute>
        <SellerLayout />
      </SellerRoute>
    ),
    children: [
      {
        path: "/seller/dashboard",
        element: <SellerDashboard />,
      },
      {
        path: "/seller/verification",
        element: <Verification />,
      },

      //--------Product
      {
        path: "/seller/product/all-products",
        element: <ProductList />,
      },
      {
        path: "/seller/product/add-product",
        element: <AddProduct />,
      },
      {
        path: "/seller/product/edit-product/:id",
        element: <EditProduct />,
      },

      //--------order
      {
        path: "/seller/order/all-orders",
        element: <SellerOrders />,
      },
      {
        path: "/seller/order/:id",
        element: <SellerOrderDetails />,
      },

      //--------Review
      {
        path: "/seller/review/all-reviews",
        element: <SellerReview />,
      },

      //--------Account & Setting
      {
        path: "/seller/account-setting/profile",
        element: <SellerProfile />,
      },

      //--------Support
      {
        path: "/seller/support/help-center",
        element: <SellerHelpCenter />,
      },
      {
        path: "/seller/support/contact-us",
        element: <SellerContact />,
      },

      //--------Finance
      {
        path: "/seller/finance/payout",
        element: <SellerPayout />,
      },
      {
        path: "/seller/finance/balance",
        element: <SellerBalance />,
      },
    ],
  },
]);
