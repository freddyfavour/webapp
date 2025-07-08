import React from "react";
import forwardarrow from "/forwardarrow.svg";

const ProfileDetailsItem = ({ name, details, icon, onClick }) => {
  return (
    <div
      className="bg-white w-full rounded-md shadow-xl cursor-pointer mb-4 flex justify-between p-4"
      onClick={onClick}
    >
      <div className="flex items-center gap-4">
        <img src={icon} alt="" className="rounded-md" />
        <div>
          <p className={`${name === "Logout" ? "text-[red]":"text-black"} font-semibold text-sm`}>{name}</p>
          <p className="text-black text-xs">{details}</p>
        </div>
      </div>
      {name === "Logout" ? (
        null
      ) : (
        <img src={forwardarrow} alt="" />
      )}
    </div>
  );
};

export default ProfileDetailsItem;
