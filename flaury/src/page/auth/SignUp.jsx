import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import success from "/success.svg";

const SignUp = ({ onLogin }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [password, setPassword] = useState("");
  const [checkboxChecked, setCheckboxChecked] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [showPopup, setShowPopup] = useState(false);

  const navigate = useNavigate();

  // Function to check if all fields are filled
  const handleFormValidation = () => {
    if (
      name.trim() !== "" &&
      email.trim() !== "" &&
      mobileNumber.trim() !== "" &&
      password.trim() !== "" &&
      checkboxChecked
    ) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  // Function to handle changes in input fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "mobileNumber":
        setMobileNumber(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        break;
    }
    handleFormValidation(); // Check form validation on every input change
  };

  // Function to handle changes in the checkbox
  const handleCheckboxChange = () => {
    setCheckboxChecked(!checkboxChecked);
    handleFormValidation(); // Check form validation on checkbox change
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/dashboard");
    onLogin();
    if (disabled) {
      return;
    }
    setShowPopup(true);
  };

  return (
    <div className="h-screen lg:h-full w-full flex justify-center items-center bg-primaryColor">
      <div className="gradient-overlay-signup h-[100%] md:h-[120%]"></div>
      <div className="w-full md:w-[70%] md:max-w-[768px] mt-20 p-10 md:p-20 bg-[#fff] rounded-xl flex items-center flex-col shadow-xl z-10 lg:scale-75">
        <h3 className="text-primaryColor font-bold text-2xl py-2">Sign Up</h3>
        <p className="text-primaryColor text-sm pb-2">
          Register using your correct details
        </p>
        <form className="w-full">
          <label htmlFor="name" className="">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleInputChange}
            className="border w-full px-4 py-2 rounded-lg mt-1 mb-2"
            required
          />
          <label htmlFor="email" className="">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleInputChange}
            className="border w-full px-4 py-2 rounded-lg mt-1 mb-2"
            required
          />
          <label htmlFor="mobile-number" className="">
            Mobile Number
          </label>
          <input
            type="number"
            name="mobileNumber"
            value={mobileNumber}
            inputMode="numeric"
            onChange={handleInputChange}
            className="border w-full px-4 py-2 rounded-lg mt-1 mb-2"
            required
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
            required
          />

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
      </div>
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-[#db8335] bg-opacity-50 z-10">
          <div className="bg-white w-[35%] py-8 px-20 rounded-lg shadow-lg text-center">
            <img src={success} alt="" className="mx-auto mb-4" />
            <h3 className="font-bold mb-4 text-primaryColor">
              Congratulations
            </h3>
            <p className="mb-4 text-xs text-black">
              Your account is now ready to use. You will be redirected to your
              homepage shortly.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SignUp;
