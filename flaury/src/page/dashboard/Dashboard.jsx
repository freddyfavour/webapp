import React, { useState, useEffect } from "react";
import Overview from "../../components/dashboard/Overview";
import BOverview from "../../components/dashboard/BOverview";
import SideNav from "../../components/dashboard/SideNav";
import earth from "/earth.svg";
import Popup from "../../components/Popup";
import Button from "../../components/Button";

const Dashboard = () => {
  const [isSmallViewport, setIsSmallViewport] = useState(
    window.innerWidth <= 900
  );
  const [showPopup, setShowPopup] = useState(true);
  const [locationObtained, setLocationObtained] = useState(false);
  const savedUserData = localStorage.getItem("savedUser");
  const roleData = savedUserData ? JSON.parse(savedUserData).role : null;

  useEffect(() => {
    const handleResize = () => {
      setIsSmallViewport(window.innerWidth <= 900);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleUseCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          sessionStorage.setItem("location", `${latitude} ${longitude}`);

          setLocationObtained(true);
          setShowPopup(false);
        },
        (error) => {
          console.error("Error getting current location:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };

  const handleSetLater = () => {
    setShowPopup(false); // Close the popup if 'Set Later' is clicked
  };

  // Check if location is already obtained, if so, hide the popup
  useEffect(() => {
    if (sessionStorage.getItem("location")) {
      setShowPopup(false);
    }
  }, [locationObtained]);

  return (
    <div className="flex gap-8 text-primaryColor">
      {/* {isSmallViewport ? null : <SideNav />} */}
      {roleData === "Business" ? <BOverview /> : <Overview />}
      {showPopup && (
        <Popup
          title="Where are you?"
          subtitle="Set your location so that we can match you with services around
              you."
          image={earth}
          button={2}
          buttonStyle="py-4"
          button1Title="Use Current Location"
          button1Handler={handleUseCurrentLocation}
          button2Title="Set Later"
          button2Handler={handleSetLater}
        />
      )}
    </div>
  );
};

export default Dashboard;
