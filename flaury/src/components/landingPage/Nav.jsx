import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "/logo.svg";
import { useState, useEffect } from "react";
import menu from "/hamburger-menu.svg";
import Button from "../Button";

const Nav = () => {
  const location = useLocation();
  const [authNav, setAuthNav] = useState(false);
  const [showNav, setShowNav] = useState(false);
  const [showCompanyMenu, setShowCompanyMenu] = useState(false);

  const [token, setToken] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    setAuthNav(
      location.pathname === "/login" ||
      location.pathname === "/choose-role" ||
      location.pathname === "/signup" ||
      location.pathname === "/forgot-password" ||
      location.pathname === "/forgot2" ||
      location.pathname === "/forgot3" ||
      location.pathname === "/register"
    );
  }, [location]);


  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedToken = localStorage.getItem("bbToken");
      setToken(storedToken);

      const handleScroll = () => {
        const isScrolled = window.scrollY > 20;
        if (isScrolled !== scrolled) {
          setScrolled(isScrolled);
        }
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [scrolled]);

  const handleLinkClick = () => {
    setShowCompanyMenu(false); // Close the dropdown menu after clicking a link
    setShowNav(false); // Close the mobile menu after clicking a link
  };

  return (
    <div className={`fixed w-full h-[60px] sm:h-[70px] px-4 sm:px-8 lg:px-24 z-50 flex flex-row justify-between items-center transition-all duration-300 ${scrolled
      ? "bg-[#FEFFF1]/95 backdrop-blur-md shadow-lg"
      : "bg-[#FEFFF1] border border-b"
      }`}>
      {authNav ? (
        <div className="w-full flex justify-center items-center z-[100] border border-b">
          <Link to="/">
            <img src={logo} alt="Logo" className="h-10" />
          </Link>
        </div>
      ) : (
        <>
          <div className=" w-full py-2 z-[100]">
            <div className="max-w-[1200px] mx-auto flex justify-between items-center">
              <Link to="/">
                <img src={logo} alt="Logo" className="h-10 md:h-14" />
              </Link>
              <nav className="hidden md:block">
                <ul className="flex gap-4 items-center">
                  <li>
                    <Link className="text-sm font-semibold" to="/">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/about"
                      className="block px-4 py-2 text-sm font-medium"
                      onClick={handleLinkClick} // Close dropdown after link click
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/blog"
                      className="block px-4 py-2 text-sm font-medium"
                      onClick={handleLinkClick} // Close dropdown after link click
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Button
                      title="Sign Up"
                      onClick={() => navigate("/choose-role")}
                      customClasses="px-8 py-3"
                    />
                  </li>
                  <li>
                    <Link to="/login">
                      <button className="transition border border-lightprimary text-primary text-xs px-8 py-3 rounded-lg font-semibold">
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
          </div>
          {showNav && (
            <nav className="mt-14 md:mt-0 block md:hidden">
              <hr />
              <ul className="px-4 py-4">
                <li className="text-normal pb-4">
                  <Link to="/" onClick={() => setShowNav(false)}>
                    Home
                  </Link>
                </li>
                <li className="text-normal pb-4">
                  <Link to="/about" onClick={() => setShowNav(false)}>
                    About Us
                  </Link>
                </li>
                <li className="text-normal pb-4">
                  <Link to="/blog" onClick={() => setShowNav(false)}>
                    Blog
                  </Link>
                </li>
                <li className="text-normal pb-4">
                  <Link to="#services" onClick={() => setShowNav(false)}>
                    Services
                  </Link>
                </li>
                <li>
                  <Button
                    title="Sign Up"
                    onClick={() => navigate("/choose-role")}
                    customClasses="px-8 py-3"
                  />
                </li>
                <li>
                  <Link to="/login" onClick={() => setShowNav(false)}>
                    <button className="transition border border-lightprimary text-primary text-sm px-4 py-2 rounded-lg">
                      Login
                    </button>
                  </Link>
                </li>
              </ul>
            </nav>
          )}
        </>
      )}
    </div>
  );
};

export default Nav;
