import BQuickLink from "./BQuickLink";
import BRecentTransactions from "./BRecentTransactions";
import DashboardLayout from "./DashboardLayout";

const Overview = () => {
  return (
    // <div className="mt-0 lg:mt-20 w-full md:px-8 lg:px-0 px-4">
      <DashboardLayout>
                  <hr className="w-full my-4 bg-primaryColor" />

<div className="mt-16" />
      <BQuickLink />
      <BRecentTransactions />
    {/* </div>   */}
        </DashboardLayout>

  );
};

export default Overview;
