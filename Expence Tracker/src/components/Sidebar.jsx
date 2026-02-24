import { useState } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { AiOutlineDashboard, AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";

import { Link, Outlet } from "react-router-dom";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  function showSideBar() {
    setIsOpen(prev => !prev);
  }

  return (
    <>
      {/* Sidebar toggle button */}
      <button onClick={showSideBar} className='ml-5 bg-blue-500 p-2 rounded-xl mt-3 text-white cursor-pointer'>
        ☰ Menu
      </button>

      {/* Sidebar */}
      <div
        className={`w-60 h-screen bg-blue-500 text-white rounded-xl p-5 fixed top-0 left-0
        transform transition-transform duration-300 z-50
        ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Close button */}
        <div className="flex justify-end mb-5 ">
          <button onClick={showSideBar} className="cursor-pointer">
            <IoIosCloseCircleOutline size={25} color="white" />
          </button>
        </div>

        <h1 className='text-2xl font-bold mb-5'>Expence Tracker</h1>

        <div className='flex items-center justify-center mb-10'>
          {/* <div className='w-12 h-12 rounded-full bg-black'></div> */}
          <CgProfile size={55}/>

        </div>

        {/* Links with icons */}
        <div className="flex flex-col gap-4 text-lg">
          <Link to={"/"} className="flex items-center gap-2 hover:text-blue-400">
            <AiOutlineDashboard size={20} /> Dashboard
          </Link>
          <Link to={"/income"} className="flex items-center gap-2 hover:text-green-400">
            <AiOutlineArrowUp size={20} /> Income
          </Link>
          <Link to={"/expence"} className="flex items-center gap-2 hover:text-red-400">
            <AiOutlineArrowDown size={20} /> Expence
          </Link>
        </div>
      </div>

      {/* Page content */}
      <div className={`${isOpen ? "ml-60" : "ml-0"} transition-all duration-300`}>
        <Outlet />
      </div>
    </>
  );
}

export default Sidebar;