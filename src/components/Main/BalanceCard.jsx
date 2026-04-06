import React from 'react'

const BalanceCard = () => {
  return (
    <div className="w-full bg-white px-8  py-4 rounded-2xl flex gap-6 sm:block hover:shadow-2xl transition">
      <div className="text-center sm:text-start">
        <h2 className="text-3xl font-semibold ">WALLET</h2>
        <p className="mt-6 text-3xl font-semibold">$4,4949.49</p>
      </div>

      <div className="sm:mt-4 w-full text-center sm:flex  justify-center items-stretch gap-4">
        <div className="bg-green-100 w-full p-4 rounded-xl ">
          <p>$366.936</p>
          <p>Income</p>
        </div>
        <div className="bg-blue-100 p-4 rounded-xl w-full mt-4 sm:mt-0">
          <p>$636.85</p>
          <p>Expense</p>
        </div>
      </div>
    </div>
  );
}

export default BalanceCard;