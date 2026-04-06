import React from 'react'
import { CiSearch } from "react-icons/ci";
import { RiMenu3Line } from "react-icons/ri";


const Navbar = ({ setSidebarOpen }) => {
  return (
    <div className=" fixed top-3 backdrop-blur-md left-0 px-2 sm:pl-70 sm:flex justify-between w-full items-center ">
      <div className=" flex items-center w-full ">
        <div className="pr-6 sm:hidden">
          <RiMenu3Line onClick={() => setSidebarOpen(true)} size={30} />
        </div>
        <div className="bg-white rounded-2xl px-4 w-full  flex items-center focus-within:outline-4 focus-within:outline-gray-400 focus-within:outline-offset-2">
          <CiSearch size={20} />
          <input
            className="font-semibold rounded-2xl px-4 w-full py-2 border-0 outline-0 "
            type="search"
            placeholder="Search"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar