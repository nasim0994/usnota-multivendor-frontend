import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

// eslint-disable-next-line react/prop-types
const SignUpInModal = ({ formToggle, setFormToggle }) => {
  return (
    <div>
      <input type="checkbox" id="signUpIn" className="modal-toggle" />
      <label htmlFor="signUpIn" className="modal cursor-pointer">
        <label
          className="bg-base-100 rounded-xl px-6 py-5 relative w-[90%] sm:w-[450px]"
          htmlFor=""
        >
          {formToggle === "login" && <LoginForm />}
          {formToggle === "signup" && <SignupForm />}

          <div className="border-t border-neutral/20 mt-6 pt-4 text-center text-neutral-content">
            <p className={`${formToggle === "signup" && "hidden"} text-sm`}>
              Don&apos;t have an account?
              <button
                onClick={() => setFormToggle("signup")}
                className="text-primary  pl-2 hover:underline"
              >
                Signup
              </button>
            </p>

            <p className={`${formToggle === "login" && "hidden"} text-sm`}>
              Already have an account?
              <button
                onClick={() => setFormToggle("login")}
                className="text-primary  pl-2 hover:underline"
              >
                Login
              </button>
            </p>
          </div>
        </label>
      </label>
    </div>
  );
};

export default SignUpInModal;
