import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import success from "/success.svg";
import AuthEnv from "../../components/AuthEnv";
import AuthTitle from "../../components/AuthTitle";
import Input from "../../components/Input";
import { useForm } from "react-hook-form";
import Button from "../../components/Button";
import ProgressBar from "../../components/ProgressBar";

const BSignupDetails = () => {
  const [teamSize, setTeamSize] = useState("");
  const [showLocation, setShowLocation] = useState(true);
  const [mobileLocation, setMobileLocation] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [profileImage, setProfileImage] = useState(null);
  const [bannerImage, setBannerImage] = useState(null);
  const { control, handleSubmit, watch } = useForm();
  const navigate = useNavigate();

  const location = watch("location");

  useEffect(() => {
    validateForm();
  }, [location, mobileLocation, teamSize, profileImage, bannerImage]); // Runs when these values change

  const validateForm = () => {
    setDisabled(
      !((location || mobileLocation) && teamSize && profileImage && bannerImage)
    );
  };

  // Handle team size selection
  const handleTeamSizeChange = (e) => {
    setTeamSize(e.target.value);
  };

  // Handle mobile service change
  const handleMobileServiceChange = () => {
    setShowLocation(!showLocation);
    setMobileLocation("mobile");
  };

  const handleImageUpload = (event, type) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file); // Create preview URL

      if (type === "profile") {
        setProfileImage(imageUrl);
      } else if (type === "banner") {
        setBannerImage(imageUrl);
      }
    }
  };

  // Handle form submission
  const onSubmit = () => {
    if (!disabled) {
      navigate("/business-verification");
    }
  };

  return (
    <AuthEnv
      style={{ marginTop: 20 }}
      children={
        <>
          <AuthTitle title="Sign Up" />
          <p className="text-primaryColor text-sm pb-2">Organization info</p>
          <ProgressBar activeStep={2} />

          <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label htmlFor="teamSize" className="block font-medium text-lg">
                What's your team size?
              </label>
              <p className="text-sm text-[#aaa]">
                This information will help use set up your calendar correctly.
              </p>
              <label className="flex items-center">
                <input
                  type="radio"
                  id="teamSize1"
                  name="teamSize"
                  value="1"
                  className="w-4 h-4 mr-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-offset-2 focus:ring-primaryColor"
                  onChange={handleTeamSizeChange}
                />
                <span className="my-2">It's just me</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  id="teamSize1"
                  name="teamSize"
                  value="2-5"
                  className="w-4 h-4 mr-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-offset-2 focus:ring-primaryColor"
                  onChange={handleTeamSizeChange}
                />
                <span className="my-2">2-5 people</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  id="teamSize2"
                  name="teamSize"
                  value="6-10"
                  className="w-4 h-4 mr-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-offset-2 focus:ring-primaryColor"
                  onChange={handleTeamSizeChange}
                />
                <span className="my-2">6-10 people</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  id="teamSize3"
                  name="teamSize"
                  value="11+"
                  className="w-4 h-4 mr-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-offset-2 focus:ring-primaryColor"
                  onChange={handleTeamSizeChange}
                />
                <span className="my-2">11+ people</span>
              </label>
            </div>
            <label htmlFor="location" className="block font-medium text-lg">
              Set your location
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
            <div className="flex items-center gap-4">
              <input
                type="checkbox"
                id="mobileService"
                name="mobileService"
                className="w-[1rem] h-[1rem]"
                onChange={handleMobileServiceChange}
              />
              <label htmlFor="mobileService" className="text-sm">
                I don't have a business address (mobile and online services
                only)
              </label>
            </div>
            <label
              htmlFor="profileUpload"
              className="block font-medium text-lg mt-4 mb-2"
            >
              Upload profile image
            </label>
            <div className="bg-gray-100 w-40 h-40 rounded-full flex justify-center items-center mb-4">
              <input
                type="file"
                id="profileUpload"
                className="hidden"
                accept="image/*"
                onChange={(e) => handleImageUpload(e, "profile")}
              />
              <label
                htmlFor="profileUpload"
                className="text-gray-300 cursor-pointer"
              >
                {profileImage ? (
                  <img
                    src={profileImage}
                    alt="Profile Preview"
                    className="w-40 h-40 object-cover rounded-full"
                  />
                ) : (
                  <div className="flex flex-col text-center items-center justify-center text-xs">
                    <img src="/camera.svg" alt="Upload icon" />
                    Upload profile image
                  </div>
                )}
              </label>
            </div>
            <label
              htmlFor="bannerUpload"
              className="block font-medium text-lg mt-4 mb-2"
            >
              Upload banner image
            </label>
            <div className="bg-gray-100 w-full h-40 flex justify-center items-center mb-4">
              <input
                type="file"
                id="bannerUpload"
                className="hidden"
                accept="image/*"
                onChange={(e) => handleImageUpload(e, "banner")}
              />
              <label
                htmlFor="bannerUpload"
                className="flex justify-center text-gray-300 cursor-pointer w-full h-full"
              >
                {bannerImage ? (
                  <img
                    src={bannerImage}
                    alt="Banner Preview"
                    className="w-full h-40 object-cover"
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center text-xs">
                    <img src="/camera.svg" alt="Upload icon" />
                    Upload banner image
                  </div>
                )}
              </label>
            </div>
            <Button
              type="submit"
              title="Continue"
              customClasses="w-full px-4 py-3"
              disabled={disabled} // Disable the button if form is not valid
            />
          </form>
        </>
      }
    />
  );
};

export default BSignupDetails;
