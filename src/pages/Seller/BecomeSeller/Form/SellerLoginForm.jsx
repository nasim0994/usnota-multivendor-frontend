import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useSellerLoginMutation } from "../../../../Redux/seller/seller/sellerApi";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

export default function SellerLoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [login, { isLoading, isError, error }] = useSellerLoginMutation();

  const { loggedSeller } = useSelector((state) => state.seller);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/seller/dashboard";

  if (loggedSeller?.success || loggedSeller !== undefined) {
    navigate(from, { replace: true });
  }

  const handleSellerLogin = async (e) => {
    e.preventDefault();

    const form = e.target;
    const phone = form.phone.value;
    const password = form.password.value;

    const loginInfo = {
      phone,
      password,
    };

    const res = await login(loginInfo);
    if (res?.data?.success) {
      toast.success("Login Success");
    }
  };

  return (
    <form onSubmit={handleSellerLogin} className="flex flex-col gap-3">
      <div>
        <p className="text-neutral-content">Phone</p>
        <input
          type="phone"
          className="w-full border border-neutral rounded px-3 py-2 outline-none focus:border-primary mt-1"
          placeholder="01*********"
          required
          name="phone"
        />
      </div>

      <div>
        <p className="text-neutral-content">Password</p>
        <div className="relative">
          <input
            type={`${showPassword ? "text" : "password"}`}
            name="password"
            placeholder="Password"
            className="w-full border border-neutral rounded px-3 py-2 outline-none focus:border-primary mt-1"
            required
          />

          <div
            className="absolute right-2 bottom-2 cursor-pointer"
            onClick={() => setShowPassword(!showPassword)}
          >
            <span className={`${showPassword ? "block" : "hidden"}`}>
              <AiFillEye />
            </span>
            <span className={`${showPassword ? "hidden" : "block"}`}>
              <AiFillEyeInvisible />
            </span>
          </div>
        </div>
      </div>

      {isError && <p className="text-sm text-red-500">{error?.data?.error}</p>}

      <div>
        <button className="w-full bg-primary text-base-100 rounded py-2">
          {isLoading ? "Loading..." : "Login"}
        </button>
      </div>
    </form>
  );
}
