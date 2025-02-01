import React from "react";

const Overview = ({ salonData }) => {
  return (
    <div className="text-black">
      <ul className="flex gap-4 justify-center mt-4">
        <li>Message</li>
        <li>Promotions</li>
        <li>Directions</li>
        <li>Share</li>
      </ul>
      <hr className="my-4" />

      <h3 className="font-bold">About</h3>
      <p className="text-xs">{salonData.description}</p>
      <hr className="my-4" />

      <div className="w-1/2 mt-4">
        <h3 className="font-bold">Contact</h3>
        <div className="mb-6 flex gap-2 items-center">
          <img src="/chaticon.svg" alt="" />
          <div className="flex flex-col">
            <span className="text-sm">Send a message</span>
            <span className="text-xs">
              Chat in real time and connect better
            </span>
          </div>
        </div>

        <div className="mb-6 flex items-center gap-2">
          <img src="/location.svg" alt="" className="h-6 w-6" />
          <div className="flex flex-col">
            <span className="text-sm">Address</span>
            <span className="text-xs flex gap-1">
              Dome Hills, Idan
              <img src="/dot.svg" />
              20km
            </span>
          </div>
        </div>
      </div>
      <hr className="my-4" />
      <div>
        <h3 className="font-bold">Expertise</h3>
        <div className="flex gap-3 my-4">
          {["All", "Spa", "Manicure", "Skin care"].map((label) => (
            <button
              key={label}
              className="border text-xs px-4 py-1 rounded-full text-primaryColor border-primaryColor"
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Overview;
