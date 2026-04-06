import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Main from "../components/Main/Main";
import Navbar from "../components/Navbar";

const Dashboard = () => {
  const [SidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div>
      <Sidebar SidebarOpen={SidebarOpen} setSidebarOpen={setSidebarOpen} />

      <div className="bg-green-100 w-full  min-h-screen py-4 px-4 sm:pl-56 md:70">
        <Navbar setSidebarOpen={setSidebarOpen} />
        <Main />
      </div>
    </div>
  );
};

export default Dashboard;
