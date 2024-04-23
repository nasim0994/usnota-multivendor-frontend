import { Link } from "react-router-dom";

export default function WhySellLists() {
  return (
    <section className="bg-base-100 p-4 rounded shadow">
      <div className="flex justify-between items-center">
        <h1 className="font-medium">Why Sell Here</h1>
        <Link
          to="/admin/front-end/seller-page/add-why-sell"
          className="primary_btn"
        >
          Add New
        </Link>
      </div>
      <div className="mt-4 overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Icon</th>
              <th>Title</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <td>
                <img src="" alt="icon" className="w-10 h-10 rounded-full" />
              </td>
              <td>Desktop Support Technician</td>
              <td>Purple</td>
              <th>
                <button className="btn btn-ghost btn-xs">details</button>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
