import { useState, useEffect } from "react";
import SideNav from "../../components/dashboard/SideNav";
import BookingHeader from "../../components/bookings/BookingHeader";

const Bookings = () => {
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

  return (
    <div className="flex gap-8 text-primaryColor lg:pr-8">
      {isSmallViewport ? null : <SideNav />}
      <div className="mt-10 md:mt-20 w-full pr-10 px-4 md:px-0">
        <BookingHeader />
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
        <div className="bg-white w-full rounded-md shadow-xl mb-4 flex justify-between pr-4">
          <div className="flex gap-6">
            <img src="/timelesssalon.png" alt="" />
            <div>
              <p>
                Eyebrow Shaping <span className="text-xs">(525 bookings)</span>
              </p>
              <p className="flex gap-4">
                Price: <span className="text-xs">$11.99</span>
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white w-full rounded-md shadow-xl mb-4 flex justify-between pr-4">
          <div className="flex gap-6">
            <img src="/timelesssalon.png" alt="" />
            <div>
              <p>
                Eyebrow Shaping <span className="text-xs">(525 bookings)</span>
              </p>
              <p className="flex gap-4">
                Price: <span className="text-xs">$11.99</span>
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white w-full rounded-md shadow-xl mb-4 flex justify-between pr-4">
          <div className="flex gap-6">
            <img src="/timelesssalon.png" alt="" />
            <div>
              <p>
                Eyebrow Shaping <span className="text-xs">(525 bookings)</span>
              </p>
              <p className="flex gap-4">
                Price: <span className="text-xs">$11.99</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bookings;
