import DashboardLayout from "../../components/dashboard/DashboardLayout"
import NearbySalon from "../../components/dashboard/NearbySalon";
import SpecialOffers from "../../components/dashboard/SpecialOffers";
import BeautyTips from "../../components/dashboard/BeautyTips";
import Recommendations from "../../components/dashboard/Recommendations";
import Quicklinks from "../../components/dashboard/Quicklinks";

export default function DashboardMain() {


  return (
    <DashboardLayout>
      <div className="flex flex-col">
        <Quicklinks />
        <NearbySalon />
        <SpecialOffers />
        <BeautyTips />
        <Recommendations />
      </div>
    </DashboardLayout>
  )
}

