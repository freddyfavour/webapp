import { useEffect, useState } from "react";
import Overview from "@/components/dashboard/Overview";
import BOverview from "@/components/dashboard/BOverview";
import { useAuth } from "@/context/AuthContext";

const DashboardMain = () => {
  const { user, isLoading } = useAuth();
  const [role, setRole] = useState(() => localStorage.getItem("roleData"));

  useEffect(() => {
    if (user?.role) {
      setRole(user.role);
    }
  }, [user]);

  if (isLoading && !role) {
    return (
      <div className="flex h-screen items-center justify-center text-primary">
        Loading dashboard...
      </div>
    );
  }

  return role === "service_provider" ? <BOverview /> : <Overview />;
};

export default DashboardMain;

