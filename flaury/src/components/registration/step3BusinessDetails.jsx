import React, { useState, useEffect } from "react";
import { useAuthStore } from "../../store/authstore";

import AuthEnv from "../AuthEnv";
import AuthTitle from "../AuthTitle";
import { useNavigate } from "react-router-dom";
import Input from "../Input";
import Button from "../Button";
import { useForm } from "react-hook-form";
import ProgressBar from "../ProgressBar";

const Step3BusinessDetails = ({ onComplete }) => {
  const [teamSize, setTeamSize] = useState("");
  const [showLocation, setShowLocation] = useState(true);
  const [mobileLocation, setMobileLocation] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [profileImage, setProfileImage] = useState(null);
  const [bannerImage, setBannerImage] = useState(null);
  const [profileImageFile, setProfileImageFile] = useState(null);
  const [bannerImageFile, setBannerImageFile] = useState(null);
  const { control, handleSubmit, watch, setValue } = useForm();
  const { updateRegistrationData } = useAuthStore();
  const navigate = useNavigate();

  const location = watch("location");

  useEffect(() => {
    validateForm();
  }, [location, mobileLocation, teamSize, profileImage, bannerImage]);

  // Cleanup object URLs when component unmounts to prevent memory leaks
  useEffect(() => {
    return () => {
      if (profileImage && profileImage.startsWith('blob:')) {
        URL.revokeObjectURL(profileImage);
      }
      if (bannerImage && bannerImage.startsWith('blob:')) {
        URL.revokeObjectURL(bannerImage);
      }
    };
  }, [profileImage, bannerImage]);

  const validateForm = () => {
    setDisabled(
      !((location || mobileLocation) && teamSize)
    );
  };

  // Handle team size selection
  const handleTeamSizeChange = (e) => {
    setTeamSize(e.target.value);
    // Update form value for react-hook-form
    setValue("team_size", e.target.value);
  };

  // Handle mobile service change
  const handleMobileServiceChange = () => {
    setShowLocation(!showLocation);
    if (!showLocation) {
      setMobileLocation("mobile");
      setValue("location", "mobile");
    } else {
      setMobileLocation("");
      setValue("location", "");
    }
  };

  const handleImageUpload = (event, type) => {
    const file = event.target.files[0];
    if (file) {
      // Validate file type
      if (!file.type.startsWith('image/')) {
        alert('Please select a valid image file.');
        return;
      }

      // Validate file size (e.g., max 5MB)
      const maxSize = 5 * 1024 * 1024; // 5MB
      if (file.size > maxSize) {
        alert('File size must be less than 5MB.');
        return;
      }

      const imageUrl = URL.createObjectURL(file);

      if (type === "profile") {
        // Clean up previous image URL
        if (profileImage && profileImage.startsWith('blob:')) {
          URL.revokeObjectURL(profileImage);
        }
        setProfileImage(imageUrl);
        setProfileImageFile(file);
        setValue("profile_image", file);
      } else if (type === "banner") {
        // Clean up previous image URL
        if (bannerImage && bannerImage.startsWith('blob:')) {
          URL.revokeObjectURL(bannerImage);
        }
        setBannerImage(imageUrl);
        setBannerImageFile(file);
        setValue("banner_image", file);
      }
    }
  };

  const onSubmit = (formData) => {
    // TODO: Update the Registration Data for the API
    const userData = {
      team_size: teamSize, // Use state value instead of formData
      location: showLocation ? formData.location : "mobile",
      profile_image: profileImageFile,
      banner_image: bannerImageFile,
    };

    updateRegistrationData(userData);
    onComplete();
  };

  return (
    <AuthEnv
      children={
        <>
          <AuthTitle title="Sign Up" />
          <p className="text-primary text-sm pb-2">Organization info</p>
          <ProgressBar activeStep={2} />

          <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label htmlFor="teamSize" className="block font-medium text-lg">
                What's your team size? <span className="text-red-500">*</span>
              </label>
              <p className="text-sm text-[#aaa]">
                This information will help us set up your calendar correctly.
              </p>
              <div className="mt-2">
                <label className="flex items-center mb-2">
                  <input
                    type="radio"
                    id="teamSize1"
                    name="teamSize"
                    value="1"
                    checked={teamSize === "1"}
                    className="w-4 h-4 mr-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                    onChange={handleTeamSizeChange}
                  />
                  <span>It's just me</span>
                </label>
                <label className="flex items-center mb-2">
                  <input
                    type="radio"
                    id="teamSize2"
                    name="teamSize"
                    value="2-5"
                    checked={teamSize === "2-5"}
                    className="w-4 h-4 mr-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                    onChange={handleTeamSizeChange}
                  />
                  <span>2-5 people</span>
                </label>
                <label className="flex items-center mb-2">
                  <input
                    type="radio"
                    id="teamSize3"
                    name="teamSize"
                    value="6-10"
                    checked={teamSize === "6-10"}
                    className="w-4 h-4 mr-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                    onChange={handleTeamSizeChange}
                  />
                  <span>6-10 people</span>
                </label>
                <label className="flex items-center mb-2">
                  <input
                    type="radio"
                    id="teamSize4"
                    name="teamSize"
                    value="11+"
                    checked={teamSize === "11+"}
                    className="w-4 h-4 mr-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                    onChange={handleTeamSizeChange}
                  />
                  <span>11+ people</span>
                </label>
              </div>
            </div>

            <div className="mb-4">
              <label htmlFor="location" className="block font-medium text-lg">
                Set your location <span className="text-red-500">*</span>
              </label>
              <p className="text-sm text-[#aaa] mb-4">
                Add your business location so your clients can easily find you.
              </p>
              {showLocation && (
                <Input
                  control={control}
                  name="location"
                  label="Where's your business located?"
                  placeholder="Enter manually"
                  validateType="min"
                  minValue={2}
                />
              )}
              <div className="flex items-center gap-4 mt-2">
                <input
                  type="checkbox"
                  id="mobileService"
                  name="mobileService"
                  className="w-4 h-4"
                  checked={!showLocation}
                  onChange={handleMobileServiceChange}
                />
                <label htmlFor="mobileService" className="text-sm cursor-pointer">
                  I don't have a business address (mobile and online services only)
                </label>
              </div>
            </div>

            <div className="mb-4">
              <label
                htmlFor="profileUpload"
                className="block font-medium text-lg mb-2"
              >
                Upload profile image
              </label>
              <div className="bg-gray-100 w-40 h-40 rounded-full flex justify-center items-center mb-4 mx-auto">
                <input
                  type="file"
                  id="profileUpload"
                  className="hidden"
                  accept="image/*"
                  onChange={(e) => handleImageUpload(e, "profile")}
                />
                <label
                  htmlFor="profileUpload"
                  className="text-gray-300 cursor-pointer w-full h-full flex items-center justify-center"
                >
                  {profileImage ? (
                    <img
                      src={profileImage}
                      alt="Profile Preview"
                      className="w-40 h-40 object-cover rounded-full"
                    />
                  ) : (
                    <div className="flex flex-col text-center items-center justify-center text-xs">
                      <img src="/camera.svg" alt="Upload icon" className="mb-2" />
                      Upload profile image
                    </div>
                  )}
                </label>
              </div>
            </div>

            <div className="mb-6">
              <label
                htmlFor="bannerUpload"
                className="block font-medium text-lg mb-2"
              >
                Upload banner image
              </label>
              <div className="bg-gray-100 w-full h-40 flex justify-center items-center mb-4 rounded-lg">
                <input
                  type="file"
                  id="bannerUpload"
                  className="hidden"
                  accept="image/*"
                  onChange={(e) => handleImageUpload(e, "banner")}
                />
                <label
                  htmlFor="bannerUpload"
                  className="flex justify-center text-gray-300 cursor-pointer w-full h-full items-center"
                >
                  {bannerImage ? (
                    <img
                      src={bannerImage}
                      alt="Banner Preview"
                      className="w-full h-40 object-cover rounded-lg"
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center text-xs">
                      <img src="/camera.svg" alt="Upload icon" className="mb-2" />
                      Upload banner image
                    </div>
                  )}
                </label>
              </div>
            </div>

            <Button
              type="submit"
              title="Continue"
              customClasses="w-full px-4 py-3"
              disabled={disabled}
            />
          </form>
        </>
      }
    />
  );
};

export default Step3BusinessDetails;