import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import config from "../../../utils/config";
import { useForm } from "react-hook-form";
import Input from "../../components/Input";
import Button from "../../components/Button";
import AuthEnv from "../../components/AuthEnv";
import AuthTitle from "../../components/AuthTitle";

const Login = ({ isAuth, onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [role, setRole] = useState("");
  const { control, handleSubmit, watch } = useForm();

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
    handleFormValidation();
  };

  const onSubmit = async (e) => {
    // e.preventDefault();
    // if (!disabled) {
    //   try {
    //     const response = await fetch(`${config.baseUrl}/login`, {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify({ email, password, role: "Customer" }),
    //       credentials: "include",
    //     });

    //     const data = await response.json();

    //     if (!response.ok) {
    //       throw new Error(data.message || "Network response was not ok");
    //     }

    // console.log("Login successful:", data);
    toast.success("Login successful!");
    onLogin();
    navigate("/dashboard");
    // } catch (error) {
    //   console.error("Error logging in:", error);
    //   toast.error(error.message);
    // }
    // }
  };

  return (
    <>
      <AuthEnv
        children={
          <>
            <AuthTitle title="Login" />
            <p className="text-primaryColor text-sm pb-2">
              Log in to your Flaury account
            </p>
            <form className="w-full">
              <Input
                control={control}
                name="email"
                label="Email Address"
                placeholder="Enter your email"
                validateType="email"
              />
              <Input
                control={control}
                name="password"
                label="Password"
                type="password"
                placeholder="Enter your password"
                validateType="password"
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
                  <p className="text-sm">Remember me</p>
                </div>
                <Link
                  to="/forgot-password"
                  className="text-primaryColor font-bold text-sm"
                >
                  Forgot Password?
                </Link>
              </div>
              <Button
                title="Continue"
                type="submit"
                customClasses="w-full px-4 py-3 mt-6"
                onClick={handleSubmit(onSubmit)}
              />
            </form>
            <p className="text-[#ccc] text-sm mt-8">
              Don't have an account?{" "}
              <Link to="/choose-role" className="font-bold text-primaryColor">
                Sign up
              </Link>
            </p>
          </>
        }
      />
      <ToastContainer />
    </>
  );
};

export default Login;
