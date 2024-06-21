import BQuickLink from "./BQuickLink";
import BRecentTransactions from "./BRecentTransactions";

const Overview = () => {
  return (
    <div className="mt-0 lg:mt-20 w-full md:px-8 lg:px-0 px-4">
      <BQuickLink />
      <BRecentTransactions />
    </div>
  );
};

export default Overview;
