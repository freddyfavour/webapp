import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import success from "/success.svg";
import Button from "../../components/Button";
import { useForm } from "react-hook-form";
import Input from "../../components/Input";
import AuthEnv from "../../components/AuthEnv";
import Popup from "../../components/Popup";
import AuthTitle from "../../components/AuthTitle";
import authAPI from "../../api/user/auth";

const SignUp = () => {
  const [checkboxChecked, setCheckboxChecked] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const { control, handleSubmit, watch } = useForm();

  const navigate = useNavigate();

  const handleCheckboxChange = () => {
    setCheckboxChecked(!checkboxChecked);
  };

  const onSubmit = async (formData) => {
    setIsSubmitting(true);

    if (!checkboxChecked) {
      toast.error("Please agree to the terms and conditions");
      return;
    }

    try {
      // Prepare the data object according to your API requirements
      const userData = {
        email: formData.email,
        name: formData.name,
        password: formData.password,
        phone_number : formData.phoneNumber,
        role: "Client",
        type_of_service: "basic",
        username: formData.name
      };

      const result = await authAPI.authAPI.register(userData);

      if (result.success) {
        const response = result.data;

        if (response && response.token) {
          localStorage.setItem("authToken", response.token);
        }

        if (response && response.user) {
          localStorage.setItem("savedUser", JSON.stringify(response.user));
        }

        toast.success("Sign up successful!");
        setShowPopup(true);

        setTimeout(() => {
          navigate("/login");
        }, 5000);
      } else {
        const error = result.error;

        if (error.status === 403) {
          toast.error("Access denied. You don't have permission to log in.");
        } else if (error.status === 401) {
          toast.error("Invalid email or password. Please try again.");
        } else if (error.status === 429) {
          toast.error("Too many login attempts. Please try again later.");
        } else {
          toast.error(error.message || "Login failed. Please try again.");
        }

        console.error("Login error:", error);
      }
    } catch (error) {
      console.error("Unexpected error:", error);
      toast.error("An unexpected error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
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
                title={isSubmitting ? "Loading..." : "Continue"}
                type="submit"
                customClasses="w-full px-4 py-3 mt-6"
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
      {showPopup && (
        <div className="absolute top-0 left-0">
          <Popup
            title="Congratulations"
            subtitle="Your account is almost ready. Check your email for a verification code."
            image={success}
          />
        </div>
      )}
    </>
  );
};

export default SignUp;
