import BQuickLink from "./BQuickLink";
import BRecentTransactions from "./BRecentTransactions";
import DashboardLayout from "./DashboardLayout";

const BusinessOverview = () => {
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-8 px-4 py-6 lg:px-8 lg:py-10 bg-[#FEFFF1] min-h-full">
        <BQuickLink />
        <BRecentTransactions />
      </div>
    </DashboardLayout>
  );
};

export default BusinessOverview;
