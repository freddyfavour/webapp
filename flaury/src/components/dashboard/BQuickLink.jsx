import { useState, useEffect } from "react";
import makeup from "/brush.svg";
import clipper from "/clipper.svg";
import nail from "/nail.svg";
import hair from "/hair.svg";
import doublearrow from "/doublearrow.svg";
import { Link } from "react-router-dom";
import notifications from "/notifications.svg";
import favorites from "/favorites.svg";
import menu from "/hamburger-menu.svg";
import dashboard from "/dashboard.svg";
import profile from "/profile.svg";
import booking from "/booking.svg";
import chat from "/chat.svg";
import favorite from "/favorite.svg";

// Simulated backend data
const services = [
  { id: 1, icon: makeup, name: "Makeup" },
  { id: 2, icon: clipper, name: "Haircut" },
  { id: 3, icon: nail, name: "Nail Technician" },
  { id: 4, icon: hair, name: "Hair stylist" },
];

const BQuickLink = () => {
  const [showNav, setShowNav] = useState(false);
  const [isSmallViewport, setIsSmallViewport] = useState(
    window.innerWidth <= 900
  );

  useEffect(() => {
    const handleResize = () => {
      setIsSmallViewport(window.innerWidth <= 900);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return !isSmallViewport && (
    <>

      <div className="grid grid-cols-3 gap-2 text-black">
        <div className="col-span-1">
        <div className="w-full h-32 shadow-md p-4 rounded-lg border">
          <div className="flex justify-between">
            <div>
            <div className="flex gap-1"><h4>Total Balance</h4>
            <p>👁️</p></div>
            <b className="mt-4">#100,000</b>
            </div>
            <p className="text-xs">My Wallet</p>
          </div>
        </div>
        <div className="w-full grid grid-cols-3 gap-1 mt-2">
          <div className="border-2 border-[green] rounded-lg w-full h-20 flex items-center justify-center">
            <p className="text-xs">Transactions</p>
          </div>
          <div className="border-2 border-[blue] rounded-lg w-full h-20 flex items-center justify-center">
            <p className="text-xs">Services</p>
          </div>
          <div className="border-2 border-[purple] rounded-lg w-full h-20 flex items-center justify-center">
            <p className="text-xs">Promotions</p>
          </div>
        </div>
        </div>
        <img src="/bizbanner.svg" alt="" className="col-span-2 -mt-4"/>
      </div>
    </>
  )
};

export default BQuickLink;
