import { Link, useLocation } from "react-router-dom";
import notifications from "/notifications.svg";
import settings from "/settings.svg";
import favorites from "/favorites.svg";
import profilepicture from "/profilepicture.png";
import search from "/search.svg";
import backarrow from "/backarrow.svg";

const MainNav = () => {
  const location = useLocation();

  return (
    <nav className="w-full">
      <ul className="w-3/4 h-20 flex gap-4 justify-between items-center absolute right-10">
        <li>
          <Link
            to={
              location.pathname === "/search" ? "/dashboard" : "/notifications"
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
        <li>
          <Link
            to="/search"
            className="flex items-center border border-primaryColor rounded-lg overflow-hidden bg-white"
          >
            <div className="px-2">
              <img src={search} alt="" />
            </div>
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Search for a service"
              className="w-[25rem] px-4 py-2 text-sm text-primaryColor placeholder-primaryColor"
            />
          </Link>
        </li>
        <li>
          <Link to="#">
            <img src={settings} alt="" />
          </Link>
        </li>
        <li>
          <Link to="/favorites">
            <img src={favorites} alt="" />
          </Link>
        </li>
        <Link to="/profile" className="flex items-center gap-2">
          <p className="text-xs">Becca Adom</p>
          <img src={profilepicture} alt="" />
        </Link>
      </ul>
    </nav>
  );
};

export default MainNav;
