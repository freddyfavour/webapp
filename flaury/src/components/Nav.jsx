// import { Link, useLocation } from "react-router-dom";
// import logo from "/logo.png";
// import { useState, useEffect } from "react";
// import menu from "/hamburger-menu.svg";

// const Nav = () => {
//   const location = useLocation();
//   const [authNav, setAuthNav] = useState(false);
//   const [showNav, setShowNav] = useState(false);

//   useEffect(() => {
//     setAuthNav(
//       location.pathname === "/login" ||
//         location.pathname === "/signup" ||
//         location.pathname === "/forgot-password" ||
//         location.pathname === "/forgot2" ||
//         location.pathname === "/forgot3"
//     );
//   }, [location]);

//   return (
//     <>
//       {authNav ? (
//         <div className="fixed top-0 w-full bg-[#fff] flex justify-center items-center z-10">
//           <Link to="/">
//             <img src={logo} alt="Logo" />
//           </Link>
//         </div>
//       ) : (
//         <>
//           <div className="fixed top-0 w-full bg-[#fff] px-4 md:px-20 py-2 flex justify-between items-center z-10">
//             <Link to="/">
//               <img src={logo} alt="Logo" />
//             </Link>
//             <nav className="hidden md:block">
//               <ul className="flex gap-4 items-center">
//                 <li>
//                   <Link className="text-sm font-semibold" to="/">
//                     Home
//                   </Link>
//                 </li>
//                 <li>
//                   <Link className="text-sm font-semibold" to="/company">
//                     Company
//                   </Link>
//                 </li>
//                 <li>
//                   <Link className="text-sm font-semibold" to="#services">
//                     Services
//                   </Link>
//                 </li>
//                 <li>
//                   <Link to="/signup">
//                     <button className="transition bg-primaryColor text-white border text-xs px-8 py-2 rounded-lg font-semibold">
//                       Sign Up
//                     </button>
//                   </Link>
//                 </li>
//                 <li>
//                   <Link to="/login">
//                     <button className="transition border border-lightPrimaryColor text-primaryColor text-xs px-8 py-2 rounded-lg font-semibold">
//                       Login
//                     </button>
//                   </Link>
//                 </li>
//               </ul>
//             </nav>
//             <div
//               className="block md:hidden cursor-pointer"
//               onClick={() => setShowNav(!showNav)}
//             >
//               <img src={menu} alt="" />
//             </div>
//           </div>
//           {showNav && (
//             <nav className="mt-20 md:mt-0 block md:hidden">
//               <hr />
//               <ul className="px-4 py-4">
//                 <li className="text-normal pb-4">
//                   <Link to="/" onClick={() => setShowNav(false)}>
//                     Home
//                   </Link>
//                 </li>
//                 <li className="text-normal pb-4">
//                   <Link to="/company" onClick={() => setShowNav(false)}>
//                     Company
//                   </Link>
//                 </li>
//                 <li className="text-normal">
//                   <Link to="#services" onClick={() => setShowNav(false)}>
//                     Services
//                   </Link>
//                 </li>
//                 <li>
//                   <Link to="/signup" onClick={() => setShowNav(false)}>
//                     <button className="transition bg-primaryColor text-white border text-sm px-4 py-2 rounded-lg my-4">
//                       Sign Up
//                     </button>
//                   </Link>
//                 </li>
//                 <li>
//                   <Link to="/login" onClick={() => setShowNav(false)}>
//                     <button className="transition border border-lightPrimaryColor text-primaryColor text-sm px-4 py-2 rounded-lg">
//                       Login
//                     </button>
//                   </Link>
//                 </li>
//               </ul>
//             </nav>
//           )}
//         </>
//       )}
//     </>
//   );
// };

// export default Nav;

import { Link, useLocation } from "react-router-dom";
import logo from "/logo.png";
import { useState, useEffect } from "react";
import menu from "/hamburger-menu.svg";

const DropDownIcon = ({ isOpen }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-4 w-4 ml-1"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    {!isOpen ? (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19 9l-7 7-7-7"
      />
    ) : (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 15l7-7 7 7"
      />
    )}
  </svg>
);

const Nav = () => {
  const location = useLocation();
  const [authNav, setAuthNav] = useState(false);
  const [showNav, setShowNav] = useState(false);
  const [showCompanyMenu, setShowCompanyMenu] = useState(false);

  useEffect(() => {
    setAuthNav(
      location.pathname === "/login" ||
        location.pathname === "/signup" ||
        location.pathname === "/forgot-password" ||
        location.pathname === "/forgot2" ||
        location.pathname === "/forgot3"
    );
  }, [location]);

  const toggleCompanyMenu = () => {
    setShowCompanyMenu(!showCompanyMenu);
  };

  const handleLinkClick = () => {
    setShowCompanyMenu(false); // Close the dropdown menu after clicking a link
    setShowNav(false); // Close the mobile menu after clicking a link
  };

  return (
    <>
      {authNav ? (
        <div className="fixed top-0 w-full bg-[#fff] flex justify-center items-center z-10">
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </div>
      ) : (
        <>
          <div className="fixed top-0 w-full bg-[#fff] px-4 md:px-20 py-2 flex justify-between items-center z-10">
            <Link to="/">
              <img src={logo} alt="Logo" />
            </Link>
            <nav className="hidden md:block">
              <ul className="flex gap-4 items-center">
                <li>
                  <Link className="text-sm font-semibold" to="/">
                    Home
                  </Link>
                </li>
                <li>
                  <button
                    className="text-sm font-semibold focus:outline-none flex items-center"
                    onClick={toggleCompanyMenu}
                  >
                    Company
                    <DropDownIcon isOpen={showCompanyMenu} />
                  </button>
                  {showCompanyMenu && (
                    <ul className="absolute mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg py-1">
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
                    </ul>
                  )}
                </li>
                <li>
                  <Link className="text-sm font-semibold" to="#services">
                    Services
                  </Link>
                </li>
                <li>
                  <Link to="/signup">
                    <button className="transition bg-primaryColor text-white border text-xs px-8 py-2 rounded-lg font-semibold">
                      Sign Up
                    </button>
                  </Link>
                </li>
                <li>
                  <Link to="/login">
                    <button className="transition border border-lightPrimaryColor text-primaryColor text-xs px-8 py-2 rounded-lg font-semibold">
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
            <nav className="mt-20 md:mt-0 block md:hidden">
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
                  <Link to="/signup" onClick={() => setShowNav(false)}>
                    <button className="transition bg-primaryColor text-white border text-sm px-4 py-2 rounded-lg my-4">
                      Sign Up
                    </button>
                  </Link>
                </li>
                <li>
                  <Link to="/login" onClick={() => setShowNav(false)}>
                    <button className="transition border border-lightPrimaryColor text-primaryColor text-sm px-4 py-2 rounded-lg">
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
