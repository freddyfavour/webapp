import React from "react";

const BookingHeader = ({ confirmOrders }) => {
  return (
    <div className="block md:flex w-full md:mt-4 gap-6 items-center text-[#663300]">
      {/* Cover Image */}
      <img
        src="/timelesssaloncoverimg.png"
        alt="Salon Cover"
        className="w-full md:w-1/2 h-[300px] rounded-md object-cover"
      />

      {/* Content */}
      <div className="w-full md:w-1/2 space-y-4 mt-6 md:mt-0">
        <h3 className="text-2xl font-bold text-[#663300]">Hair Treatment</h3>

        {/* Description */}
        <div className="text-sm leading-relaxed">
          <p className="font-medium mb-1">Description:</p>
          <p className="text-xs text-[#333]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
            <br />
            Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo.
          </p>
        </div>

        {/* Price */}
        <div className="flex items-center gap-3 text-sm">
          <p className="font-medium">Start price:</p>
          <p className="line-through text-xs text-gray-400">$70.00</p>
          <p className="font-semibold">$49.99</p>
        </div>

        {/* Time of event */}
        <div className="flex items-center gap-4 text-sm">
          <p className="font-medium">Time of event:</p>
          <p className="border-b font-semibold">
            <span className="text-xs text-gray-400 pr-1">From:</span> 7:30am
          </p>
          <p className="border-b font-semibold">
            <span className="text-xs text-gray-400 pr-1">To:</span> 5:30pm
          </p>
        </div>

        {/* Button */}
        <button
          onClick={confirmOrders}
          className="bg-[#663300] hover:bg-[#4d2600] transition text-white w-full rounded-md py-2 mt-2 font-semibold"
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default BookingHeader;
