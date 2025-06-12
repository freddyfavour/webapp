import { Bell, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const MiniNav = ({ toggleSidebar }) => {

  return (
    <div className="lg:hidden">
      <div className="flex items-start justify-between my-4">
        <div className="flex items-center gap-3">
          <button onClick={toggleSidebar} className="-mt-4 text-primary rounded-md hover:bg-gray-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <div className="flex flex-col items-start">
            <h3 className="font-bold text-primary text-lg">Hello Becca 😊</h3>
            <p className="text-xs">What are you saying for today?</p>
          </div>
        </div>

        <div className="flex gap-3 text-primary">
          {/* Notifications */}
          <Link to="/notifications" className="relative text-primary rounded-full hover:bg-gray-100">
            <Bell className="h-6 w-6" />
            <span className="absolute top-1 right-1 w-1.5 h-1.5 bg-red-500 rounded-full"></span>
          </Link>

          {/* Favorites */}
          <Link to="/favorites" className="rounded-full hover:bg-gray-100">
            <Heart className="h-6 w-6" />
          </Link>
        </div>
      </div>

      <Link to="/search">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search"
          className="w-full border border-primary rounded-lg text-xs px-4 py-2"
        />
      </Link>
    </div>
  );
};

export default MiniNav;
