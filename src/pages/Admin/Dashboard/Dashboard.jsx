import { Link } from "react-router-dom";
import { useAllBrandsQuery } from "../../../Redux/brand/brandApi";
import { useGetCategoriesQuery } from "../../../Redux/category/categoryApi";
import { useGetAllOrdersQuery } from "../../../Redux/order/orderApi";
import { useGetAllProductsQuery } from "../../../Redux/product/productApi";
import { useGetSubCategoriesQuery } from "../../../Redux/subCategory/subCategoryApi";
import { useGetSubSubCategoriesQuery } from "../../../Redux/subSubCategory/subSubCategoryApi";
import { useAllUsersQuery } from "../../../Redux/user/userApi";
import { useGetAllAdminsQuery } from "../../../Redux/admin/adminApi";
import { FaBoxOpen, FaUsers, FaUserShield, FaCartPlus } from "react-icons/fa";
import { BiCategoryAlt } from "react-icons/bi";
import { SiBrandfolder } from "react-icons/si";
import { useAllSellersQuery } from "../../../Redux/seller/seller/sellerApi";
import { FaEye } from "react-icons/fa";

export default function Dashboard() {
  const { data: products } = useGetAllProductsQuery();
  const { data: orders } = useGetAllOrdersQuery();
  const { data: users } = useAllUsersQuery();
  const { data: admin } = useGetAllAdminsQuery();
  const { data: category } = useGetCategoriesQuery();
  const { data: subCategory } = useGetSubCategoriesQuery();
  const { data: subSubCategory } = useGetSubSubCategoriesQuery();
  const { data: brand } = useAllBrandsQuery();

  const { data, isLoading, isError, error } = useAllSellersQuery();

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
            <p className="text-neutral font-dinMedium">Total Users</p>
            <h3 className="text-green-600 font-bold">{users?.data?.length}</h3>
          </div>

          <div className="bg-green-600 text-base-100 w-11 h-11 rounded-lg flex justify-center items-center">
            <FaUsers className="text-xl" />
          </div>
        </div>

        <div className="flex justify-between items-center rounded-lg shadow p-4 bg-base-100">
          <div>
            <p className="text-neutral font-dinMedium">Total Administrators</p>
            <h3 className="text-green-600 font-bold">{admin?.data?.length}</h3>
          </div>

          <div className="bg-primary text-base-100 w-11 h-11 rounded-lg flex justify-center items-center">
            <FaUserShield className="text-xl" />
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
      </div>

      <div className="mt-4 bg-base-100 p-4 rounded shadow">
        <div className="flex items-center justify-between">
          <p>Sellers</p>
          <Link to="/admin/seller/all-sellers" className="primary_btn text-sm">
            See All
          </Link>
        </div>

        <div className="relative overflow-x-auto mt-4">
          <table className="dashboard_table">
            <thead>
              <tr>
                <th>Shop Name</th>
                <th>Phone</th>
                <th>Verify</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data?.data?.map((seller) => (
                <tr key={seller?._id}>
                  <td>{seller?.shopName}</td>
                  <td>{seller?.phone}</td>
                  <td>
                    <label class="relative inline-flex items-center cursor-pointer">
                      <input
                        checked={seller?.verify && seller?.verify}
                        type="checkbox"
                        value={seller?.verify}
                        class="sr-only peer"
                        disabled
                      />
                      <div class="w-11 h-[23px] bg-gray-200 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[1.5px] after:start-[1px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                    </label>
                  </td>
                  <td>
                    <div className="flex items-center gap-2 text-lg">
                      <Link to={`/admin/seller/view/${seller?._id}`}>
                        <FaEye className="text-primary" />
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
