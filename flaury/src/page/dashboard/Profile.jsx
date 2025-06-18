import { useState, useEffect } from "react";
import SideNav from "../../components/dashboard/navbar/SideNav";
import ProfileComponent from "../../components/profile/ProfileComponent";
import DashboardLayout from "../../components/dashboard/DashboardLayout";

const Profile = () => {
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

  return (
    <DashboardLayout>
      <div className="flex gap-8 text-primary">
        {/* {isSmallViewport ? null : <SideNav />} */}
        <div className="w-full px-4 md:px-0">
          {/* <hr className="border-primary" /> */}
          <ProfileComponent />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Profile;
