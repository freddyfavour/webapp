import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import config from "../../../utils/config";

const Login = ({ isAuth, onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [role, setRole] = useState("");

  const navigate = useNavigate();

  // Function to check if all fields are filled
  const handleFormValidation = () => {
    if (email.trim() !== "" && password.trim() !== "" && role !== "") {
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
    handleFormValidation();
  };

  // Function to handle role change
  const handleRoleChange = (e) => {
    setRole(e.target.value);
    handleFormValidation();
    localStorage.setItem("userData", JSON.stringify({ role: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!disabled) {
      try {
        const response = await fetch(`${config.baseUrl}/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password, role }),
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        console.log("Login successful:", data);
        onLogin();
        navigate("/dashboard");
      } catch (error) {
        console.error("Error logging in:", error);
      }
    }
  };

  return (
    <div className="lg:h-screen w-full flex justify-center items-center bg-primaryColor relative lg:overflow-hidden">
      <div className="gradient-overlay-signup absolute inset-0"></div>
      <div className="w-full md:w-[70%] md:max-w-[768px] mt-20 p-10 md:px-20 md:py-10 bg-white md:rounded-xl flex items-center flex-col shadow-xl z-10 lg:scale-75">
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

          <label>Role</label>
          <select
            value={role}
            onChange={handleRoleChange}
            className="w-full block px-4 py-2 mt-2 mb-6"
          >
            <option value="">Select a role</option>
            <option value="Business">Business</option>
            <option value="Customer">Customer</option>
          </select>

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
