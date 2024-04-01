import { AiFillUnlock } from "react-icons/ai";
import { FaPhoneAlt } from "react-icons/fa";
import { HiUser } from "react-icons/hi";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

const SignupForm = () => {
  return (
    <div>
      <h6 className="text-xl font-medium text-center text-primary">Sign Up</h6>

      <form action="" className="mt-10 text-neutral text-base">
        {/* input */}
        <div className="flex flex-col gap-4">
          {/* name */}
          <div className="grid grid-cols-2 gap-6">
            <div className="relative">
              <span className="absolute top-2.5 left-2 text-neutral/80">
                <HiUser className="text-lg" />
              </span>
              <input
                type="text"
                placeholder="First Name"
                className="w-full border p-4 py-2 focus:border-primary outline-none pl-8 rounded text-base   placeholder:font-light"
                required
              />
            </div>

            <div className="relative">
              <span className="absolute top-2.5 left-2 text-neutral/80">
                <HiUser className="text-lg" />
              </span>
              <input
                type="text"
                placeholder="Last Name"
                className="w-full border p-4 py-2 focus:border-primary outline-none pl-8 rounded text-base   placeholder:font-light"
                required
              />
            </div>
          </div>

          {/* Email */}
          <div className="relative">
            <span className="absolute top-3 left-2 text-neutral/80">
              <MdEmail className="text-lg" />
            </span>
            <input
              type="email"
              placeholder="Email"
              className="w-full border p-4 py-2 focus:border-primary outline-none pl-8 rounded text-base   placeholder:font-light"
              required
            />
          </div>

          {/* Phone */}
          <div className="relative">
            <span className="absolute top-3 left-2 text-neutral">
              <FaPhoneAlt className="text-lg" />
            </span>
            <input
              type="text"
              placeholder="Phone"
              className="w-full border p-4 py-2 focus:border-primary outline-none pl-8 rounded text-base   placeholder:font-light"
              required
            />
          </div>

          {/* Password */}
          <div className="relative">
            <span className="absolute top-2.5 left-2 text-neutral/80">
              <AiFillUnlock className="text-lg" />
            </span>
            <input
              type="password"
              placeholder="Password"
              className="w-full border p-4 py-2 focus:border-primary outline-none pl-8 rounded text-base   placeholder:font-light"
              required
            />
          </div>

          {/* Password */}
          <div className="relative">
            <span className="absolute top-2.5 left-2 text-neutral/80">
              <AiFillUnlock className="text-lg" />
            </span>
            <input
              type="password"
              placeholder="Re-Type Password"
              className="w-full border p-4 py-2 focus:border-primary outline-none pl-8 rounded text-base   placeholder:font-light"
              required
            />
          </div>
        </div>

        {/* Privacy Policy */}
        <div className="my-4">
          <label className="label gap-2 justify-start items-center cursor-pointer">
            <input type="checkbox" className="checkbox checkbox-xs" />
            <span className="label-text">
              Yes, I understand and agree to the Upwork Terms of Service ,
              including the User Agreement and{" "}
              <Link className="text-primary underline">Privacy Policy</Link> .
            </span>
          </label>
        </div>

        {/* Button */}
        <div>
          <div className="flex flex-col w-full border-opacity-50">
            <button
              type="submit"
              className="w-full py-2 font-semibold text-base-100 bg-primary rounded hover:bg-opacity-90 duration-300 "
            >
              Create my account
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignupForm;
