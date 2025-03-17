import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import notifications from "/notifications.svg";
import settings from "/settings.svg";
import favorites from "/favorites.svg";
import profilepicture from "/profilepicture.png";
import search from "/search.svg";
import backarrow from "/backarrow.svg";
import Input from "../Input";
import { useForm } from "react-hook-form";

const MainNav = () => {
  const location = useLocation();
  const [showPopup, setShowPopup] = useState(false);
  const { control, handleSubmit, watch } = useForm();

  const onSubmit = () => {
    setShowPopup(false);
  };
  const roleData = localStorage.getItem("userData");

  return (
    <>
      {roleData === "Business" ? (<nav className="w-full">
        <div className="bg-[#FEFFF1] w-[calc(100%-257px)] absolute left-[257px] h-20">
      <ul className="w-full h-20 flex justify-between items-center ml-10 pr-12">
      <div className="flex gap-6 items-center">
            <li>
              <Link
                to={
                  location.pathname === "/search"
                    ? "/dashboard"
                    : "/notifications"
                }
                className="relative"
              >
                {location.pathname === "/search" ? (
                  <img src={backarrow} alt="" />
                ) : (
                  <img src={notifications} alt="" />
                )}
                {location.pathname !== "/search" && (
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-[#f00] rounded-full"></div>
                )}
              </Link>
            </li>
            <li className="flex gap-4 items-center">
              <Link
                to="/search"
                className="w-[25rem] mx-auto flex items-center border border-primaryColor rounded-lg overflow-hidden bg-white"
              >
                <div className="px-2">
                  <img src={search} alt="" />
                </div>
                <input
                  type="text"
                  name="search"
                  id="search"
                  placeholder="Search for a service"
                  className="w-[25rem] mx-auto px-4 py-2 text-sm text-primaryColor placeholder-primaryColor"
                />
              </Link>
              <img
                src="/filter.svg"
                alt=""
                onClick={() => setShowPopup(true)}
                className="cursor-pointer"
              />
            </li>
          </div>
          <li className="flex gap-8 items-center">
            <Link to="#">
              <img src={settings} alt="" />
            </Link>
            <Link to="/favorites">
              <img src={favorites} alt="" />
            </Link>
            <Link to="/profile" className="flex items-center gap-2">
              <p className="text-xs">Becca Adom</p>
              <img src={profilepicture} alt="" />
            </Link>
          </li>
        </ul>
        </div>
      </nav>):(<><nav className="w-full">
        <div className="bg-[#FEFFF1] w-[calc(100%-257px)] absolute left-[257px] h-20">
      <ul className="w-full h-20 flex justify-between items-center ml-10 pr-12">
        <div className="flex gap-2 justify-between items-center p-4">
          <img
            src="/timelessrecommended.png"
            alt=""
            className="w-12 h-12 rounded-full"
          />
          <div>
            <p>Good Morning!</p>
            <b>Becca Baruch</b>
          </div>
          <img src="/salon-verified.svg" alt="" />
        </div>
        <li className="flex gap-8 items-center">
        <Link
                to="/notifications"
                className="relative"
              >
                  <img src={notifications} alt="" />
              </Link>
            <Link to="#">
              <img src={settings} alt="" />
            </Link>
            <Link to="/favorites">
              <img src={favorites} alt="" />
            </Link>
          </li>
        </ul>
        </div>
      </nav>
      </>)}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-[#db8335] bg-opacity-50">
          <div className="bg-white w-[90%] md:w-[35%] border py-8 px-4 md:px-20 rounded-lg shadow-lg text-left relative">
            <p
              className="cursor-pointer absolute top-4 left-4"
              onClick={() => setShowPopup(false)}
            >
              <img src="/close.svg" />
            </p>
            <div className="text-center mb-4">
              <h3 className="font-semibold text-black">Filter</h3>
              <p className="text-sm text-gray-300">Apply filter to search</p>
            </div>
            <label htmlFor="category" className="text-sm mt-3">
              Select Category
            </label>
            <select className="border border-1 border-[#ccc] w-full rounded-lg text-xs px-4 py-2">
              <option value="category">Choose Category</option>
            </select>
            <label htmlFor="location" className="text-sm mt-3">
              Location
            </label>
            <Input
              control={control}
              name="location"
              placeholder="Enter your location"
              validateType="min"
              minValue={2}
            />
            <div className="w-[90%] flex justify-between items-center text-center mx-auto">
              <input
                type="number"
                placeholder="Min"
                className="p-2 rounded-md border w-[120px] text-center"
              />

              {/* Dotted Line */}
              <div className="border-t border-dashed border-gray-400 w-14"></div>

              <input
                type="number"
                placeholder="Max"
                className="p-2 rounded-md border w-[120px] text-center"
              />
            </div>

            <div className="w-[80%] flex justify-between items-center text-center mx-auto mt-4">
              <button
                type="button"
                className="font-bold py-2 px-8 bg-secondaryColor text-primaryColor text-sm rounded-md"
                onClick={() => setShowPopup(false)}
              >
                Reset
              </button>
              <button
                type="button"
                className="font-bold py-2 px-8 bg-primaryColor text-white text-sm rounded-md"
                onClick={() => handleSubmit(onSubmit)}
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MainNav;
