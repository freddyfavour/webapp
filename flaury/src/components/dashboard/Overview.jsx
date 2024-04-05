import NearbySalon from "./NearbySalon";
import SpecialOffers from "./SpecialOffers";
import BeautyTips from "./BeautyTips";
import Recommendations from "./Recommendations";
import Quicklinks from "./Quicklinks";

const Overview = () => {
  return (
    <div className="lg:mt-20 w-full md:px-8 lg:px-0 px-4">
      <Quicklinks />
      <NearbySalon />
      <SpecialOffers />
      <BeautyTips />
      <Recommendations />
    </div>
  );
};

export default Overview;
