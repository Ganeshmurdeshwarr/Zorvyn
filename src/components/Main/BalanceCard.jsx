import React from 'react'
import useMyContext from '../../context/useMyContext';

const BalanceCard = () => {
  const { selectedUser } = useMyContext();
  console.log(selectedUser);
  
  return (
    <div className="w-full  px-8  py-4  flex gap-6 sm:block hover:shadow-2xl  bg-white/10  transition-transform hover:scale-[1.02] backdrop-blur-lg border border-white/10 rounded-2xl p-5 shadow-lg">
      <div className="text-center sm:text-start">

        <div className="font-semibold mb-4">{selectedUser?.user?.name}</div>
        <h2 className="text-3xl font-semibold ">WALLET</h2>
        <p className="mt-6 text-3xl font-semibold">
          ${selectedUser?.summary?.balance}
        </p>
      </div>

      <div className="sm:mt-4 w-full text-center sm:flex  justify-center items-stretch gap-4">
        <div className="bg-green-500 w-full p-4 rounded-xl ">
          <p>${selectedUser?.summary?.last30Days?.income}</p>
          <p>Income</p>
        </div>
        <div className="bg-red-500 p-4 rounded-xl w-full mt-4 sm:mt-0">
          <p>${selectedUser?.summary?.last30Days?.expense}</p>
          <p>Expense</p>
        </div>
      </div>
    </div>
  );
}

export default BalanceCard;