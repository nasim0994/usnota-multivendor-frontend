import SellerLoginForm from "./SellerLoginForm";
import SellerSignupForm from "./SellerSignupForm";

export default function SellerForm({ formToggle, setFormToggle }) {
  return (
    <>
      {formToggle === "login" && <SellerLoginForm />}

      {formToggle === "signup" && <SellerSignupForm />}

      <div className="mt-8 text-center text-sm">
        {formToggle === "login" && (
          <p>
            Don’t have an account?
            <button
              className="text-primary pl-2"
              onClick={() => setFormToggle("signup")}
            >
              Sign Up
            </button>
          </p>
        )}

        {formToggle === "signup" && (
          <p>
            Already have an account?
            <button
              className="text-primary pl-2"
              onClick={() => setFormToggle("login")}
            >
              Login
            </button>
          </p>
        )}

        {formToggle === "login" && (
          <div>
            {/* The button to open modal */}
            <label htmlFor="merchantForgotPassword">
              <h6 className="text-xs mt-3 hover:text-primary duration-300 cursor-pointer">
                Forgot Password?
              </h6>
            </label>

            {/* Put this part before </body> tag */}
            <input
              type="checkbox"
              id="merchantForgotPassword"
              className="modal-toggle"
            />
            <label
              htmlFor="merchantForgotPassword"
              className="modal cursor-pointer"
            >
              <label className="modal-box p-0">
                <div className="flex justify-between items-center border-b px-4 py-3">
                  <h6 className="text-lg">Forgot Password</h6>
                  <label htmlFor="merchantForgotPassword" className="text-xl">
                    ✕
                  </label>
                </div>

                <div className="p-4">
                  <div>
                    <label
                      htmlFor="email"
                      className="flex justify-start gap-1 items-center"
                    >
                      Email <span className="text-lg text-primary">*</span>
                    </label>
                    <input
                      type="email"
                      className="w-full border border-neutral/60 rounded px-3 py-2 outline-none focus:border-primary mt-1"
                      placeholder="example@gmail.com"
                      required
                    />
                  </div>
                  <br />
                  <div className="flex justify-start">
                    <button className="bg-primary px-6 py-2 rounded text-base-100">
                      Continue
                    </button>
                  </div>
                </div>
              </label>
            </label>
          </div>
        )}
      </div>
    </>
  );
}
