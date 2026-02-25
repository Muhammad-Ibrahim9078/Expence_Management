import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaMoneyBillWave, FaShoppingCart } from "react-icons/fa";

const AllFetch = () => {
  const [allData, setAllData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/data/all")
      .then(res => {
        if (res.data.status) {
          setAllData(res.data.data);
        }
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-3">All Transactions</h2>
      <ul className="space-y-3">
        {allData.map(item => (
          <li key={item._id} className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 flex justify-between items-center group"
              style={{ borderLeftColor: item.type === "income" ? "#10b981" : "#ef4444" }}>
            <span className="flex items-center gap-3 text-gray-700">
              <span className={`p-2 rounded-full ${item.type === "income" ? "bg-green-100" : "bg-red-100"}`}>
                {item.type === "income" ? 
                  <FaMoneyBillWave className="text-green-500 text-lg"/> : 
                  <FaShoppingCart className="text-red-500 text-lg"/>
                }
              </span>
              <span className="font-medium">{item.title}</span>
            </span>
            <span className={`font-bold text-lg ${item.type === "income" ? "text-green-600" : "text-red-600"}`}>
              ${item.amount}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllFetch;