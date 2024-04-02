import React, { useState } from "react";
import { useSellerRegisterMutation } from "../../../../Redux/seller/seller/sellerApi";
import Swal from "sweetalert2";

export default function SellerSignupForm() {
  const [termsCondition, setTermsCondition] = useState(false);
  const [error, setError] = useState("");
  const [sellerRegister, { isLoading }] = useSellerRegisterMutation();

  const handleSellerRegister = async (e) => {
    e.preventDefault();

    const form = e.target;
    const shopName = form.shopName.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const password = form.password.value;
    const rePassword = form.rePassword.value;
    if (password !== rePassword) {
      return setError("Password not match");
    } else {
      setError("");
    }

    const sellerInfo = {
      shopName,
      email,
      phone,
      password,
    };

    const res = await sellerRegister(sellerInfo);
    if (res?.data?.success) {
      Swal.fire("", "Registration success, Login Now", "success");
      form.reset();
    } else {
      Swal.fire("", "Something went wrong", "error");
    }
  };

  return (
    <form
      onSubmit={handleSellerRegister}
      className="flex flex-col gap-2 text-[15px]"
    >
      <div>
        <label htmlFor="">
          Shop Name <span className="text-lg text-primary">*</span>
        </label>
        <input
          type="text"
          className="w-full border rounded px-3 py-2 outline-none focus:border-primary mt-1"
          placeholder="example@gmail.com"
          required
          name="shopName"
        />
      </div>

      <div>
        <label htmlFor="">
          Email <span className="text-lg text-primary">*</span>
        </label>
        <input
          type="email"
          className="w-full border rounded px-3 py-2 outline-none focus:border-primary mt-1"
          placeholder="example@gmail.com"
          required
          name="email"
        />
      </div>

      <div>
        <label htmlFor="">
          Phone <span className="text-lg text-primary">*</span>
        </label>
        <input
          type="text"
          className="w-full border rounded px-3 py-2 outline-none focus:border-primary mt-1"
          placeholder="example@gmail.com"
          required
          name="phone"
        />
      </div>

      <div>
        <label htmlFor="">
          Password <span className="text-lg text-primary">*</span>
        </label>
        <input
          type="password"
          className="w-full border rounded px-3 py-2 outline-none focus:border-primary mt-1"
          placeholder="Enter Strong Password"
          required
          name="password"
        />
      </div>

      <div>
        <label htmlFor="">
          Confirm Password <span className="text-lg text-primary">*</span>
        </label>
        <input
          type="password"
          className="w-full border rounded px-3 py-2 outline-none focus:border-primary mt-1"
          placeholder="Re-Type Password"
          required
          name="rePassword"
        />
      </div>

      {error && <p className="text-xs text-red-500">{error}</p>}

      <div>
        <label className="cursor-pointer flex items-center gap-1 text-gray-500 text-sm">
          <input
            type="checkbox"
            className="checkbox checkbox-xs checkbox-primary"
            onChange={() => setTermsCondition(!termsCondition)}
            value={termsCondition}
          />
          <span className="label-text">
            I agree with the terms and conditions
          </span>
        </label>
      </div>

      <div>
        <button
          disabled={!termsCondition && "disabled"}
          className="w-full bg-primary text-base-100 rounded py-2"
        >
          Sign Up
        </button>
      </div>
    </form>
  );
}
