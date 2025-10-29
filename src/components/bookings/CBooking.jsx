import BookingHeader from "./BookingHeader";

const CBooking = ({ salonData, confirmOrders }) => {
  return (
    <div className="mt-10 md:mt-0 w-full px-4 md:px-0">
      <BookingHeader confirmOrders={confirmOrders} />

      <hr className="my-6 border-primary" />

      {/* Salon Info */}
      <div className="text-sm text-[#663300] space-y-2">
        <div className="flex items-center gap-3">
          <img
            src={salonData.image}
            alt={`${salonData.name} logo`}
            className="w-8 h-8 rounded-full"
          />
          <h1 className="font-semibold">{salonData.name}</h1>
          <div className="bg-[#1b771b] flex items-center gap-1 text-xs text-white rounded-md px-2 py-0.5">
            <img src="/verified.svg" alt="Verified Icon" className="w-3 h-3" />
            Verified
          </div>
        </div>

        <p className="font-medium">Face Make-Up</p>

        <div className="text-xs flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
          <span className="text-[#946a1e]">(Hair Styling, Spa, Facebeat)</span>
          <span className="flex items-center gap-1">
            {salonData.rating}
            <img src="/star.svg" className="w-3 h-3" />
            <img src="/dot.svg" className="w-3 h-3" />
            ({salonData.review})
          </span>
        </div>

        <div className="text-xs text-[#333] mt-1">
          <span className="flex items-center gap-2">
            {salonData.location}
            <img src="/dot.svg" className="w-3 h-3" />
            {salonData.distance}
          </span>
        </div>
      </div>

      {/* Other Services */}
      <h3 className="text-center text-[#663300] font-bold text-lg mt-8 mb-3">
        Other services
      </h3>
      <hr className="mb-6 border-primary" />

      {/* Services */}
      {[1, 2, 3].map((item) => (
        <div
          key={item}
          className="bg-white w-full rounded-lg shadow-md mb-5 pr-4 relative hover:shadow-lg transition"
        >
          <label className="flex gap-4 p-4 cursor-pointer items-center">
            <input
              type="radio"
              name="service"
              value={`eyebrow-shaping-${item}`}
              className="absolute top-4 right-4 w-4 h-4 accent-[#663300]"
            />
            <img
              src="/timelesssalon.png"
              alt="Eyebrow Shaping"
              className="w-14 h-14 rounded-md object-cover"
            />
            <div className="text-[#663300]">
              <p className="font-semibold">
                Eyebrow Shaping{" "}
                <span className="text-xs font-normal text-gray-500">
                  (525 bookings)
                </span>
              </p>
              <p className="text-sm mt-1">
                Price:{" "}
                <span className="text-[#663300] font-medium text-xs">
                  $11.99
                </span>
              </p>
            </div>
          </label>
        </div>
      ))}
    </div>
  );
};

export default CBooking;
