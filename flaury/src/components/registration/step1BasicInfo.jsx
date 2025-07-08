import React, { useState, useEffect } from "react";
import { useAuthStore } from "@/store/authstore";
import { useForm } from "react-hook-form";

import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Button from "@/components/Button";
import Input from "@/components/Input";
import AuthEnv from "@/components/AuthEnv";
import Popup from "@/components/Popup";
import AuthTitle from "@/components/AuthTitle";
import authAPI from "@/api/user/auth";
import OTPVerification from "@/components/registration/otpverification";


const Step1BasicInfo = ({ onComplete }) => {
  const { updateRegistrationData, registrationType } = useAuthStore();
  const [gender, setGender] = useState(""); // State for gender
  const [genderError, setGenderError] = useState(""); // Error state for gender validation

  const [checkboxChecked, setCheckboxChecked] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedEmail, setSubmittedEmail] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const { control, handleSubmit, watch } = useForm();

  // Cleanup timeout on unmount to prevent memory leaks

  // Function to handle changes in the select field for gender
  const handleGenderChange = (e) => {
    setGender(e.target.value);
    // Clear error when user selects a gender
    if (e.target.value && genderError) {
      setGenderError("");
    }
  };

  const handleCheckboxChange = () => {
    setCheckboxChecked(!checkboxChecked);
  };

  const onSubmit = async (formData) => {
    setIsSubmitting(true);

    // Validate checkbox
    if (!checkboxChecked) {
      toast.error("Please agree to the terms and conditions");
      setIsSubmitting(false);
      return;
    }

    // Validate gender selection
    if (!gender) {
      setGenderError("Please select your gender");
      toast.error("Please select your gender");
      setIsSubmitting(false);
      return;
    }

    try {
      // Prepare the data object according to your API requirements
      const userData = {
        email: formData.email,
        name: formData.name,
        password: formData.password,
        phone_number: formData.phoneNumber,
        gender: gender, // Include gender in the data
        role: registrationType,
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

        toast.success("Registration successful!");
        setSubmittedEmail(formData.email);

        updateRegistrationData(userData);
      } else {
        const error = result.error;

        if (error.status === 403) {
          toast.error("Access denied. You don't have permission to register.");
        } else if (error.status === 401) {
          toast.error(
            "Invalid registration details. Please check your information."
          );
        } else if (error.status === 429) {
          toast.error(
            "Too many registration attempts. Please try again later."
          );
        } else if (error.status === 409) {
          toast.error("An account with this email already exists.");
        } else {
          toast.error(
            error.message || "Registration failed. Please try again."
          );
        }

        console.error("Registration error:", error);
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
        <div className="mb-4">
          <label
            htmlFor="gender"
            className="block text-sm font-medium text-primary"
          >
            Gender
          </label>
          <select
            name="gender"
            id="gender"
            value={gender}
            onChange={handleGenderChange}
            className={`block w-full mt-1 p-3 border border-[#ADADAD] rounded-[4px] text-sm ${gender === ""
              ? "border-[#ADADAD]" // Unselected
              : "border-[#A54900]" // Selected
              } ${genderError
                ? "border-red-500 focus:border-red-500"
                : "border-gray-300 focus:border-blue-500"
              }`}
            style={{
              padding: "0.5rem",
              borderRadius: "4px",
              width: "100%",
              paddingRight: "0.5rem",
              background: "#FEFFF1", // Match the input's background
            }}
            aria-describedby={genderError ? "gender-error" : undefined}
            aria-invalid={genderError ? "true" : "false"}
          >
            <option value="" disabled>
              Select your gender
            </option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
            <option value="prefer_not_to_say">Prefer not to say</option>
          </select>
          {genderError && (
            <p
              id="gender-error"
              className="mt-1 text-sm text-red-500"
              role="alert"
            >
              {genderError}
            </p>
          )}
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
          customClasses="w-full px-4 py-3 mt-6"
          disabled={isSubmitting}
        />
      </form>
      <p className="text-primary text-sm mt-8 text-left">
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
          aria-describedby="tc-label"
          required
        />
        <label
          id="tc-label"
          htmlFor="tc"
          className="text-primary text-sm w-2/3 cursor-pointer"
        >
          I agree to the terms and conditions of <b>FLAURY</b>{" "}
          <span className="text-red-500">*</span>
        </label>
      </div>
      {showPopup && (
        <div className="absolute top-0 left-0">
          <OTPVerification email={submittedEmail} complete={onComplete} />
        </div>
      )}
    </>
  );
};

export default Step1BasicInfo;
