import { useNavigate, useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import SideNav from "@/components/dashboard/navbar/SideNav";
import Overview from "@/components/salonProfile/Overview";
import Reviews from "@/components/salonProfile/Reviews";
import Service from "@/components/salonProfile/Service";
import Gallery from "@/components/salonProfile/Gallery";
import Button from "@/components/Button";
const SalonProfile = () => {
  const [tab, setTab] = useState("overview");
  const navigate = useNavigate();

  const { id } = useParams();
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
    id: id,
    name: "Timeless Salon",
    description:
      "At Timeless Salon, we believe that beauty is not just skin deep; it's a reflection of your inner vitality. That's why our team of experienced professionals is committed to delivering personalized and transformative experiences tailored to your unique needs. With a passion for creativity and an unwavering attention to detail, we strive to bring out your natural beauty and enhance your individual style...",
    coverPhoto: "/timelesssaloncoverimg.png",
    image: "/timelesssalonimg.png",
    services: [
      "Hair Treatment",
      "Hair Extension",
      "Hair Removal",
      "Hair Coloring",
      "Hair Styling",
    ],
    bookables: [
      {
        img: "/timelessrecommended.png",
        title: "Hair Conditioning",
        price: "20",
      },
      { img: "/timelessrecommended.png", title: "Hair Coloring", price: "50" },
      { img: "/timelessrecommended.png", title: "Hair Styling", price: "30" },
      { img: "/timelessrecommended.png", title: "Hair Extension", price: "40" },
    ],
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
    <div
      className={`${isSmallViewport && "px-4"
        } flex gap-8 text-primary lg:pr-8 bg-[#FEFFF1]`}
    >
      {!isSmallViewport && <SideNav />}
      <div className="container mx-auto">
        <div className="w-full">
          <img
            src={salonData.coverPhoto}
            alt={`${salonData.name} cover`}
            className="w-full h-[15rem] mt-20 rounded-lg object-cover"
          />
        </div>
        <div className="flex justify-between mt-3">
          <div>
            <div className="flex gap-4 items-center">
              <h1 className="text-2xl font-bold">{salonData.name}</h1>
            </div>
            <div>
              <p className="flex gap-1 text-sm text-black">
                Hair Styling, Spa, Facebeat
                <img src="/dot.svg" alt="dot icon" />
                <img src="/star.svg" alt="star icon" />
                {salonData.rating}
              </p>
              <div className="flex text-sm">
                <p className="flex text-sm text-black">
                  {salonData.location}
                  <img src="/dot.svg" className="mx-2" />
                  {salonData.distance}
                </p>
              </div>
            </div>
          </div>
          <div className="text-right">
            <Button title="Book now" onClick={() => navigate("/bookings-flow")} />
          </div>
        </div>
        <div className="flex justify-between w-4/5 mx-auto my-4 text-black font-bold">
          <div
            onClick={() => setTab("overview")}
            className={`cursor-pointer text-sm ${tab === "overview" && "text-primary underline"
              }`}
          >
            Overview
          </div>
          <div
            onClick={() => setTab("service")}
            className={`cursor-pointer text-sm ${tab === "service" && "text-primary underline"
              }`}
          >
            Service
          </div>
          <div
            onClick={() => setTab("gallery")}
            className={`cursor-pointer text-sm ${tab === "gallery" && "text-primary underline"
              }`}
          >
            Gallery
          </div>
          <div
            onClick={() => setTab("reviews")}
            className={`cursor-pointer text-sm ${tab === "reviews" && "text-primary underline"
              } `}
          >
            Reviews
          </div>
        </div>
        <hr className="my-4" />
        <div className="mt-6">
          {tab === "service" && <Service salonData={salonData} />}
          {tab === "gallery" && <Gallery />}
          {tab === "reviews" && <Reviews salonData={salonData} />}
          {tab === "overview" && <Overview salonData={salonData} />}
        </div>
      </div>
    </div>
  );
};

export default SalonProfile;
