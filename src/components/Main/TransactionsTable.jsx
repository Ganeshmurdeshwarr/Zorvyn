import React from 'react'
import { FaPlus } from "react-icons/fa6";
import useMyContext from "../../context/useMyContext";

const TransactionsTable = () => {
  const { filteredTransactions , setModal , role} = useMyContext();
 
  return (
    <div className="mt-6 max-h-60 overflow-y-auto custom-scroll  border border-white/10 rounded-2xl ">
      <table className="w-full text-center text-sm  ">
        <thead className="text-gray-900 bg-white border-b border-white/10  rounded-2xl sticky top-0  z-10">
          <tr>
            <th className="py-2">Category</th>
            <th>Date</th>
            <th>Type</th>
            <th>amount</th>
            {role === "admin" && <th>Actions</th>}
          </tr>
        </thead>

        <tbody className="">
          {filteredTransactions.map((item) => {
            return (
              <tr
                key={item.id}
                className="border-b last:border-none hover:bg-white/5 transition "
              >
                <td className="py-3 font-medium">{item.category}</td>
                <td className="text-gray-200">{item.date}</td>

                <td>
                  {" "}
                  <span
                    className={`px-2 py-1 rounded-lg text-xs font-semibold
                    ${
                      item.type === "credit"
                        ? "bg-green-500/20 text-green-400"
                        : "bg-red-500/20 text-red-400"
                    }`}
                  >
                    {item.type}
                  </span>
                </td>

                <td className={`font-semibold rounded-2xl text-xs`}>
                  {item.type === "debit" ? -item.amount : item.amount}
                </td>
                {role === "admin" && (
                  <td>
                    <button
                      onClick={() => setModal({ type: "edit", data: item })}
                      className="px-2 py-1 rounded text-xs bg-white/10 hover:bg-white/20 text-white "
                    >
                      Edit
                    </button>
                  </td>
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionsTable