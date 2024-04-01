import React from "react";

export default function SellerSignupForm() {
  return (
    <form className="flex flex-col gap-3">
      <div>
        <label htmlFor="">
          Email <span className="text-lg text-primary">*</span>
        </label>
        <input
          type="email"
          className="w-full border rounded px-3 py-2 outline-none focus:border-primary mt-1"
          placeholder="example@gmail.com"
          required
        />
      </div>

      <div>
        <label htmlFor="">
          Password <span className="text-lg text-primary">*</span>
        </label>
        <input
          type="text"
          className="w-full border rounded px-3 py-2 outline-none focus:border-primary mt-1"
          placeholder="Enter Strong Password"
          required
        />
      </div>

      <div>
        <label htmlFor="">
          Confirm Password <span className="text-lg text-primary">*</span>
        </label>
        <input
          type="text"
          className="w-full border rounded px-3 py-2 outline-none focus:border-primary mt-1"
          placeholder="Re-Type Password"
          required
        />
      </div>

      <div>
        <label className="cursor-pointer label justify-start gap-2">
          <input
            type="checkbox"
            className="checkbox checkbox-xs checkbox-primary"
          />
          <span className="label-text">
            I agree with the terms and conditions
          </span>
        </label>
      </div>

      <div>
        <button className="w-full bg-primary text-base-100 rounded py-2">
          Sign Up
        </button>
      </div>
    </form>
  );
}
