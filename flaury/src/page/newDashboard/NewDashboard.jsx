import React from 'react'
import NearbySalon from "../../components/dashboard/NearbySalon";
import SpecialOffers from "../../components/dashboard/SpecialOffers";
import BeautyTips from "../../components/dashboard/BeautyTips";
import Recommendations from "../../components/dashboard/Recommendations";
import Quicklinks from "../../components/dashboard/Quicklinks";


function NewDashboard() {
  // TODO: Implement the switch between overview and Boverview.
  return (
    <div>
        <Quicklinks />
        <NearbySalon />
        <SpecialOffers />
        <BeautyTips />
        <Recommendations />
    </div>
  )
}

export default NewDashboard