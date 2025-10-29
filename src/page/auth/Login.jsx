import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "react-hook-form";
import Input from "@/components/Input";
import Button from "@/components/Button";
import AuthEnv from "@/components/AuthEnv";
import AuthTitle from "@/components/AuthTitle";
import authAPI from "@/api/user/auth";
import OTPVerification from "@/components/registration/otpverification";
import PropTypes from "prop-types";

const Login = ({ fetchUserDetails }) => {
  const [rememberMe, setRememberMe] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [unverifiedEmail, setUnverifiedEmail] = useState(""); // ✅ state to track email for OTP

  const { control, handleSubmit } = useForm();
  const navigate = useNavigate();

  const handleCheckboxChange = (e) => {
    setRememberMe(e.target.checked);
  };

  const onSubmit = async (formData) => {
    setIsSubmitting(true);

    try {
      const userData = {
        email: formData.email,
        password: formData.password,
      };

      const result = await authAPI.authAPI.login(userData);

      if (result.success) {
        const response = result.data;

        if (response?.user) {
          localStorage.setItem("savedUser", JSON.stringify(response.user));
        }

        if (response?.user) {
          localStorage.setItem("isAuth", true);
        }

        toast.success("Login successful!");

        localStorage.setItem(
          "accessToken",
          response["response data"].access_token
        );
        localStorage.setItem("roleData", response["response data"].role);
        setTimeout(() => {
          navigate("/dashboard");
          fetchUserDetails();
        }, 3000);
      } else {
        const error = result.error;

        if (error.status === 403) {
          toast.error("Email is not verified.");
          setUnverifiedEmail(formData.email); // ✅ Save email for OTP component
          setShowPopup(true);
        } else if (error.status === 401) {
          toast.error("Invalid email or password. Please try again.");
        } else if (error.status === 400) {
          toast.error("Missing email or password.");
        } else {
          toast.error(error.message || "Login failed. Please try again.");
        }

        console.error("Login error:", error);
      }
    } catch (unexpectedError) {
      console.error("Unexpected error:", unexpectedError);
      toast.error("An unexpected error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <AuthEnv>
        <AuthTitle title="Login" />
        <p className="text-primary text-sm pb-2">
          Log in to your Flaury account
        </p>
        <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
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

          <div className="w-full flex justify-between items-center mt-4">
            <div className="flex gap-2 items-center">
              <input
                type="checkbox"
                name="rememberMe"
                id="rememberMe"
                checked={rememberMe}
                onChange={handleCheckboxChange}
                className="w-4 h-4"
              />
              <label htmlFor="rememberMe" className="text-sm">
                Remember me
              </label>
            </div>
            <Link
              to="/forgot-password"
              className="text-primary font-bold text-sm"
            >
              Forgot Password?
            </Link>
          </div>
          <Button
            title={isSubmitting ? "Processing..." : "Continue"}
            type="submit"
            customClasses="w-full px-4 py-3 mt-6"
            disabled={isSubmitting}
          />
        </form>
        <p className="text-primary text-sm mt-8">
          Don’t have an account?{" "}
          <Link to="/signup" className="font-bold">
            Sign up
          </Link>
        </p>
      </AuthEnv>

      {showPopup && unverifiedEmail && (
        <div className="absolute top-0 left-0">
          <OTPVerification email={unverifiedEmail} />
        </div>
      )}
    </>
  );
};

export default Login;

Login.propTypes = {
  fetchUserDetails: PropTypes.func.isRequired,
};
