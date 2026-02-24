import React from "react";
import { MdAccountBalanceWallet } from "react-icons/md";
import { FaMoneyBillWave } from "react-icons/fa";
import { FaHandHoldingDollar } from "react-icons/fa6";

function TopCard() {
  return (
    <div className="flex flex-wrap gap-6 justify-between p-4">

      {/* Card 1 */}
      <div className="flex items-center gap-4 bg-white shadow-md rounded-2xl p-5 w-[280px]">
        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-purple-500 text-white">
          <MdAccountBalanceWallet size={24} />
        </div>
        <div>
          <p className="text-gray-500 text-sm">Total Balance</p>
          <h2 className="text-xl font-bold">$91,100</h2>
        </div>
      </div>

      {/* Card 2 */}
      <div className="flex items-center gap-4 bg-white shadow-md rounded-2xl p-5 w-[280px]">
        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-orange-500 text-white">
          <FaMoneyBillWave size={22} />
        </div>
        <div>
          <p className="text-gray-500 text-sm">Total Income</p>
          <h2 className="text-xl font-bold">$98,200</h2>
        </div>
      </div>

      {/* Card 3 */}
      <div className="flex items-center gap-4 bg-white shadow-md rounded-2xl p-5 w-[280px]">
        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-red-500 text-white">
          <FaHandHoldingDollar size={22} />
        </div>
        <div>
          <p className="text-gray-500 text-sm">Total Expenses</p>
          <h2 className="text-xl font-bold">$7,100</h2>
        </div>
      </div>

    </div>
  );
}

export default TopCard;