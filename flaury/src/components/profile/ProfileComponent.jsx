import { useState, useEffect } from "react";
import ProfileDetailsItem from "./ProfileDetailsItem";
import helpchat from "/helpchat.svg";

const ProfileComponent = () => {
  // Simulated state variables for profile data
  const [profileData, setProfileData] = useState({
    profileimg: "",
    name: "",
    email: "",
  });

  // Simulated state variable for profile details
  const [profileDetails, setProfileDetails] = useState([]);

  // Simulating fetching profile data from backend
  useEffect(() => {
    // Simulate fetching profile data from backend
    const fetchProfileData = () => {
      // Simulated data received from backend
      const profileData = {
        profileimg: "/profileimg.png",
        name: "Becca Adom",
        email: "beccadom@gmail.com",
      };

      // Update profileData state with data from backend
      setProfileData(profileData);
    };

    fetchProfileData();

    // Simulated profile details data
    const simulatedProfileDetails = [
      {
        id: 1,
        name: "Settings",
        details: "Edit profile, change phone number...",
        icon: "/profilesettings.svg",
      },
      {
        id: 2,
        name: "About",
        details: "FAQs, Privacy policy, Terms and conditions",
        icon: "/about.svg",
      },
      {
        id: 3,
        name: "Payment",
        details: "Add Payment Option",
        icon: "/payment.svg",
      },
      {
        id: 4,
        name: "Promotions",
        details: "Get promo code and enjoy discount on your bookings",
        icon: "/promotion.svg",
      },
      {
        id: 5,
        name: "Blogs",
        details:
          "Enjoy daily blogs and articles about the latest trends in flaury ecosystem",
        icon: "/blog.svg",
      },
      {
        id: 6,
        name: "Logout",
        details: "Logout of this account and use another account",
        icon: "/logout.svg",
      },
    ];

    // Update profileDetails state with simulated data
    setProfileDetails(simulatedProfileDetails);
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <div className="mb-10">
      <div className="relative w-full flex flex-col items-center text-center text-black py-10">
        <img src={profileData.profileimg} alt="" className="w-[5rem]" />
        <h3 className="text-xl font-bold">{profileData.name}</h3>
        <p className="text-xs">{profileData.email}</p>
        <button className="absolute flex items-center gap-2 bottom-10 right-0 bg-primaryColor text-white border text-xs px-10 py-2 rounded-lg font-semibold">
          <img src={helpchat} alt="" />
          Help
        </button>
      </div>
      <hr className="border-primaryColor" />
      {profileDetails.map((profileDetail) => (
        <ProfileDetailsItem
          key={profileDetail.id}
          name={profileDetail.name}
          details={profileDetail.details}
          icon={profileDetail.icon}
        />
      ))}
    </div>
  );
};

export default ProfileComponent;
