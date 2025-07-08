import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "/logo.svg";

const ChooseRole = () => {
  const navigate = useNavigate();

  const businessRole = () => {
    navigate("/signup?role=business");
  };

  const customerRole = () => {
    navigate("/signup?role=customer");
  };

  return (
    <div className="text-center md:h-screen bg-[#FEFFF1]">
      <div className="mx-auto flex justify-center items-center p-4 sm:p-8 h-[70px] border border-b">
        {/* Logo */}
        <Link to="/" className="z-50">
          <img src={logo} alt="Logo" className="h-12" />
        </Link>
      </div>

      <h3 className="pt-6 text-primary text-xl font-bold">
        Welcome to Flaury
      </h3>
      <p className="text-xs">Enjoy simplified bookings for your convenience.</p>
      <h4 className="mt-4 text-primary text-3xl font-bold">Are you?</h4>

      <div className=" flex flex-col md:flex-row my-10 w-full mx-auto gap-10 px-4 sm:px-8 lg:px-24 justify-center md:items-center">
        <div
          className="w-full md:w-1/3 border-2 rounded-md pb-10 border-primary cursor-pointer"
          onClick={businessRole}
        >
          <img src="/roleb.jpeg" alt="Business Role" className="h-[150px] w-full rounded-t-sm" />
          <h3 className="font-bold text-xl text-primary pt-10 pb-2">
            Beautician
          </h3>
          <p className="text-xs">Beauty stylist or salon owner</p>
        </div>

        <h2>OR</h2>

        <div
          className="w-full md:w-1/3 border-2 rounded-md pb-10 border-primary cursor-pointer"
          onClick={customerRole}
        >
          <img src="/rolec.jpeg" alt="Business Role" className="h-[150px] w-full rounded-t-sm" />
          <h3 className="font-bold text-xl text-primary pt-10 pb-2">
            Customer
          </h3>
          <p className="text-xs">Looking to hire a service</p>
        </div>
      </div>
    </div>
  );
};

export default ChooseRole;
