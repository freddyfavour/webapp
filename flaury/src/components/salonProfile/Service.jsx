import React from "react";

const Service = ({ salonData }) => {
  return (
    <>
      {salonData.bookables.map((bookable, index) => (
        <div key={index} className="shadow-md p-4 mb-4 rounded-md">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm text-black font-bold mb-4">
                {bookable.title}
              </p>
              <p className="text-xs text-gray-500">${bookable.price}</p>
            </div>
            <button className="bg-gray-100 text-xs px-6 py-2 rounded-full">
              Book
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default Service;
