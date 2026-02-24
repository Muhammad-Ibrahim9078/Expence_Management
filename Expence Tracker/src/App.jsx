import React, { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <div className="relative min-h-screen bg-gray-100 duration-300">
      
      {/* 🔘 Toggle Button */}
      <button
        onClick={toggleSidebar}
        className="m-4 p-2 bg-blue-500 text-white rounded-md"
      >
        ☰
      </button>

      {/* 🌑 Overlay (optional but pro) */}
      {isOpen && (
        <div
          onClick={toggleSidebar}
          className="fixed inset-0 bg-black/40 z-40"
        />
      )}

      {/* 📂 Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg
        transform transition-transform duration-300 z-50
        ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="p-5 flex justify-between items-center">
          <h2 className="text-xl font-bold">Sidebar</h2>

          {/* ❌ Close button */}
          <button
            onClick={toggleSidebar}
            className="text-red-500 font-bold text-lg"
          >
            ✕
          </button>
        </div>

        <ul className="p-5 space-y-2">
          <li className="hover:bg-gray-100 p-2 rounded">Dashboard</li>
          <li className="hover:bg-gray-100 p-2 rounded">Orders</li>
          <li className="hover:bg-gray-100 p-2 rounded">Settings</li>
        </ul>
      </div>
    </div>
  );
}

export default App;