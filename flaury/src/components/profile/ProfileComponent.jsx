import { useState, useEffect } from "react";
import ProfileDetailsItem from "./ProfileDetailsItem";
import HelpComponent from "./HelpComponent";
import helpchat from "/helpchat.svg";
import forgotPassword from "/forgotpassword.svg";

const ProfileComponent = () => {
  const [profileData, setProfileData] = useState({
    profileimg: "",
    name: "",
    email: "",
  });
  const [showPopup, setShowPopup] = useState(false);
  const [help, setHelp] = useState(false);

  const [profileDetails, setProfileDetails] = useState([]);

  useEffect(() => {
    const fetchProfileData = () => {
      const profileData = {
        profileimg: "/profileimg.png",
        name: "Becca Adom",
        email: "beccadom@gmail.com",
      };
      setProfileData(profileData);
    };

    fetchProfileData();

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

    setProfileDetails(simulatedProfileDetails);
  }, []);

  const logout = () => {
    setShowPopup(true);
  };

  return (
    <div className="mb-10">
      <div className="relative w-full flex flex-col items-center text-center text-black py-10">
        <img src={profileData.profileimg} alt="" className="w-[5rem]" />
        <h3 className="text-xl font-bold">{profileData.name}</h3>
        <p className="text-xs">{profileData.email}</p>
        {help ? (
          <p className="font-bold">How can we help you?</p>
        ) : (
          <button
            className="absolute flex items-center gap-2 bottom-10 right-0 bg-primaryColor text-white border text-xs px-10 py-2 rounded-lg font-semibold"
            onClick={() => setHelp(true)}
          >
            <img src={helpchat} alt="" />
            Help
          </button>
        )}
      </div>
      <hr className="border-primaryColor" />
      {help ? (
        <HelpComponent />
      ) : (
        profileDetails.map((profileDetail) => (
          <ProfileDetailsItem
            key={profileDetail.id}
            name={profileDetail.name}
            details={profileDetail.details}
            icon={profileDetail.icon}
            logout={logout}
          />
        ))
      )}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-[#db8335] bg-opacity-50">
          <div className="bg-white w-[35%] py-8 px-20 rounded-lg shadow-lg text-center">
            <img src={forgotPassword} alt="" className="mx-auto mb-4" />
            <h3 className="font-bold text-black">
              Are you sure you want to log-out?
            </h3>
            <button className="transition bg-primaryColor text-white border text-xs px-8 py-2 rounded-lg font-semibold w-full mb-4">
              Yes, log me out
            </button>
            <button
              className="transition bg-lightPrimaryColor text-white border text-xs px-8 py-2 rounded-lg font-semibold opacity-50 w-full"
              onClick={() => setShowPopup(false)}
            >
              Login with another account
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileComponent;
