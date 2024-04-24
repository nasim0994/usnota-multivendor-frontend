import { FaMoneyBillAlt, FaSpinner } from "react-icons/fa";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { TiChartLine } from "react-icons/ti";

export default function SellerBalance() {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4">
        <div className="flex justify-between items-center rounded-lg shadow p-4 bg-base-100">
          <div>
            <p className="text-neutral font-dinMedium">Total Sales</p>
            <h3 className="text-primary font-bold">00 tk</h3>
          </div>
          <div className="bg-primary text-base-100 w-11 h-11 rounded-lg flex justify-center items-center">
            <TiChartLine className="text-xl" />
          </div>
        </div>

        <div className="flex justify-between items-center rounded-lg shadow p-4 bg-base-100">
          <div>
            <p className="text-neutral font-dinMedium">Available Balance</p>
            <h3 className="text-primary font-bold">00 tk</h3>
          </div>
          <div className="bg-primary text-base-100 w-11 h-11 rounded-lg flex justify-center items-center">
            <FaMoneyBillAlt className="text-xl" />
          </div>
        </div>

        <div className="flex justify-between items-center rounded-lg shadow p-4 bg-base-100">
          <div>
            <p className="text-neutral font-dinMedium">Total Withdrawal</p>
            <h3 className="text-primary font-bold">00 tk</h3>
          </div>
          <div className="bg-primary text-base-100 w-11 h-11 rounded-lg flex justify-center items-center">
            <FaMoneyBillTransfer className="text-xl" />
          </div>
        </div>

        <div className="flex justify-between items-center rounded-lg shadow p-4 bg-base-100">
          <div>
            <p className="text-neutral font-dinMedium">Pending Withdrawal</p>
            <h3 className="text-primary font-bold">00 tk</h3>
          </div>
          <div className="bg-primary text-base-100 w-11 h-11 rounded-lg flex justify-center items-center">
            <FaSpinner className="text-xl" />
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4 mt-4">
        <div className="bg-base-100 shadow p-3 rounded">
          <div>
            <h1>Request Withdrawal</h1>
          </div>

          <form className="mt-4 form_group">
            <div className="flex flex-col sm:flex-row items-center gap-2">
              <input
                type="number"
                name="withdrawalRequestAmount"
                defaultValue="0"
              />
              <button className="primary_btn">Submit</button>
            </div>
          </form>
        </div>

        <div className="bg-base-100 shadow p-3 rounded">
          <div>
            <h1>Pending Withdrawal</h1>
          </div>

          <div className="mt-4 overflow-x-auto">
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Date</th>
                  <th>Ammount</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>20-20-2024</td>
                  <td>500</td>
                  <td>Pending</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-base-100 shadow p-3 rounded">
          <div>
            <h1>Success Withdrawal</h1>
          </div>

          <div className="mt-4 overflow-x-auto">
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Date</th>
                  <th>Ammount</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>20-20-2024</td>
                  <td>500</td>
                  <td>Pending</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
