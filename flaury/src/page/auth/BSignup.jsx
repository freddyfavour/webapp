import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import success from "/success.svg";
import AuthEnv from "../../components/AuthEnv";
import AuthTitle from "../../components/AuthTitle";
import Input from "../../components/Input";
import { useForm } from "react-hook-form";
import Button from "../../components/Button";

const BSignupInfo = ({ setPage }) => {
  const [gender, setGender] = useState(""); // New state for gender
  const [checkboxChecked, setCheckboxChecked] = useState(false);
  const [disabled, setDisabled] = useState(true);

  const navigate = useNavigate();
  const { control, handleSubmit, watch } = useForm();

  // Function to check if all fields are filled and if mobile number is 11 digits
  const handleFormValidation = () => {
    if (
      gender !== "" && // Ensure gender is selected
      checkboxChecked
    ) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  // Function to handle changes in the select field for gender
  const handleGenderChange = (e) => {
    setGender(e.target.value);
    handleFormValidation(); // Check form validation when gender changes
  };

  // Function to handle changes in the checkbox
  const handleCheckboxChange = () => {
    setCheckboxChecked(!checkboxChecked);
    handleFormValidation(); // Check form validation on checkbox change
  };

  const onSubmit = (e) => {
    navigate("/business-category");
    if (disabled) {
      return;
    }
  };

  return (
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
            <div className="mb-4">
              <label
                htmlFor="gender"
                className="block text-sm font-medium text-primaryColor"
              >
                Gender
              </label>
              <select
                name="gender"
                id="gender"
                value={gender}
                onChange={handleGenderChange}
                className="block w-full mt-1 p-3 border border-gray-300 rounded-lg text-sm"
              >
                <option value="" disabled>
                  Select your gender
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
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
              type="submit"
              title="Continue"
              customClasses="w-full px-4 py-3"
              disabled={disabled} // Disable the button if form is not valid
            />
          </form>

          <p className="text-primaryColor text-sm mt-8 text-left">
            Already have an account?{" "}
            <Link to="/login" className="font-bold">
              Log in
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
  );
};

export default BSignupInfo;
