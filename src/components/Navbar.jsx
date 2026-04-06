import React, { useState } from 'react'
import { CiSearch } from "react-icons/ci";
import { RiMenu3Line } from "react-icons/ri";
import useMyContext from '../context/useMyContext';


const Navbar = ({ setSidebarOpen }) => {

   const { users, setSelectedUser, role } = useMyContext();

   const [search, setSearch] = useState("");
   const [showDropdown, setShowDropdown] = useState(false);

   const filteredUsers = users.filter((u) =>
     u.user.name.toLowerCase().includes(search.toLowerCase()),
   );

  return (
    <div className=" fixed z-[20] top-3 backdrop-blur-md left-0 px-2 sm:pl-56 sm:flex justify-between w-full items-center text-black ">
      <div className=" flex items-center w-full  bg-white/10 backdrop-blur-lg border border-white/10 rounded-2xl px-4 py-2  shadow-md">
        <div className="pr-6 sm:hidden">
          <RiMenu3Line onClick={() => setSidebarOpen(true)} size={30} />
        </div>

        <div className="bg-white rounded-2xl px-4 w-full  flex items-center relative ">
          <CiSearch size={20} className='' />

          <input
            className="font-semibold rounded-2xl px-4 w-full py-2 border-0 outline-0 bg-transparent text-black   outline-none placeholder:text-black "
            type="search"
            placeholder="Search"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setShowDropdown(true);
            }}
          />

          {/* Name Options */}
          {role === "admin" && showDropdown && search && (
            <div className="absolute top-full mt-4 w-full  left-0 sm:right-0 px-10   py-4 bg-white shadow-lg rounded-xl max-h-60 overflow-y-auto z-[999]">
              {filteredUsers.length > 0 ? (
                filteredUsers.map((u) => (
                  <div
                    key={u.id}
                    onClick={() => {
                      setSelectedUser(u);
                      setSearch("");
                      setShowDropdown(false);
                    }}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    {u.user.name}
                  </div>
                ))
              ) : (
                <p className="p-3 text-gray-500">No user found</p>
              )}
            </div>
          )}


        </div>
      </div>
    </div>
  );
};

export default Navbar