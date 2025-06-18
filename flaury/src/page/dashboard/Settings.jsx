import { useState, useEffect } from "react";
import DashboardLayout from "../../components/dashboard/DashboardLayout";

const Settings = () => {


  return (
    <DashboardLayout>
      <div className="flex gap-8 text-primary">
        <div className="mt-8 md:mt-0 w-full">
          <h1 className="text-2xl font-bold">Settings</h1>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Settings;
