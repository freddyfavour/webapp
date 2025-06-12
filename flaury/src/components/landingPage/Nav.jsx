import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import logo from "/logo.svg";
import menuIcon from "/hamburger-menu.svg";
import Button from "../Button";

const Nav = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [authNav, setAuthNav] = useState(false);
  const [showNav, setShowNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const authPages = [
      "/login", "/choose-role", "/signup",
      "/forgot-password", "/forgot2", "/forgot3", "/register",
    ];
    setAuthNav(authPages.includes(location.pathname));
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = showNav ? "hidden" : "auto";
  }, [showNav]);


  return (
    <header className={`fixed top-0 left-0 w-full z-50 bg-secondary transition-all duration-300`}>
      <div className="mx-auto flex justify-between items-center px-4 sm:px-8 lg:px-24 h-[60px] sm:h-[70px]">
        {/* Logo */}
        <Link to="/" className="z-50">
          <img src={logo} alt="Logo" className="h-10 md:h-14" />
        </Link>

        {/* Desktop Navigation */}
        {!authNav && (
          <>
            <nav className="hidden md:flex items-center gap-6">
              <Link to="/" className="text-sm font-medium hover:underline">Home</Link>
              <Link to="/about" className="text-sm font-medium hover:underline">About Us</Link>
              <Link to="/blog" className="text-sm font-medium hover:underline">Blog</Link>
              <Button
                title="Sign Up"
                onClick={() => navigate("/choose-role")}
                customClasses="px-6 py-2 text-sm"
              />
              <Link to="/login">
                <button className="border border-lightprimary text-primary text-sm px-6 py-2 rounded-lg font-medium hover:bg-lightprimary/10">
                  Login
                </button>
              </Link>
            </nav>

            {/* Hamburger Menu (Mobile) */}
            <button
              className="md:hidden z-50"
              onClick={() => setShowNav((prev) => !prev)}
            >
              <img src={menuIcon} alt="Menu" className="w-6 h-6" />
            </button>

            {/* Mobile Navigation Drawer */}
            {showNav && (
              <>
                {/* Backdrop */}
                <div
                  className="fixed inset-0 bg-black bg-opacity-30 z-40"
                  onClick={() => setShowNav(false)}
                />

                {/* Drawer */}
                <div
                  className="fixed inset-y-0 right-0 w-3/4 sm:w-1/2 bg-secondary z-50 shadow-lg animate-slide-in overflow-y-auto"
                  style={{ maxHeight: '100vh' }}
                >
                  {/* Close Button */}
                  <div className="flex justify-end p-4">
                    <button
                      onClick={() => setShowNav(false)}
                      className="text-primary text-2xl font-bold"
                      aria-label="Close Menu"
                    >
                      &times;
                    </button>
                  </div>

                  {/* Drawer Content */}
                  <div className="px-6 pb-1 h-screen">
                    <ul className="space-y-6 text-lg font-medium flex-1">
                      <li>
                        <Link to="/" onClick={() => setShowNav(false)} className="block hover:underline">
                          Home
                        </Link>
                      </li>
                      <li>
                        <Link to="/about" onClick={() => setShowNav(false)} className="block hover:underline">
                          About Us
                        </Link>
                      </li>
                      <li>
                        <Link to="/blog" onClick={() => setShowNav(false)} className="block hover:underline">
                          Blog
                        </Link>
                      </li>
                      <li>
                        <a href="#services" onClick={() => setShowNav(false)} className="block hover:underline">
                          Services
                        </a>
                      </li>
                    </ul>
                    <div className="flex flex-col space-y-4 mt-10">
                      <Button
                        title="Sign Up"
                        onClick={() => {
                          setShowNav(false);
                          navigate("/choose-role");
                        }}
                        customClasses="w-full py-2 text-base"
                      />
                      <Link to="/login" onClick={() => setShowNav(false)}>
                        <button className="w-full border border-lightprimary text-primary text-base px-4 py-2 rounded-lg hover:bg-lightprimary/10">
                          Login
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </>
            )}
</>
        )}

        {/* Auth Navigation (centered logo only) */}
        {authNav && (
          <div className="w-full flex justify-center items-center border-b py-2">
            <Link to="/">
              <img src={logo} alt="Logo" className="h-10" />
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Nav;
