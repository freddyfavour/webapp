import React, { useState, useEffect } from "react";
import Overview from "../../components/dashboard/Overview";
import SideNav from "../../components/dashboard/SideNav";
import earth from "/earth.svg";

const Dashboard = () => {
  const [isSmallViewport, setIsSmallViewport] = useState(
    window.innerWidth <= 900
  );
  const [showPopup, setShowPopup] = useState(true);
  const [locationObtained, setLocationObtained] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallViewport(window.innerWidth <= 900);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array ensures that this effect runs only once after initial render

  const handleUseCurrentLocation = () => {
    if (navigator.geolocation) {
      // If geolocation is supported
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          // Here, you can use latitude and longitude to do something, e.g., send it to your server
          console.log("Latitude:", latitude);
          console.log("Longitude:", longitude);
          setLocationObtained(true); // Set location obtained to true
          setShowPopup(false); // Close the popup after using current location
        },
        (error) => {
          // Handle errors
          console.error("Error getting current location:", error);
          // You may want to show an error message to the user
          // and give them the option to try again or set their location manually
        }
      );
    } else {
      // Geolocation is not supported by the browser
      console.error("Geolocation is not supported by this browser.");
      // You may want to show an error message to the user
      // and give them the option to set their location manually
    }
  };

  const handleSetLater = () => {
    setShowPopup(false); // Close the popup if 'Set Later' is clicked
  };

  // Check if location is already obtained, if so, hide the popup
  useEffect(() => {
    if (locationObtained) {
      setShowPopup(false);
    }
  }, [locationObtained]);

  return (
    <div className="flex gap-8 text-primaryColor lg:pr-8">
      {isSmallViewport ? null : <SideNav />}
      <Overview />
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-[#db8335] bg-opacity-50">
          <div className="bg-white w-[35%] py-8 px-20 rounded-lg shadow-lg text-center">
            <img src={earth} alt="" className="mx-auto mb-4" />
            <h3 className="font-semibold mb-4 text-black">Where are you?</h3>
            <p className="mb-4 text-xs text-black">
              Set your location so that we can match you with services around
              you.
            </p>
            <button
              className="transition bg-primaryColor text-white border text-xs px-8 py-2 rounded-lg font-semibold w-full mb-4"
              onClick={handleUseCurrentLocation}
            >
              Use Current Location
            </button>
            <button
              className="transition bg-lightPrimaryColor text-white border text-xs px-8 py-2 rounded-lg font-semibold opacity-50 w-full"
              onClick={handleSetLater}
            >
              Set Later
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
