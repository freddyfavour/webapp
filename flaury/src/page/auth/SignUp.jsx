import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Button from "@/components/Button";
import { useForm } from "react-hook-form";
import Input from "@/components/Input";
import AuthEnv from "@/components/AuthEnv";
import OTPVerification from "@/components/registration/otpverification";
import AuthTitle from "@/components/AuthTitle";
import authAPI from "@/api/user/auth";
import ShowHidePassword from "@/components/shared/ShowHidePassword";

const SignUp = () => {
  const [checkboxChecked, setCheckboxChecked] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedEmail, setSubmittedEmail] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [role, setRole] = useState("client");
  const [password, setPassword] = useState("");
  const [showPasswordToggle, setShowPasswordToggle] = useState(false);
  const location = useLocation();

  const { control, handleSubmit, register, setValue } = useForm();

  const showPassword = (e) => {
    e.preventDefault();
    setShowPasswordToggle(!showPasswordToggle);
  };

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
        password: password,
        phone_number: formData.phoneNumber,
        gender: formData.gender,
        role,
        type_of_service: "basic",
        username: formData.name,
      };

      const result = await authAPI.authAPI.register(userData);

      if (result.success) {
        const response = result.data;

        if (response?.token) {
          localStorage.setItem("authToken", response.token);
        }

        if (response?.user) {
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
        } else if (error.status === 400) {
          toast.error("Password must be at least 6 characters, include upper & lower case, a number, and a special character");
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
        <p className="text-primary text-sm pb-2">Register using your correct details</p>

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

          {/* Phone Number Field - limited to 11 digits only */}
          <div className="mb-4">
            <label htmlFor="phoneNumber" className="block text-sm mb-1">Phone Number</label>
            <input
              id="phoneNumber"
              name="phoneNumber"
              type="text"
              inputMode="numeric"
              maxLength={11}
              placeholder="Enter your Nigerian phone number"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all bg-transparent"
              onInput={(e) => {
                const input = e.target;
                input.value = input.value.replace(/[^0-9]/g, "").slice(0, 11);
                setValue("phoneNumber", input.value);
              }}
              required
            />
          </div>

          {/* Gender Field */}
          <div className="mb-4">
            <label htmlFor="gender" className="block text-sm mb-1">Gender</label>
            <select
              {...register("gender", { required: "Gender is required" })}
              className="w-full bg-transparent border border-gray-300 rounded-lg p-3 text-sm focus:ring-2 focus:ring-primary focus:border-primary transition-all"
              defaultValue=""
            >
              <option value="" disabled>Select your gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Password Field */}
          <div className="space-y-2 mb-4">
            <label className="block text-sm mb-1">Password</label>
            <div className="relative">
              <input
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary bg-transparent focus:border-primary transition-all duration-200 placeholder-gray-400"
                type={showPasswordToggle ? "text" : "password"}
                name="password"
                placeholder="********"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                required
              />
              <button
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-primary transition-colors"
                onClick={showPassword}
              >
                <ShowHidePassword showPasswordToggle={showPasswordToggle} />
              </button>
            </div>
          </div>

          {/* Terms & Conditions */}
          <div className="flex items-start gap-2 mt-4 mb-4">
            <input
              type="checkbox"
              id="tc"
              checked={checkboxChecked}
              onChange={handleCheckboxChange}
              className="mt-1 w-4 h-4"
            />
            <label htmlFor="tc" className="text-sm text-primary leading-snug">
              Clicking the <strong>&quot;Continue&quot;</strong> button means I agree to the terms and conditions of <strong>FLAURY</strong>
            </label>
          </div>

          <Button
            title={isSubmitting ? "Loading..." : "Continue"}
            type="submit"
            customClasses="w-full px-4 py-3"
          />
        </form>

        <p className="text-primary text-sm mt-4 text-left">
          Already have an account?{" "}
          <Link to="/login" className="font-bold">Login</Link>
        </p>
      </AuthEnv>

      {/* OTP Modal */}
      {showPopup && (
        <div className="fixed top-0 left-0 w-full h-full z-50 bg-black bg-opacity-40 flex items-center justify-center">
          <OTPVerification email={submittedEmail} />
        </div>
      )}
    </>
  );
};

export default SignUp;
