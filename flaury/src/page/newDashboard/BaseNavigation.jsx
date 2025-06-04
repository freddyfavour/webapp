import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import logo from "/logo-white.svg";
import dashboard from "/dashboard.svg";
import profile from "/profile.svg";
import booking from "/booking.svg";
import chat from "/chat.svg";
import favorite from "/favorite.svg";

const BaseNavigation = ({ className = "" }) => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [activeItem, setActiveItem] = useState("Dashboard");

  const navigationItems = [
    {
      name: "Dashboard",
      icon: dashboard,
      href: "/dashboard",
    },
    {
      name: "Profile",
      icon: profile,
      href: "/profile",
    },
    {
      name: "Bookings",
      icon: booking,
      href: "/bookings",
    },
    {
      name: "Chat",
      icon: chat,
      href: "/chat",
    },
    {
      name: "Favorites",
      icon: favorite,
      href: "/favorites",
    },
  ];

  const handleItemClick = (item) => {
    setActiveItem(item.name);
  };

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <div className="hidden w-[257px] bg-primaryColor overflow-y-auto md:flex flex-col flex-shrink-0">
        <div className="p-4">
          {/* Logo */}
          <Link to="/dashboard" className="flex justify-center mb-20">
            <img src={logo} alt="Logo" />
          </Link>

          {/* Navigation section */}
          <nav className="flex-1">
            <ul className="space-y-2">
              {navigationItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeItem === item.name;
                const isHovered = hoveredItem === item.name;

                return (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      onClick={() => handleItemClick(item)}
                      onMouseEnter={() => setHoveredItem(item.name)}
                      onMouseLeave={() => setHoveredItem(null)}
                      className={`
                        w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 text-left
                        ${
                          isActive
                            ? "bg-[#FEFFF1] text-primaryColor shadow-lg"
                            : "text-amber-100 hover:bg-amber-700/50 hover:text-primaryColor"
                        }
                      `}
                    >
                      <img
                        src={item.icon}
                        alt={item.name}
                        className="w-4 h-4 m-2"
                      />
                      <span
                        className={`${
                          isActive
                            ? "text-[#8B3E00] text-xl"
                            : "text-[#FEFFF1] text-xl"
                        }`}
                      >
                        {item.name}
                      </span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 overflow-hidden">
        <div className="h-full overflow-y-auto">
          {/* TODO: Place the minimize button and overlay mobile nav bar view. */}
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default BaseNavigation;
