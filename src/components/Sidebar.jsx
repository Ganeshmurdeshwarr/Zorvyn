import React, { useState } from "react";
import { IoFolderOpen } from "react-icons/io5";
import { FaXmark } from "react-icons/fa6";
import { RxDashboard } from "react-icons/rx";
import { TbReportSearch } from "react-icons/tb";
import { AiOutlineTransaction } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { IoMdLogOut } from "react-icons/io";
import { NavLink } from "react-router-dom";

const navOptions = [
  { icon: RxDashboard, name: "Dashboard", path: "/" },
  { icon: TbReportSearch, name: "Report" },
  { icon: AiOutlineTransaction, name: "Transactions" },
  { icon: CiSearch, name: "Search" },
];






const Sidebar = ({ SidebarOpen, setSidebarOpen }) => {
  return (
    <div
      className={`fixed top-0 left-0 z-50  min-h-screen w-64 sm:w-48 md:64 px-2 py-8 flex flex-col justify-between transition duration-300  ${SidebarOpen ? "translate-x-0" : "-translate-x-full"} sm:translate-x-0      bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white 
      `}
    >
      {/* Top Section */}

      <div className="">
        <div className="flex  justify-between items-center">
          <IoFolderOpen className="size-8" />
          <FaXmark
            className="sm:hidden size-8"
            onClick={() => setSidebarOpen(false)}
          />
        </div>

        {/* Sidebar Options  */}
        <div className="flex flex-col justify-center ">
          <div className="flex flex-col gap-y-2 font-semibold  mt-14">
            {navOptions.map((item, index) => {
              const Icon = item.icon;

              return (
                <NavLink key={index} to={item?.path}>
                  <div
                    key={index}
                    className="flex items-center gap-x-4 hover:bg-sky-600 px-4 py-3 rounded-xl"
                  >
                    <Icon size={30} />
                    <p className="text-xl">{item.name}</p>
                  </div>
                </NavLink>
              );
            })}
          </div>
        </div>
      </div>

      {/* Logout section */}
      <div className="flex items-center gap-x-4 hover:bg-sky-600 px-4 py-3 rounded-xl">
        <IoMdLogOut className="size-8" />
        <p className="text-xl font-semibold">Log Out</p>
      </div>
    </div>
  );
};

export default Sidebar;
