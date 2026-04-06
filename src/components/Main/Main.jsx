import React from "react";
import Navbar from "../Navbar";
import Balance from "./Balance";
import Chart from "./chart";
import Transaction from "./Transaction"
import UserSpendingData from "./UserSpendingData";
import useMyContext from "../../context/useMyContext";

const Main = () => {
  const {role , setRole} = useMyContext()
  return (
    <div className="mt-14 sm:mt-20">
      {/* Role switchers */}
      <div className="flex justify-between items-center">
        <h1 className="text-xl sm:text-2xl md:text-4xl font-bold  ">Dashboard</h1>

        <div className="flex justify-between items-center gap-2">
          <p className="font-semibold sm:text-md">Role switcher</p>
          <div className="flex bg-white rounded-4xl items-center   p-1">
            <button
              onClick={() => setRole("admin")}
              className={` text-sm rounded-4xl py-2 px-3 ${role === "admin" ? "bg-green-200" : ""}`}
            >
              ADMIN
            </button>
            <button
              onClick={() => setRole("user")}
              className={` text-sm rounded-4xl py-2 px-3 ${role === "user" ? "bg-green-200" : ""}`}
            >
              USER
            </button>
          </div>
        </div>
      </div>

      {/* User data */}
      <div className="mt-6 md:flex gap-10 justify-between ">
        {/* Left components (Wallet , Balance ) */}

        <div className="w-full ">
          <Balance />
          <UserSpendingData />
        </div>

        {/* Right components (chat , transactions) */}

        <div className=" w-full mt-10 md:mt-0">
          <Chart />
          <Transaction />
        </div>
      </div>
    </div>
  );
};

export default Main;
