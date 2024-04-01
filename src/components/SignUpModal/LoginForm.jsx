import { AiFillUnlock } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

const LoginForm = () => {
  return (
    <div>
      <h6 className="text-xl font-medium mt-2 text-center text-primary">
        Welcome To eMall
      </h6>

      <form className="text-base">
        <div className="mt-10 text-neutral">
          <div className="mb-6 relative">
            <span className="absolute top-3 left-2 text-neutral/80">
              <MdEmail className="text-lg" />
            </span>
            <input
              type="email"
              placeholder="Email"
              className="w-full border p-4 py-2 focus:border-primary outline-none pl-8 rounded placeholder:font-light"
              required
            />
          </div>

          <div className="mb-2 relative">
            <span className="absolute top-2.5 left-2 text-neutral/80">
              <AiFillUnlock className="text-lg" />
            </span>
            <input
              type="password"
              placeholder="Password"
              className="w-full border p-4 py-2 focus:border-primary outline-none pl-8 rounded   placeholder:font-light"
              required
            />
          </div>

          <div className="mb-4 flex justify-between items-center">
            <label className="label gap-2 justify-start items-center cursor-pointer">
              <input type="checkbox" className="checkbox checkbox-xs" />
              <span className="label-text">Remember me</span>
            </label>

            <div>
              <Link
                to=""
                className="text-[13px] text-neutral/70 underline hover:text-primary duration-300"
              >
                Forgot Password?
              </Link>
            </div>
          </div>

          <div>
            <div className="flex flex-col w-full border-opacity-50">
              <button
                type="submit"
                className="w-full py-2 font-semibold text-base-100 bg-primary rounded hover:bg-opacity-90 duration-300 "
              >
                Log In
              </button>
            </div>
          </div>
        </div>
      </form>

      <div>
        <div className="divider text-neutral-content">OR</div>
        <button className="mt-4 w-full py-2 font-medium text-neutral border border-neutral/50 rounded hover:bg-opacity-90 duration-300 flex gap-4 justify-center items-center">
          <FcGoogle className="text-xl" /> Continue with Google
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
