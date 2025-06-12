import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ChooseRole = () => {
  const [role, setRole] = useState("");
  const navigate = useNavigate();

  const businessRole = () => {
    setRole("business");
    navigate("/signup?role=business");
  };

  const customerRole = () => {
    setRole("customer");
    navigate("/signup?role=customer");
  };

  return (
    <div className="text-center min-h-screen bg-[#FEFFF1]">
      <h3 className="pt-24 text-primary text-xl font-bold">
        Welcome to Flaury
      </h3>
      <p className="text-xs">Enjoy simplified bookings for your convenience.</p>
      <h4 className="mt-4 text-primary text-3xl font-bold">Are you?</h4>
      <div className="my-10 w-1/3 md:w-[50%] mx-auto block md:flex gap-10 justify-center md:items-center">
        <div
          className="w-full md:w-1/3 border-2 rounded-md pb-10 border-primary cursor-pointer"
          onClick={businessRole}
        >
          <img src="/roleb.jpeg" alt="Business Role" className="rounded-t-md" />
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
          <img src="/rolec.jpeg" alt="Business Role" className="rounded-t-md" />
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
