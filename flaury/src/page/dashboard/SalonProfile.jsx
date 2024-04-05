import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import SideNav from "../../components/dashboard/SideNav";

const SalonProfile = () => {
  // Get the salon id from the URL
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

  // Fetch salon data based on the id from backend or use dummy data
  const salonData = {
    id: id,
    name: "Timeless Salon",
    image: "/salon_image.jpg",
    services: ["Hair styling", "Spa", "Facebeat"],
    rating: 4.2,
    location: "Dora Hill, Camelot",
    distance: "20km away",
    description: "This is a description of the salon.",
  };

  return (
    <div className="flex gap-8 text-primaryColor lg:pr-8">
      {isSmallViewport ? null : <SideNav />}
      <div className="container mx-auto">
        <div className="flex justify-center items-center mt-8">
          <img
            src={salonData.image}
            alt={salonData.name}
            className="w-64 h-64 object-cover rounded-lg"
          />
        </div>
        <div className="mt-4">
          <h1 className="text-2xl font-bold text-center">{salonData.name}</h1>
          <div className="flex justify-center mt-2">
            <p className="text-sm text-gray-500">
              {salonData.location} - {salonData.distance}
            </p>
          </div>
          <div className="flex justify-center mt-2">
            <p className="text-sm text-gray-500">Rating: {salonData.rating}</p>
          </div>
          <div className="flex justify-center mt-4">
            <p className="text-sm">{salonData.description}</p>
          </div>
          <div className="flex justify-center mt-4">
            <ul>
              {salonData.services.map((service, index) => (
                <li key={index} className="text-sm">
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalonProfile;
