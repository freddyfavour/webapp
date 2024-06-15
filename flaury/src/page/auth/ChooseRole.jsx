import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ChooseRole = () => {
  const [role, setRole] = useState("");
  const navigate = useNavigate();

  const businessRole = () => {
    setRole("business");
    navigate("/signup");
  };

  const customerRole = () => {
    setRole("customer");
    navigate("/signup");
  };

  return (
    <div className="text-center">
      <h3 className="mt-24 text-primaryColor text-xl font-bold">
        Welcome to Flaury
      </h3>
      <p className="text-xs">Enjoy simplified bookings for your convenience.</p>
      <h4 className="mt-4 text-primaryColor text-3xl font-bold">Are you?</h4>
      <div className="my-10 w-2/3 mx-auto flex justify-between md:items-center">
        <img
          src="/roleb.png"
          alt="Business Role"
          className="cursor-pointer"
          onClick={businessRole}
        />
        <img
          src="/rolec.png"
          alt="Customer Role"
          className="cursor-pointer"
          onClick={customerRole}
        />
      </div>
    </div>
  );
};

export default ChooseRole;
