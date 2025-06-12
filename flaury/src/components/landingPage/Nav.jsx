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
    if (showNav) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showNav]);

  const navClass = scrolled
    ? "bg-[#FEFFF1]/95 backdrop-blur-md shadow-md border-b"
    : "bg-[#FEFFF1]";

  return (
    <header className={`fixed top-0 left-0 w-full z-50 ${navClass} transition-all duration-300`}>
      <div className="max-w-[1200px] mx-auto flex justify-between items-center px-4 sm:px-8 lg:px-24 h-[60px] sm:h-[70px]">
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
              <div className="fixed inset-0 bg-white z-40 flex flex-col pt-16 px-6 py-10 animate-slide-in">
                <ul className="space-y-6 text-lg font-medium">
                  <li><Link to="/" onClick={() => setShowNav(false)}>Home</Link></li>
                  <li><Link to="/about" onClick={() => setShowNav(false)}>About Us</Link></li>
                  <li><Link to="/blog" onClick={() => setShowNav(false)}>Blog</Link></li>
                  <li><Link to="#services" onClick={() => setShowNav(false)}>Services</Link></li>
                  <li>
                    <Button
                      title="Sign Up"
                      onClick={() => {
                        setShowNav(false);
                        navigate("/choose-role");
                      }}
                      customClasses="w-full py-2 text-base"
                    />
                  </li>
                  <li>
                    <Link to="/login" onClick={() => setShowNav(false)}>
                      <button className="w-full border border-lightprimary text-primary text-base px-4 py-2 rounded-lg">
                        Login
                      </button>
                    </Link>
                  </li>
                </ul>
              </div>
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
