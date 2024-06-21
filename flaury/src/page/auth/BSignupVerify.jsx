import { useState } from "react";
import { useNavigate } from "react-router-dom";

const categories = [
  {
    id: 1,
    icon: "/hair.svg",
    name: "Haircut & styling",
  },
  {
    id: 2,
    icon: "/brush.svg",
    name: "Makeup",
  },
  {
    id: 3,
    icon: "/nail.svg",
    name: "Nail services",
  },
  {
    id: 4,
    icon: "/facial.svg",
    name: "Facials & skincare",
  },
  {
    id: 5,
    icon: "/hair.svg",
    name: "Eyebrows & lashes",
  },
  {
    id: 6,
    icon: "/brush.svg",
    name: "Spa",
  },
  {
    id: 7,
    icon: "/nail.svg",
    name: "Massage & therapy",
  },
  {
    id: 8,
    icon: "/facial.svg",
    name: "Fitness",
  },
  {
    id: 9,
    icon: "/facial.svg",
    name: "Others",
  },
];

const BSignupVerify = ({ setPage }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedCategory !== null) {
      setPage("verification");
    }
    setShowPopup(true);
    navigate("/dashboard");
    localStorage.setItem("userData", JSON.stringify({ role: "business" }));
  };

  return (
    <div className="lg:h-full w-full flex justify-center items-center bg-primaryColor">
      <div className="gradient-overlay-signup h-[100%] md:h-[120%]"></div>
      <div className="w-full md:w-[70%] md:max-w-[768px] mt-20 p-10 md:p-20 bg-[#fff] md:rounded-xl flex items-center flex-col shadow-xl z-9 lg:scale-75">
        <h3 className="text-primaryColor font-bold text-2xl py-2">Sign Up</h3>
        <p className="text-primaryColor text-sm pb-2">
          For the safety of our customers, you are required to submit either of
          these documents for verification.
        </p>
        <form className="w-full" onSubmit={handleSubmit}>
          <label>Verification Type</label>
          <select className="w-full border-b px-3 py-4">
            <option>Select Verification Type</option>
            <option value="nin">NIN</option>
          </select>
          <label>Upload verification photo</label>
          <div className="bg-gray-100 w-full h-40 flex justify-center items-center">
            <div>
              <p className="text-gray-300">Upload verification photo</p>
            </div>
          </div>
          {/* <button
            type="submit"
            className={`w-full px-4 py-3 rounded-lg mt-6 text-sm ${
              selectedCategory === null
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-primaryColor text-[#fff]"
            }`}
            disabled={selectedCategory === null}
          >
            Submit
          </button> */}
          <button type="submit">Submit</button>
        </form>
      </div>
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-[#db8335] bg-opacity-50 z-10">
          <div className="bg-white w-[35%] py-8 px-20 rounded-lg shadow-lg text-center">
            <img src="/success.svg" alt="" className="mx-auto mb-4" />
            <h3 className="font-bold mb-4 text-primaryColor">Successful!</h3>
            <p className="mb-4 text-xs text-black">
              You have successfully created your account.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default BSignupVerify;
