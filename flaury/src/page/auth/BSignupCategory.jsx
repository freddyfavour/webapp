import { useState } from "react";
import AuthEnv from "../../components/AuthEnv";
import AuthTitle from "../../components/AuthTitle";
import { useNavigate } from "react-router-dom";
import Input from "../../components/Input";
import { useForm } from "react-hook-form";
import ProgressBar from "../../components/ProgressBar";

const categories = [
  { id: 1, name: "Haircut & styling" },
  { id: 2, name: "Makeup" },
  { id: 3, name: "Nail services" },
  { id: 4, name: "Facials & skincare" },
  { id: 5, name: "Eyebrows & lashes" },
  { id: 6, name: "Spa" },
  { id: 7, name: "Massage & therapy" },
  { id: 8, name: "Fitness" },
  { id: 9, name: "Others" },
];

const BSignupCategory = () => {
  const [description, setDescription] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const navigate = useNavigate();
  const { control, handleSubmit, watch } = useForm();
  const businessName = watch("businessName");

  console.log(businessName, description, selectedCategory);
  const onSubmit = () => {
    if (businessName && description && selectedCategory) {
      navigate("/business-details");
    }
  };

  return (
    <AuthEnv
      children={
        <>
          <AuthTitle title="Sign Up" />

          {/* Progress Bar */}
          <ProgressBar activeStep={1} />

          <p className="text-primaryColor text-sm pb-4">
            This information will help customers find you on the Flaury app
          </p>

          <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label htmlFor="category">Category</label>
              <select
                id="category"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg mt-1"
              >
                <option value="" disabled>
                  Select a category
                </option>
                {categories.map((category) => (
                  <option key={category.id} value={category.name}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
            {/* Business Name Input */}
            <Input
              control={control}
              name="businessName"
              label="Business name"
              placeholder="Enter your business name"
              validateType="min"
              minValue={2}
            />
            {/* Business Description Input */}
            <div className="mb-4">
              <label htmlFor="description">Description</label>
              <textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Write a brief description of your business"
                rows="3"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg mt-1"
              />
            </div>
            {/* Category Dropdown */}
            {/* Submit Button */}
            <button
              type="submit"
              className={`w-full px-4 py-3 rounded-lg mt-6 text-sm ${
                businessName && description && selectedCategory
                  ? "bg-primaryColor text-white"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
              disabled={!businessName || !description || !selectedCategory}
            >
              Continue
            </button>
          </form>
        </>
      }
    />
  );
};

export default BSignupCategory;
