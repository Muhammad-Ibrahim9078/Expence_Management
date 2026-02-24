import React, { useState, useEffect } from "react";
import axios from "axios";

export default function ExpenseFetch() {
  const [expenses, setExpenses] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch expenses
  useEffect(() => {
    const fetchExpenses = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get("http://localhost:5000/user/api/transaction/all", {
          headers: { Authorization: `Bearer ${token}` }
        });

        // Sirf expense wale filter karo
        const expenseData = response.data.data.transactions.filter(t => t.type === "expense");
        setExpenses(expenseData);
        
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchExpenses();
  }, []);

  // Loading state
  if (loading) {
    return <div className="text-center p-4">Loading expenses...</div>;
  }

  // Simple List Display
  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">My Expenses</h2>
      
      {expenses.length === 0 ? (
        <p className="text-gray-500">No expenses found</p>
      ) : (
        <div className="space-y-2">
          {expenses.map((expense) => (
            <div 
              key={expense._id}
              className="flex items-center justify-between p-3 bg-white rounded-lg shadow"
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">{expense.emoi || '💸'}</span>
                <div>
                  <p className="font-medium">₹{expense.amount}</p>
                  <p className="text-sm text-gray-500">
                    {new Date(expense.date).toLocaleDateString()}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}