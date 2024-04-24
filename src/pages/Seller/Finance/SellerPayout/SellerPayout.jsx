import { useState } from "react";

export default function SellerPayout() {
  const [bankFormToggle, setBankFormToggle] = useState(false);

  return (
    <section className="bg-base-100 shadow p-4 rounded">
      <h6 className="bg-gray-50 p-2 border-l-2 border-primary font-medium">
        Payout Setting
      </h6>

      <div className="p-4">
        <p className="text-neutral/80 text-[15px]">
          All the earning will be sent to below selected payout method
        </p>

        <div className="mt-4">
          <button
            onClick={() => setBankFormToggle(!bankFormToggle)}
            className="border rounded px-6 py-4"
          >
            <img src="/images/payments/bank.png" alt="" className="w-10" />
          </button>

          {bankFormToggle && (
            <form className="w-2/3 mt-4">
              <p className="text-neutral/80 text-[15px] mb-4">
                Please add all required settings for the bank transfer.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <input
                  type="text"
                  className="w-full border rounded px-3 py-2 outline-none focus:border-primary mb-4"
                  placeholder="Bank Account Name"
                />
                <input
                  type="text"
                  className="w-full border rounded px-3 py-2 outline-none focus:border-primary mb-4"
                  placeholder="Bank Account Number"
                />
              </div>
              <div className="grid grid-cols-2 gap-6">
                <input
                  type="text"
                  className="w-full border rounded px-3 py-2 outline-none focus:border-primary mb-4"
                  placeholder="Bank Name"
                />
              </div>

              <button
                className="bg-primary px-5 py-2 rounded text-base-100"
                type="submit"
              >
                Submit
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
