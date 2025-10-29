import React, { useState } from "react";
import { useAuthStore } from "@/store/authstore";

import AuthEnv from "../AuthEnv";
import AuthTitle from "../AuthTitle";
import { useNavigate } from "react-router-dom";
import Input from "../Input";
import { useForm } from "react-hook-form";
import ProgressBar from "../ProgressBar";

const step4BusinessVerification = ({ onComplete }) => {
  const { updateRegistrationData, registrationData, prevStep } = useAuthStore();

  const [description, setDescription] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const navigate = useNavigate();
  const { control, handleSubmit, watch } = useForm();
  const businessName = watch("businessName");

  const [uploadedImage, setUploadedImage] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setUploadedImage(file);
  };

  const onSubmit = (formData) => {
    // TODO: Update the Registration Data for the API
    const userData = {
      team_size: formData.team_size,
      location: formData.location,
      profile_image: formData.profile_image,
      banner_image: formData.banner_image,
    };

    updateRegistrationData(userData);
    onComplete();
  };

  return (
    <>
      <AuthTitle title="Sign Up" />
      <p className="text-primary text-sm pb-2 text-center">
        For the safety of our customers, you are required to submit either of
        these documents for verification.
      </p>
      <ProgressBar activeStep={3} />
      <form className="w-full" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="category">Category</label>
          <select
            id="category"
            value={selectedCategory}
            onChange={handleCategoryChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg mt-1"
          >
            <option value="">Select Verification Type</option>
            <option value="nin">NIN</option>
          </select>
        </div>
        {selectedCategory && (
          <>
            <label htmlFor="upload">Upload Verification Photo</label>
            <div className="bg-gray-100 w-full h-40 flex justify-center items-center mb-4">
              <input
                type="file"
                id="upload"
                className="hidden"
                onChange={handleImageUpload}
                accept="image/*"
                required
              />
              <label htmlFor="upload" className="text-gray-300 cursor-pointer">
                {uploadedImage ? (
                  uploadedImage.name
                ) : (
                  <div className="flex flex-col items-center justify-center">
                    <img src="/camera.svg" />
                    Upload verification photo
                  </div>
                )}
              </label>
            </div>
          </>
        )}
        <button
          type="submit"
          className={`w-full px-4 py-3 rounded-lg mt-6 text-sm ${!selectedCategory || !uploadedImage
            ? "bg-gray-300 text-gray-500 cursor-not-allowed"
            : "bg-primary text-white"
            }`}
          disabled={!selectedCategory || !uploadedImage}
        >
          Submit
        </button>
      </form>
      {showPopup && (
        <Popup
          title="Successful!"
          subtitle="You have successfully created your account."
          image="/success.svg"
        />
      )}
    </>
  );
};

export default step4BusinessVerification;
