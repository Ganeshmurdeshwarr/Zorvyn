import React from 'react'
import { FaPlus } from "react-icons/fa6";
import useMyContext from "../../context/useMyContext";

const TransactionsTable = () => {
  const { filteredTransactions , setModal , role} = useMyContext();
 
  return (
    <div className="mt-6 max-h-60 overflow-y-auto">
      <table className="w-full text-center text-sm  ">
        <thead className="text-gray-500 border-b bg-gray-300 rounded-2xl sticky top-0  z-10">
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
                className="border-b last:border-none hover:bg-gray-50 transition "
              >
                <td className="py-3 font-medium">{item.category}</td>
                <td className="text-gray-500">{item.date}</td>

                <td>
                  {" "}
                  <span
                    className={`px-2 py-1 rounded-lg text-xs font-semibold
                    ${
                      item.type === "credit"
                        ? "bg-green-100 text-green-600"
                        : "bg-red-300 text-red-600"
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
                      className="bg-blue-200 px-2 py-1 rounded text-xs"
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