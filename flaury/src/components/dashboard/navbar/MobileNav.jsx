import { useState, useEffect } from "react";
import makeup from "/brush.svg";
import clipper from "/clipper.svg";
import nail from "/nail.svg";
import hair from "/hair.svg";
import doublearrow from "/doublearrow.svg";

// Simulated backend data
const services = [
  { id: 1, icon: makeup, name: "Makeup" },
  { id: 2, icon: clipper, name: "Haircut" },
  { id: 3, icon: nail, name: "Nail Technician" },
  { id: 4, icon: hair, name: "Hair stylist" },
];

const MobileNav = ({ isOpen, toggleSidebar }) => {
  if (!isOpen) return null

  return (
    <div>
      <h2 className="font-bold text-2xl text-primary">Dashboard</h2>
      <div className="w-full flex gap-4 justify-between items-center bg-[#F8F4D9] p-4">
        <button onClick={toggleSidebar} className="p-1 rounded-md lg:hidden hover:bg-gray-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <div className="border-r border-r-primary pr-4">
          <h3 className="font-bold text-lg">Hello Becca 😊</h3>
          <p className="text-xs">What are you saying for today?</p>
          <p className="text-xs flex mt-2">
            <img src={doublearrow} alt="" className="mr-2" />
            Start your bookings quick...
          </p>
        </div>
        {services.map((service) => (
          <div key={service.id} className="flex flex-col items-center">
            <img
              src={service.icon}
              alt=""
              className={`bg-[#FF77014D] w-18 h-18 rounded-full ${service.name === "Haircut" ? "p-[0.65rem]" : "p-4"
                }`}
            />
            <p className="text-xs">{service.name}</p>
          </div>
        ))}
        <div className="flex">
          <p className="text-xs">More</p>
          <img src={doublearrow} alt="" className="ml-2" />
        </div>
      </div>
    </div>
  )
}

export default MobileNav
