import { Link } from "react-router-dom";
import notifications from "/notifications.svg";
import settings from "/settings.svg";
import favorites from "/favorites.svg";
import profilepicture from "/profilepicture.png";

const MainNav = () => {
  return (
    <nav className="w-full">
      <ul className="w-3/4 h-20 flex gap-4 justify-between items-center absolute right-10">
        <li>
          <Link to="/notifications">
            <img src={notifications} alt="" />
          </Link>
        </li>
        <li>
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search"
            className="border border-primaryColor rounded-lg text-xs w-[25rem] px-4 py-2"
          />
        </li>
        <li>
          <Link to="/settings">
            <img src={settings} alt="" />
          </Link>
        </li>
        <li>
          <Link to="/favorites">
            <img src={favorites} alt="" />
          </Link>
        </li>
        <div className="flex items-center gap-2">
          <p className="text-xs">Becca Adom</p>
          <img src={profilepicture} alt="" />
        </div>
      </ul>
    </nav>
  );
};

export default MainNav;
