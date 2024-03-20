import { Link, useLocation } from "react-router-dom";
import logo from "/logo.png";
import { useState, useEffect } from "react";
import menu from "/hamburger-menu.svg";

const Nav = () => {
  const location = useLocation();
  const [authNav, setAuthNav] = useState(false);
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    setAuthNav(
      location.pathname === "/login" ||
        location.pathname === "/signup" ||
        location.pathname === "/forgot-password" ||
        location.pathname === "/forgot2" ||
        location.pathname === "/forgot3"
    );
  }, [location]);

  return (
    <>
      {authNav ? (
        <div className="w-full bg-[#fff] flex justify-center items-center z-10">
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </div>
      ) : (
        <>
          <div className="w-full bg-[#fff] px-4 md:px-20 py-2 flex justify-between items-center z-10">
            <Link to="/">
              <img src={logo} alt="Logo" />
            </Link>
            <nav className="hidden md:block">
              <ul className="flex gap-4 items-center">
                <li>
                  <Link className="text-sm" to="/">
                    Home
                  </Link>
                </li>
                <li>
                  <Link className="text-sm" to="/company">
                    Company
                  </Link>
                </li>
                <li>
                  <Link className="text-sm" to="#services">
                    Services
                  </Link>
                </li>
                <li>
                  <Link to="/signup">
                    <button className="transition bg-primaryColor text-white border hover:border-lightPrimaryColor hover:bg-transparent hover:text-primaryColor text-xs px-4 py-2 rounded-lg">
                      Sign Up
                    </button>
                  </Link>
                </li>
                <li>
                  <Link to="/login">
                    <button className="transition border border-lightPrimaryColor text-primaryColor hover:bg-primaryColor hover:border-primaryColor hover:text-white text-xs px-4 py-2 rounded-lg">
                      Login
                    </button>
                  </Link>
                </li>
              </ul>
            </nav>
            <div
              className="block md:hidden cursor-pointer"
              onClick={() => setShowNav(!showNav)}
            >
              <img src={menu} alt="" />
            </div>
          </div>
          {showNav && (
            <nav className="block md:hidden">
              <hr />
              <ul className="px-4 py-4">
                <li className="text-normal pb-4">
                  <Link to="/" onClick={() => setShowNav(false)}>
                    Home
                  </Link>
                </li>
                <li className="text-normal pb-4">
                  <Link to="/company" onClick={() => setShowNav(false)}>
                    Company
                  </Link>
                </li>
                <li className="text-normal">
                  <Link to="#services" onClick={() => setShowNav(false)}>
                    Services
                  </Link>
                </li>
                <li>
                  <Link to="/signup" onClick={() => setShowNav(false)}>
                    <button className="transition bg-primaryColor text-white border hover:border-lightPrimaryColor hover:bg-transparent hover:text-primaryColor text-sm px-4 py-2 rounded-lg my-4">
                      Sign Up
                    </button>
                  </Link>
                </li>
                <li>
                  <Link to="/login" onClick={() => setShowNav(false)}>
                    <button className="transition border border-lightPrimaryColor text-primaryColor hover:bg-primaryColor hover:border-primaryColor hover:text-white text-sm px-4 py-2 rounded-lg">
                      Login
                    </button>
                  </Link>
                </li>
              </ul>
            </nav>
          )}
        </>
      )}
    </>
  );
};

export default Nav;
