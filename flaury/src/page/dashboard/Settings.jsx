import { useState, useEffect } from "react";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import SettingsComponent from "@/components/profile/SettingsComponent";

const Settings = () => {


  return (
    <DashboardLayout>
      <div className="flex flex-col gap-3 text-primary">
        <div className="mt-8 md:mt-0 w-full">
          <h1 className="text-2xl font-bold">Settings</h1>
        </div>
        <img
          src="/timelessrecommended.png"
          alt=""
          className="w-full h-32 object-cover"
        />
        <SettingsComponent />
      </div>
    </DashboardLayout>
  );
};

export default Settings;
