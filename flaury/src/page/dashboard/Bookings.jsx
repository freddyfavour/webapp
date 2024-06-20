import { useState, useEffect } from "react";
import SideNav from "../../components/dashboard/SideNav";
import BookingHeader from "../../components/bookings/BookingHeader";
import { useNavigate } from "react-router-dom";

const Bookings = () => {
  const navigate = useNavigate();
  const [confirmOrderPopup, setConfirmOrderPopup] = useState(false);
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

  const salonData = {
    id: 1,
    name: "Timeless Salon",
    description:
      "At Timeless Salon, we believe that beauty is not just akin deep, It's a reflection of your inner vitality. That's why our team of experienced professionals is...",
    coverPhoto: "/timelesssaloncoverimg.png",
    image: "/timelesssalonimg.png",
    services: [
      "Hair Treatment",
      "Hair Extension",
      "Hair Removal",
      "Hair Coloring",
      "Hair Styling",
    ],
    // bookables: [
    //   { id: 1, title: "Hair Conditioning", price: "20" },
    //   { title: "Hair Coloring", price: "50" },
    //   { title: "Hair Styling", price: "30" },
    //   { title: "Hair Extension", price: "40" },
    // ],
    rating: 4.2,
    review: 1286,
    location: "Dora Hill, Camelot",
    distance: "20km away",
    time: "8:00pm",
    reviews: [
      {
        img: "/timelessrecommended.png",
        name: "Pella Tehilah",
        time: "2days ago",
        text: "This is my first time using this service and I'm thriled about their works",
        rating: "4.5",
      },
      {
        img: "/timelessrecommended.png",
        name: "Pella Tehilah",
        time: "2days ago",
        text: "This is my first time using this service and I'm thriled about their works",
        rating: "4.5",
      },
      {
        img: "/timelessrecommended.png",
        name: "Pella Tehilah",
        time: "2days ago",
        text: "This is my first time using this service and I'm thriled about their works",
        rating: "4.5",
      },
      {
        img: "/timelessrecommended.png",
        name: "Pella Tehilah",
        time: "2days ago",
        text: "This is my first time using this service and I'm thriled about their works",
        rating: "4.5",
      },
      {
        img: "/timelessrecommended.png",
        name: "Pella Tehilah",
        time: "2days ago",
        text: "This is my first time using this service and I'm thriled about their works",
        rating: "4.5",
      },
    ],
    teams: [
      { img: "/team-img.png", rating: "5.0" },
      { img: "/team-img.png", rating: "5.0" },
      { img: "/team-img.png", rating: "5.0" },
    ],
  };

  const confirmOrders = () => {
    setConfirmOrderPopup(true);
  };

  const orderData = [
    {
      name: "Hair Treatment",
      start_price: "49.99",
      fromTime: "7:30am",
      toTime: "5:30pm",
    },
    {
      name: "Eyebrow Shaping",
      start_price: "49.99",
      fromTime: "7:30am",
      toTime: "5:30pm",
    },
    {
      name: "Eyebrow Shaping",
      start_price: "49.99",
      fromTime: "7:30am",
      toTime: "5:30pm",
    },
    {
      name: "Eyebrow Shaping",
      start_price: "49.99",
      fromTime: "7:30am",
      toTime: "5:30pm",
    },
  ];

  const bookService = () => {
    navigate("/bookings-flow");
  };

  return (
    <div className="flex gap-8 text-primaryColor lg:pr-8">
      {isSmallViewport ? null : <SideNav />}
      <div className="mt-10 md:mt-20 w-full pr-10 px-4 md:px-0">
        <BookingHeader confirmOrders={confirmOrders} />
        <hr className="my-6 border border-primaryColor" />
        <div className="text-sm">
          <div className="flex gap-4 items-center">
            <img
              src={salonData.image}
              alt={`${salonData.name} logo`}
              className="w-8 h-8 rounded-full"
            />
            <h1>{salonData.name}</h1>
            <div className="bg-[#1b771b] flex gap-2 text-xs text-[#fff] rounded-lg px-3 py-1">
              <img src="/verified.svg" alt="" /> Verified
            </div>
          </div>
          <p>Face Make-Up</p>
          <p className="flex gap-2 text-xs">
            (Hair Styling, Spa, Facebeat )
            <p className="flex gap-1 items-center text-sm">
              {salonData.rating} <img src="/star.svg" alt="star icon" />
              <img src="/dot.svg" alt="dot icon" /> ({salonData.review})
            </p>
          </p>
          <div>
            <div className="flex mt-2 text-sm">
              <p className="flex">
                {salonData.location}
                <img src="/dot.svg" className="mx-2" />
                {salonData.distance}
              </p>
            </div>
          </div>
        </div>
        <h3 className="text-center font-bold">Other Services</h3>
        <hr className="my-6 border border-primaryColor" />
        <div className="bg-white w-full rounded-md shadow-xl mb-4 pr-4 relative">
          <label className="flex gap-6">
            <input
              type="radio"
              name="service"
              value="eyebrow-shaping-1"
              className="absolute top-4 right-4 w-4 h-4"
            />
            <img src="/timelesssalon.png" alt="" />
            <div>
              <p>
                Eyebrow Shaping <span className="text-xs">(525 bookings)</span>
              </p>
              <p className="flex gap-4">
                Price: <span className="text-xs">$11.99</span>
              </p>
            </div>
          </label>
        </div>

        <div className="bg-white w-full rounded-md shadow-xl mb-4 pr-4 relative">
          <label className="flex gap-6">
            <input
              type="radio"
              name="service"
              value="eyebrow-shaping-2"
              className="absolute top-4 right-4 w-4 h-4"
            />
            <img src="/timelesssalon.png" alt="" />
            <div>
              <p>
                Eyebrow Shaping <span className="text-xs">(525 bookings)</span>
              </p>
              <p className="flex gap-4">
                Price: <span className="text-xs">$11.99</span>
              </p>
            </div>
          </label>
        </div>

        <div className="bg-white w-full rounded-md shadow-xl mb-4 pr-4 relative">
          <label className="flex gap-6">
            <input
              type="radio"
              name="service"
              value="eyebrow-shaping-3"
              className="absolute top-4 right-4 w-4 h-4"
            />
            <img src="/timelesssalon.png" alt="" />
            <div>
              <p>
                Eyebrow Shaping <span className="text-xs">(525 bookings)</span>
              </p>
              <p className="flex gap-4">
                Price: <span className="text-xs">$11.99</span>
              </p>
            </div>
          </label>
        </div>
      </div>
      {confirmOrderPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-[#db8335] bg-opacity-50">
          <div className="bg-white w-4/5 md:w-[55%] py-8 px-10 md:px-20 rounded-lg shadow-lg text-center relative">
            <p
              className="absolute top-6 left-6 cursor-pointer"
              onClick={() => setConfirmOrderPopup(false)}
            >
              <img src="/close.svg" />
            </p>
            <h3 className="font-bold text-2xl py-3">Confirm Order</h3>
            {orderData.map((data, index) => (
              <>
                <div className="flex text-xs w-full" key={index}>
                  <h4 className="font-bold">{data.name} - </h4>
                  <div>
                    <div className="flex items-center gap-4">
                      <p>Start price:</p>
                      <p className="text-xs text-gray-400 line-through">
                        $70.00
                      </p>
                      <p>${data.start_price}</p>
                    </div>
                    <div className="flex gap-4 mt-3">
                      <p>Time of event:</p>
                      <p className="border-b text-sm font-semibold">
                        <span className="text-xs pr-2 text-gray-400">
                          From:
                        </span>
                        {data.fromTime}
                      </p>
                      <p className="border-b text-sm font-semibold">
                        <span className="text-xs pr-2 text-gray-400">To:</span>
                        {data.toTime}
                      </p>
                    </div>
                  </div>
                </div>
                <hr className="my-2" />
              </>
            ))}

            <button
              className="bg-primaryColor text-white w-full rounded-md py-2 mt-4"
              onClick={bookService}
            >
              Continue Booking
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Bookings;
