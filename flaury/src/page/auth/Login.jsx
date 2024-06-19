import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = ({ isAuth, onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [disabled, setDisabled] = useState(true);

  const navigate = useNavigate();

  // Function to check if all fields are filled
  const handleFormValidation = () => {
    if (email.trim() !== "" && password.trim() !== "") {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  // Function to handle changes in input fields
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setRememberMe(checked);
    } else {
      if (name === "email") {
        setEmail(value);
      } else if (name === "password") {
        setPassword(value);
      }
    }
    handleFormValidation(); // Check form validation on every input change
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/dashboard");
    onLogin();
  };

  return (
    <div className="h-screen w-full flex justify-center md:items-center bg-primaryColor">
      <div className="gradient-overlay-login"></div>
      <div className="w-full md:w-[70%] md:max-w-[768px] p-10 md:p-20 mt-20 md:mt-0 bg-[#fff] md:rounded-xl flex items-center flex-col shadow-xl z-10 lg:scale-75">
        <h3 className="text-primaryColor font-bold text-2xl py-2">Login</h3>
        <p className="text-primaryColor text-sm pb-2">
          Log in to your finneseHUB account
        </p>
        <form className="w-full">
          <label htmlFor="email" className="">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleInputChange}
            className="border w-full px-4 py-2 rounded-lg mt-1 mb-2"
          />
          <label htmlFor="password" className="">
            Password
          </label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleInputChange}
            className="border w-full px-4 py-2 rounded-lg mt-1 mb-2"
          />

          <div className="w-full flex justify-between items-center">
            <div className="flex gap-4 items-center justify-center">
              <input
                type="checkbox"
                name="t&c"
                id="tc"
                checked={rememberMe}
                onChange={handleInputChange}
                className="w-[1.5rem] h-[1.5rem]"
              />
              <p className="text-primaryColor text-sm">Remember me</p>
            </div>
            <Link
              to="/forgot-password"
              className="text-primaryColor font-bold text-sm"
            >
              Forgot Password?
            </Link>
          </div>

          <button
            type="submit"
            className={`w-full px-4 py-3 rounded-lg mt-6 text-sm ${
              disabled
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-primaryColor text-[#fff]"
            }`}
            disabled={disabled}
            onClick={handleSubmit}
          >
            Continue
          </button>
        </form>

        <p className="text-primaryColor text-sm mt-8">
          Don't have an account?{" "}
          <Link to="/choose-role" className="font-bold">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
