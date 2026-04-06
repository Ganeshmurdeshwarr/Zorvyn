import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Main from "../components/Main/Main";
import Navbar from "../components/Navbar";
import useMyContext from "../context/useMyContext";

const Dashboard = () => {
  const {role} = useMyContext()
  const [SidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-linear-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden no-scrollbar">
      <Sidebar SidebarOpen={SidebarOpen} setSidebarOpen={setSidebarOpen} />

      <div className=" w-full  min-h-screen py-4 px-4 sm:pl-56 md:70 overflow-y-auto ">
        {role === "admin" && <Navbar setSidebarOpen={setSidebarOpen} />}

        <Main />
      </div>
    </div>
  );
};

export default Dashboard;
