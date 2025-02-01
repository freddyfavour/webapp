import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import success from "/success.svg";
import config from "../../../utils/config";
import Button from "../../components/Button";
import { useForm } from "react-hook-form";
import Input from "../../components/Input";
import AuthEnv from "../../components/AuthEnv";
import Card from "../../components/Card";
import Popup from "../../components/Popup";
import AuthTitle from "../../components/AuthTitle";

const SignUp = ({ onLogin }) => {
  const [checkboxChecked, setCheckboxChecked] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const { control, handleSubmit, watch } = useForm();

  const navigate = useNavigate();

  const handleCheckboxChange = () => {
    setCheckboxChecked(!checkboxChecked);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (disabled) {
      return;
    }

    try {
      const response = await fetch(`${config.baseUrl}/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          phoneNumber,
          password,
          role: "Customer",
        }),
        credentials: "include",
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Network response was not ok");
      }

      console.log("Sign up successful:", data);

      localStorage.setItem("savedUser", JSON.stringify(data.savedUser));

      onLogin();
      toast.success("Sign up successful!");
      setShowPopup(true);
      setTimeout(() => {
        navigate("/dashboard");
      }, 3000);
    } catch (error) {
      console.error("Error signing up:", error);
      toast.error(error.message);
    }
  };

  return (
    <>
      <AuthEnv
        children={
          <>
            <AuthTitle title="Sign Up" />
            <p className="text-primaryColor text-sm pb-2">
              Register using your correct details
            </p>
            <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
              <Input
                control={control}
                name="name"
                label="Name"
                placeholder="Full name"
                validateType="min"
                minValue={2}
              />
              <Input
                control={control}
                name="email"
                label="Email Address"
                placeholder="Enter your email"
                validateType="email"
              />
              <Input
                control={control}
                name="phoneNumber"
                label="Phone Number"
                placeholder="Enter your Nigerian phone number"
                validateType="phoneNumber"
                errorMessage="Phone number is required."
              />
              <Input
                control={control}
                name="password"
                label="Password"
                type="password"
                placeholder="Enter your password"
                validateType="password"
              />
              <Button
                title="Continue"
                type="submit"
                customClasses="w-full px-4 py-3 mt-6"
                onClick={handleSubmit(onSubmit)}
              />
            </form>
            <p className="text-primaryColor text-sm mt-8 text-left">
              Already have an account?{" "}
              <Link to="/login" className="font-bold">
                Login
              </Link>
            </p>
            <div className="flex gap-4 items-center justify-center mt-6">
              <input
                type="checkbox"
                id="tc"
                checked={checkboxChecked}
                onChange={handleCheckboxChange}
                className="w-[1rem] h-[1rem]"
              />
              <p className="text-primaryColor text-sm w-2/3">
                Clicking the "continue" button means I agree to the terms and
                conditions of <b>FLAURY</b>
              </p>
            </div>
          </>
        }
      />
      <ToastContainer />
      {showPopup && (
        <div className="absolute top-0 left-0">
          <Popup
            title="Congratulations"
            subtitle="Your account is now ready to use. You will be redirected to
          your homepage shortly."
            image={success}
          />
        </div>
      )}
    </>
  );
};

export default SignUp;
