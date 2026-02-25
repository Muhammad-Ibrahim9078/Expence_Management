import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaMoneyBillWave } from "react-icons/fa";

const IncomeFetch = () => {
  const [incomeData, setIncomeData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/data/all")
      .then(res => {
        if (res.data.status) {
          const incomes = res.data.data.filter(item => item.type === "income");
          setIncomeData(incomes);
        }
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-3 flex items-center">
        <FaMoneyBillWave className="mr-3 text-green-500"/> Income List
        <span className="ml-auto bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm">
          {incomeData.length} items
        </span>
      </h2>
      <ul className="space-y-3">
        {incomeData.map(item => (
          <li key={item._id} className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-green-500 flex justify-between items-center">
            <span className="font-medium text-gray-700">{item.title}</span>
            <span className="bg-green-50 text-green-600 font-bold px-4 py-1 rounded-full">
              +${item.amount}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IncomeFetch;