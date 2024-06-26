import { Link } from "react-router-dom";
import { useAllBrandsQuery } from "../../../Redux/brand/brandApi";
import { useGetCategoriesQuery } from "../../../Redux/category/categoryApi";
import { useGetSellerOrderByIdQuery } from "../../../Redux/order/orderApi";
import {
  useGetAllProductsQuery,
  useGetProductBySellerIdQuery,
} from "../../../Redux/product/productApi";
import { useGetSubCategoriesQuery } from "../../../Redux/subCategory/subCategoryApi";
import { useGetSubSubCategoriesQuery } from "../../../Redux/subSubCategory/subSubCategoryApi";
import { FaBoxOpen, FaCartPlus } from "react-icons/fa";
import { FaMoneyBillTrendUp } from "react-icons/fa6";

import { BiCategoryAlt } from "react-icons/bi";
import { SiBrandfolder } from "react-icons/si";
import { useSelector } from "react-redux";
import OrderTable from "../../../components/SellerComponents/Orders/OrderTable";
import Pagination from "../../../components/Pagination/Pagination";
import { useState } from "react";
import { useGetReviewsBySellerIdQuery } from "../../../Redux/review/reviewApi";
import { GoCodeReview } from "react-icons/go";

export default function SellerDashboard() {
  const { loggedSeller } = useSelector((state) => state.seller);
  const sellerId = loggedSeller?.data?._id;

  const [currentPage, setCurrentPage] = useState(1);
  const query = {};
  query["page"] = currentPage;
  query["limit"] = 5;

  const { data: products } = useGetProductBySellerIdQuery({ id: sellerId });
  const { data: orders } = useGetSellerOrderByIdQuery({ sellerId, query });
  const { data: category } = useGetCategoriesQuery();
  const { data: subCategory } = useGetSubCategoriesQuery();
  const { data: subSubCategory } = useGetSubSubCategoriesQuery();
  const { data: brand } = useAllBrandsQuery();
  const { data: reviews } = useGetReviewsBySellerIdQuery({ sellerId });

  let totalSell = 0;
  orders?.data?.forEach((item) => {
    item?.products?.forEach((product) => {
      if (product?.productId?.variants?.length > 0) {
        const variant = product?.productId?.variants?.find(
          (variant) =>
            variant?.color == product?.color && variant?.size == product?.size
        );
        if (variant) {
          totalSell +=
            variant?.sellingPrice * product?.quantity -
            parseInt(
              (variant?.sellingPrice * product?.productId?.discount) / 100
            );
        }
      } else {
        totalSell +=
          product?.productId?.sellingPrice * product?.quantity -
          parseInt(
            (product?.productId?.sellingPrice * product?.productId?.discount) /
              100
          );
      }
    });
  });

  // Function to filter data created today
  const filterTodayOrders = () => {
    const today = new Date().toISOString().split("T")[0]; // Get today's date in ISO format
    return orders?.data?.filter((item) => {
      const itemDate = new Date(item.createdAt).toISOString().split("T")[0]; // Get item's creation date in ISO format
      return itemDate === today; // Compare if item's creation date is equal to today's date
    });
  };
  const todayOrders = filterTodayOrders();

  let todaySells = 0;
  todayOrders?.forEach((item) => {
    item?.products?.forEach((product) => {
      if (product?.productId?.variants?.length > 0) {
        const variant = product?.productId?.variants?.find(
          (variant) =>
            variant?.color == product?.color && variant?.size == product?.size
        );
        if (variant) {
          todaySells +=
            variant?.sellingPrice * product?.quantity -
            parseInt(
              (variant?.sellingPrice * product?.productId?.discount) / 100
            );
        }
      } else {
        todaySells +=
          product?.productId?.sellingPrice * product?.quantity -
          parseInt(
            (product?.productId?.sellingPrice * product?.productId?.discount) /
              100
          );
      }
    });
  });

  return (
    <section>
      {/* card */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4">
        <div className="flex justify-between items-center rounded-lg shadow p-4 bg-base-100">
          <div>
            <p className="text-neutral font-dinMedium">Total Products</p>
            <h3 className="text-primary font-bold">{products?.data?.length}</h3>
          </div>
          <div className="bg-primary text-base-100 w-11 h-11 rounded-lg flex justify-center items-center">
            <FaBoxOpen className="text-xl" />
          </div>
        </div>

        <div className="flex justify-between items-center rounded-lg shadow p-4 bg-base-100">
          <div>
            <p className="text-neutral font-dinMedium">Total Orders</p>
            <h3 className="text-red-600 font-bold">{orders?.data?.length}</h3>
          </div>

          <div className="bg-red-600 text-base-100 w-11 h-11 rounded-lg flex justify-center items-center">
            <FaCartPlus className="text-xl" />
          </div>
        </div>

        <div className="flex justify-between items-center rounded-lg shadow p-4 bg-base-100">
          <div>
            <p className="text-neutral font-dinMedium">Total Categories</p>
            <h3 className="text-green-600 font-bold">
              {category?.data?.length}
            </h3>
          </div>

          <div className="bg-primary text-base-100 w-11 h-11 rounded-lg flex justify-center items-center">
            <BiCategoryAlt className="text-xl" />
          </div>
        </div>

        <div className="flex justify-between items-center rounded-lg shadow p-4 bg-base-100">
          <div>
            <p className="text-neutral font-dinMedium">Total SubCategories</p>
            <h3 className="text-green-600 font-bold">
              {subCategory?.data?.length}
            </h3>
          </div>

          <div className="bg-primary text-base-100 w-11 h-11 rounded-lg flex justify-center items-center">
            <BiCategoryAlt className="text-xl" />
          </div>
        </div>

        <div className="flex justify-between items-center rounded-lg shadow p-4 bg-base-100">
          <div>
            <p className="text-neutral font-dinMedium">
              Total Sub Sub-Categories
            </p>
            <h3 className="text-green-600 font-bold">
              {subSubCategory?.data?.length}
            </h3>
          </div>

          <div className="bg-primary text-base-100 w-11 h-11 rounded-lg flex justify-center items-center">
            <BiCategoryAlt className="text-xl" />
          </div>
        </div>

        <div className="flex justify-between items-center rounded-lg shadow p-4 bg-base-100">
          <div>
            <p className="text-neutral font-dinMedium">Total Brand</p>
            <h3 className="text-green-600 font-bold">{brand?.data?.length}</h3>
          </div>

          <div className="bg-primary text-base-100 w-11 h-11 rounded-lg flex justify-center items-center">
            <SiBrandfolder className="text-xl" />
          </div>
        </div>

        <div className="flex justify-between items-center rounded-lg shadow p-4 bg-base-100">
          <div>
            <p className="text-neutral font-dinMedium">Total Reviews</p>
            <h3 className="text-green-600 font-bold">
              {reviews?.data?.length}
            </h3>
          </div>

          <div className="bg-primary text-base-100 w-11 h-11 rounded-lg flex justify-center items-center">
            <GoCodeReview className="text-xl" />
          </div>
        </div>
      </div>

      {/* sales */}
      <div className="mt-4 bg-base-100 p-4 rounded shadow">
        <p>Sales Report</p>

        <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4">
          <div className="flex justify-between items-center rounded-lg p-4 border">
            <div>
              <p className="text-neutral font-dinMedium">Today Sales</p>
              <div className="flex items-end gap-1">
                <h3 className="text-primary font-bold">{todaySells}</h3>
                <small>tk</small>
              </div>
            </div>
            <div className="bg-primary text-base-100 w-11 h-11 rounded-lg flex justify-center items-center">
              <FaMoneyBillTrendUp className="text-xl" />
            </div>
          </div>

          <div className="flex justify-between items-center rounded-lg p-4 border">
            <div>
              <p className="text-neutral font-dinMedium">Total Sales</p>
              <div className="flex items-end gap-1">
                <h3 className="text-primary font-bold">{totalSell}</h3>
                <small>tk</small>
              </div>
            </div>
            <div className="bg-primary text-base-100 w-11 h-11 rounded-lg flex justify-center items-center">
              <FaMoneyBillTrendUp className="text-xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Orders */}
      <div className="mt-4 bg-base-100 p-4 rounded shadow">
        <div className="flex items-center justify-between">
          <p>Latest Orders</p>
          <Link to="/seller/order/all-orders" className="primary_btn text-sm">
            All Orders
          </Link>
        </div>

        <OrderTable orders={orders?.data} />

        <Pagination
          pages={orders?.meta?.pages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </section>
  );
}
