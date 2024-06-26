import { useState } from "react";

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
    icon: "/facial-massage.svg",
    name: "Facials & skincare",
  },
  {
    id: 5,
    icon: "/eyebrow.svg",
    name: "Eyebrows & lashes",
  },
  {
    id: 6,
    icon: "/spa.svg",
    name: "Spa",
  },
  {
    id: 7,
    icon: "/massage.svg",
    name: "Massage & therapy",
  },
  {
    id: 8,
    icon: "/fitness.svg",
    name: "Fitness",
  },
  {
    id: 9,
    icon: "/others.svg",
    name: "Others",
  },
];

const BSignupCategory = ({ setPage }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedCategory !== null) {
      setPage("verification");
    }
  };

  return (
    <div className="w-full flex justify-center items-center bg-primaryColor relative">
      <div className="gradient-overlay-signup absolute inset-0"></div>
      <div className="w-full md:w-[70%] md:max-w-[768px] mt-20 p-10 md:px-20 md:py-10 bg-white md:rounded-xl flex items-center flex-col shadow-xl z-10 lg:scale-75">
        <h3 className="text-primaryColor font-bold text-2xl py-2">Sign Up</h3>
        <p className="text-primaryColor text-sm pb-2">
          This information will help customers find you on the Flaury app
        </p>
        <form className="w-full" onSubmit={handleSubmit}>
          <div className="w-full">
            {categories.map((category) => (
              <label
                htmlFor={`category-${category.id}`}
                className="cursor-pointer"
              >
                <div
                  key={category.id}
                  className="w-full flex justify-between shadow-md py-6 rounded-md px-3 mb-2"
                >
                  <div className="flex items-center gap-3">
                    <img src={category.icon} alt="" className="w-6 h-6" />
                    {category.name}
                  </div>
                  <input
                    type="radio"
                    name="category"
                    id={`category-${category.id}`}
                    onChange={() => setSelectedCategory(category.id)}
                  />
                </div>
              </label>
            ))}
          </div>
          <button
            type="submit"
            className={`w-full px-4 py-3 rounded-lg mt-6 text-sm ${
              selectedCategory === null
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-primaryColor text-[#fff]"
            }`}
            disabled={selectedCategory === null}
          >
            Continue
          </button>
        </form>
      </div>
    </div>
  );
};

export default BSignupCategory;
