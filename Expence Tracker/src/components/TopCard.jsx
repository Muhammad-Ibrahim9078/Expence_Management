import React, { useEffect, useState } from "react";
import axios from "axios";
import { MdAccountBalanceWallet } from "react-icons/md";
import { FaMoneyBillWave } from "react-icons/fa";
import { FaHandHoldingDollar } from "react-icons/fa6";

function TopCard() {
  const [summary, setSummary] = useState({
    balance: 0,
    totalIncome: 0,
    totalExpense: 0,
  });

  useEffect(() => {
    axios
      .get("http://localhost:5000/data/all")
      .then((res) => {
        if (res.data.status) {
          const { balance, totalIncome, totalExpense } = res.data.summary;
          setSummary({ balance, totalIncome, totalExpense });
        }
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="flex flex-wrap gap-6 justify-between p-4">

      {/* Card 1: Total Balance */}
      <div className="flex items-center gap-4 bg-white shadow-md rounded-2xl p-5 w-[280px]">
        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-purple-500 text-white">
          <MdAccountBalanceWallet size={24} />
        </div>
        <div>
          <p className="text-gray-500 text-sm">Total Balance</p>
          <h2 className="text-xl font-bold">${summary.balance.toLocaleString()}</h2>
        </div>
      </div>

      {/* Card 2: Total Income */}
      <div className="flex items-center gap-4 bg-white shadow-md rounded-2xl p-5 w-[280px]">
        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-orange-500 text-white">
          <FaMoneyBillWave size={22} />
        </div>
        <div>
          <p className="text-gray-500 text-sm">Total Income</p>
          <h2 className="text-xl font-bold">${summary.totalIncome.toLocaleString()}</h2>
        </div>
      </div>

      {/* Card 3: Total Expenses */}
      <div className="flex items-center gap-4 bg-white shadow-md rounded-2xl p-5 w-[280px]">
        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-red-500 text-white">
          <FaHandHoldingDollar size={22} />
        </div>
        <div>
          <p className="text-gray-500 text-sm">Total Expenses</p>
          <h2 className="text-xl font-bold">${summary.totalExpense.toLocaleString()}</h2>
        </div>
      </div>

    </div>
  );
}

export default TopCard;