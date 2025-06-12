import React from "react";

const transactionData = [
  {
    id: 1,
    amount: "7,000.00",
    customer: "Pella",
    reference: "t73j994y3kshf",
    channel: "Bank transfer",
    paid_on: "Friday, Jan",
  },
  {
    id: 2,
    amount: "7,000.00",
    customer: "Pella",
    reference: "t73j994y3kshf",
    channel: "Bank transfer",
    paid_on: "Friday, Jan",
  },
  {
    id: 3,
    amount: "7,000.00",
    customer: "Pella",
    reference: "t73j994y3kshf",
    channel: "Bank transfer",
    paid_on: "Friday, Jan",
  },
  {
    id: 4,
    amount: "7,000.00",
    customer: "Pella",
    reference: "t73j994y3kshf",
    channel: "Bank transfer",
    paid_on: "Friday, Jan",
  },
  {
    id: 5,
    amount: "7,000.00",
    customer: "Pella",
    reference: "t73j994y3kshf",
    channel: "Bank transfer",
    paid_on: "Friday, Jan",
  },
  {
    id: 6,
    amount: "7,000.00",
    customer: "Pella",
    reference: "t73j994y3kshf",
    channel: "Bank transfer",
    paid_on: "Friday, Jan",
  },
  {
    id: 7,
    amount: "7,000.00",
    customer: "Pella",
    reference: "t73j994y3kshf",
    channel: "Bank transfer",
    paid_on: "Friday, Jan",
  },
  {
    id: 8,
    amount: "7,000.00",
    customer: "Pella",
    reference: "t73j994y3kshf",
    channel: "Bank transfer",
    paid_on: "Friday, Jan",
  },
  {
    id: 9,
    amount: "7,000.00",
    customer: "Pella",
    reference: "t73j994y3kshf",
    channel: "Bank transfer",
    paid_on: "Friday, Jan",
  },
  {
    id: 10,
    amount: "7,000.00",
    customer: "Pella",
    reference: "t73j994y3kshf",
    channel: "Bank transfer",
    paid_on: "Friday, Jan",
  },
];
const BRecentTransactions = () => {
  return (
    <div className="text-black">
      <div className="w-full flex justify-between items-center">
        <h3 className="font-bold text-2xl pt-6 pb-4 text-primary">Transactions</h3>
        <a href="" className="text-sm text-primary">View all</a>
      </div>
      <div>
        <div className="flex justify-between items-center">
          <p>⬆️ Transfer to wallet</p>
          <b>+#20,000</b>
        </div>
        <div className="flex justify-between items-center mt-1">
          <p className="text-xs">Pella Sophia | Nov 28, 16:34</p>
          <p className="text-xs text-[green]">Successful</p>
        </div>
      </div>
      <hr className="my-4" />
      <div>
        <div className="flex justify-between items-center">
          <p>⬆️ Transfer to wallet</p>
          <b>+#20,000</b>
        </div>
        <div className="flex justify-between items-center mt-1">
          <p className="text-xs">Pella Sophia | Nov 28, 16:34</p>
          <p className="text-xs text-[green]">Successful</p>
        </div>
      </div>
      <hr className="my-4" />
      <div>
        <div className="flex justify-between items-center">
          <p>⬇️ Withdrawal to bank</p>
          <b>+#40,000</b>
        </div>
        <div className="flex justify-between items-center mt-1">
          <p className="text-xs">Becca Baruach | Nov 28, 16:34</p>
          <p className="text-xs text-[green]">Successful</p>
        </div>
      </div>
      <hr className="my-4" />
      <div>
        <div className="flex justify-between items-center">
          <p>⬇️ Withdrawal to bank</p>
          <b>+#40,000</b>
        </div>
        <div className="flex justify-between items-center mt-1">
          <p className="text-xs">Becca Baruach | Nov 28, 16:34</p>
          <p className="text-xs text-[green]">Successful</p>
        </div>
      </div>
      <hr className="my-4" />
      <div>
        <div className="flex justify-between items-center">
          <p>⬆️ Transfer to wallet</p>
          <b>+#20,000</b>
        </div>
        <div className="flex justify-between items-center mt-1">
          <p className="text-xs">Pella Sophia | Nov 28, 16:34</p>
          <p className="text-xs text-[green]">Successful</p>
        </div>
      </div>
      <hr className="my-4" />
    </div>
  );
};

export default BRecentTransactions;
