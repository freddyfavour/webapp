import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Button from "../../components/Button";
import { useForm } from "react-hook-form";
import Input from "../../components/Input";
import AuthEnv from "../../components/AuthEnv";
import OTPVerification from "../../components/registration/otpverification";
import AuthTitle from "../../components/AuthTitle";
import authAPI from "../../api/user/auth";

const SignUp = () => {
  const [checkboxChecked, setCheckboxChecked] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedEmail, setSubmittedEmail] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [role, setRole] = useState("customer");

  const { control, handleSubmit, register } = useForm();
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const roleParam = params.get("role");
    if (roleParam) setRole(roleParam);
  }, [location.search]);

  const handleCheckboxChange = () => {
    setCheckboxChecked(!checkboxChecked);
  };

  const onSubmit = async (formData) => {
    setIsSubmitting(true);

    if (!checkboxChecked) {
      toast.error("Please agree to the terms and conditions");
      setIsSubmitting(false);
      return;
    }

    try {
      const userData = {
        email: formData.email,
        name: formData.name,
        password: formData.password,
        phone_number: formData.phoneNumber,
        gender: formData.gender,
        role,
        type_of_service: "basic",
        username: formData.name,
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
        setSubmittedEmail(formData.email);

        setTimeout(() => {
          setShowPopup(true);
        }, 4000);
      } else {
        const error = result.error;
        if (error.status === 403) {
          toast.error("Access denied. You don't have permission to sign up.");
        } else if (error.status === 401) {
          toast.error("Invalid credentials. Please try again.");
        } else if (error.status === 429) {
          toast.error("Too many attempts. Please try again later.");
        } else {
          toast.error(error.message || "Sign up failed. Please try again.");
        }
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
      <AuthEnv>
        <AuthTitle title="Sign Up" />
        <p className="text-primary text-sm pb-2">
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

          {/* Gender Field */}
          <div className="my-4">
            <label htmlFor="gender" className="text-sm font-medium text-primary block mb-2">
              Gender
            </label>
            <select
              {...register("gender", { required: "Gender is required" })}
              className="w-full border border-gray-300 rounded-md p-3 text-sm"
            >
              <option value="">Select your gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

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
            customClasses="w-full px-4 py-3 mt-4"
          />
        </form>
        <p className="text-primary text-sm mt-4 text-left">
          Already have an account? <Link to="/login" className="font-bold">Login</Link>
        </p>
        <div className="flex w-full gap-4 items-center justify-center mt-4">
          <input
            type="checkbox"
            id="tc"
            checked={checkboxChecked}
            onChange={handleCheckboxChange}
            className="w-[1rem] h-[1rem]"
          />
          <p className="text-primary text-sm w-full">
            Clicking the &quot;continue&quot; button means I agree to the terms and
            conditions of <b>FLAURY</b>
          </p>
        </div>
      </AuthEnv>
      {showPopup && (
        <div className="absolute top-0 left-0">
          <OTPVerification email={submittedEmail} />
        </div>
      )}
    </>
  );
};

export default SignUp;
