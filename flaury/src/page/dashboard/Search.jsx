import { useState, useEffect } from "react";
import SideNav from "../../components/dashboard/SideNav";
import NearbySalon from "../../components/dashboard/NearbySalon";
import filter from "/filter.svg";
import arrowup from "/arrowup.svg";
import Recommended from "../../components/search/Recommended";

const Search = () => {
  const [isSmallViewport, setIsSmallViewport] = useState(
    window.innerWidth <= 900
  );

  useEffect(() => {
    const handleResize = () => {
      setIsSmallViewport(window.innerWidth <= 900);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex gap-8 text-primaryColor lg:pr-8">
      {isSmallViewport ? null : <SideNav />}
      <div className="mt-10 md:mt-20 w-full pr-10 px-4 md:px-0">
        <div className="w-full flex gap-4">
          <input
            type="text"
            className="w-full border px-4 text-sm rounded-md py-2 placeholder-black"
            placeholder="Where?"
          />
          <input
            type="text"
            className="w-full border px-4 text-sm rounded-md py-2 placeholder-black"
            placeholder="When?"
          />
        </div>
        <div className="flex gap-3 my-4">
          <button className="border text-xs px-4 py-1 rounded-full bg-primaryColor text-white border-primaryColor">
            All
          </button>
          <button className="border text-xs px-4 py-1 rounded-full text-primaryColor border-primaryColor">
            Spa
          </button>
          <button className="border text-xs px-4 py-1 rounded-full text-primaryColor border-primaryColor">
            Manicure
          </button>
          <button className="border text-xs px-4 py-1 rounded-full text-primaryColor border-primaryColor">
            Skin care
          </button>
        </div>
        <NearbySalon />
        <div className="flex gap-4">
          <button className="flex items-center gap-2 text-xs px-4 py-1 rounded-full bg-secondaryColor">
            <img src={filter} alt="" />
            Filters
          </button>
          <button className="flex items-center gap-2 text-xs px-4 py-1 rounded-full bg-secondaryColor">
            Sort by: Recommended
            <img src={arrowup} alt="" />
          </button>
        </div>
        <Recommended />
      </div>
    </div>
  );
};

export default Search;
