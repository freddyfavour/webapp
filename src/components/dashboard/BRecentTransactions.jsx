import { useMemo } from "react";
import { useAuth } from "@/context/AuthContext";

const sampleTransactions = [
  {
    id: "tx-1",
    label: "Transfer to wallet",
    customer: "Pella Sophia",
    timestamp: "Nov 28, 16:34",
    amount: 20000,
    status: "Successful",
    direction: "credit",
  },
  {
    id: "tx-2",
    label: "Transfer to wallet",
    customer: "Pella Sophia",
    timestamp: "Nov 28, 16:34",
    amount: 20000,
    status: "Successful",
    direction: "credit",
  },
  {
    id: "tx-3",
    label: "Withdrawal to bank",
    customer: "Becca Barauch",
    timestamp: "Nov 28, 16:34",
    amount: 40000,
    status: "Successful",
    direction: "debit",
  },
  {
    id: "tx-4",
    label: "Withdrawal to bank",
    customer: "Becca Barauch",
    timestamp: "Nov 28, 16:34",
    amount: 40000,
    status: "Successful",
    direction: "debit",
  },
  {
    id: "tx-5",
    label: "Transfer to wallet",
    customer: "Pella Sophia",
    timestamp: "Nov 28, 16:34",
    amount: 20000,
    status: "Successful",
    direction: "credit",
  },
];

const BRecentTransactions = () => {
  const { user } = useAuth();

  const transactions = useMemo(() => {
    if (user?.recentTransactions?.length) {
      return user.recentTransactions;
    }
    return sampleTransactions;
  }, [user]);

  const formatAmount = (amount) => {
    if (typeof amount !== "number") {
      return amount;
    }
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <section className="rounded-2xl border border-[#F2CFA1] bg-white p-6 text-[#2F1B00] shadow-sm">
      <header className="flex items-center justify-between">
        <div>
          <h3 className="text-2xl font-semibold text-[#7A3E10]">Transactions</h3>
          <p className="text-xs text-[#A87440]">Keep track of wallet inflows and payouts</p>
        </div>
        <button className="text-sm font-semibold text-[#C17A1E] transition hover:text-[#A35C00]">
          View all
        </button>
      </header>

      <div className="mt-6 space-y-4">
        {transactions.map((transaction) => {
          const isCredit = transaction.direction === "credit";
          return (
            <article
              key={transaction.id}
              className="flex flex-col gap-1 border-b border-[#F5E3C5] pb-4 last:border-b-0 last:pb-0"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm font-semibold">
                  <span
                    className={`text-lg ${isCredit ? "text-[#2F9E44]" : "text-[#D64545]"}`}
                  >
                    {isCredit ? "⬆️" : "⬇️"}
                  </span>
                  <span>{transaction.label}</span>
                </div>
                <span
                  className={`text-sm font-bold ${isCredit ? "text-[#2F9E44]" : "text-[#D64545]"}`}
                >
                  {isCredit ? "+" : "-"}
                  {typeof transaction.amount === "number"
                    ? formatAmount(transaction.amount)
                    : transaction.amount}
                </span>
              </div>
              <div className="flex flex-wrap items-center justify-between text-xs text-[#7A3E10]">
                <p>
                  {transaction.customer} <span className="mx-1">|</span>
                  {transaction.timestamp}
                </p>
                <p className={`font-semibold ${transaction.status === "Successful" ? "text-[#2F9E44]" : "text-[#D64545]"}`}>
                  {transaction.status}
                </p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default BRecentTransactions;
