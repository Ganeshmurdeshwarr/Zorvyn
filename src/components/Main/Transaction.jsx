import TransactionsTable from "./TransactionsTable"
import { CiEdit } from "react-icons/ci";
import { FaPlus } from 'react-icons/fa6';
import useMyContext from "../../context/useMyContext";
import AddForm from './AddForm';
import EditForm from './EditForm';

const Transaction = () => {
   
  


  const { filter, setFilter ,modal , setModal ,role } = useMyContext();

  

  return (
    <div className="relative mt-10   border border-white/10 rounded-2xl hover:shadow-2xl shadow-lg p-4 w-full transition-transform hover:scale-[1.02]">
      <div className="flex justify-between items-center ">
        <h2 className="sm:text-2xl font-semibold text-xl">Transactions</h2>

        <div className={` ${role === "admin" ? "block " : "hidden"}`}>
          <button
            onClick={() => setModal({ type: "add", data: null })}
            className=" rounded p-2 flex justify-between items-center gap-2 bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-500/30 text-white  "
          >
            <FaPlus />
            ADD
          </button>
        </div>

        {modal.type && (
          <div className="absolute inset-0 z-40  flex items-center justify-center  bg-black/50 rounded-lg backdrop-blur-md ">
            {/* Form Box */}
            <div className="bg-white p-6 rounded-xl w-[400px]">
              {modal.type === "add" && <AddForm />}
              {modal.type === "edit" && <EditForm data={modal.data} />}
            </div>
          </div>
        )}
      </div>

      {/* Filter */}
      <div className="flex gap-4 mt-6 text-black">
        <h1>Filter</h1>
        <select
          value={filter.type}
          onChange={(e) =>
            setFilter((prev) => ({ ...prev, type: e.target.value }))
          }
        >
          <option value="all">All Type</option>
          <option value="credit">Credit</option>
          <option value="debit">Debit</option>
        </select>

        <select
          value={filter.category}
          onChange={(e) =>
            setFilter((prev) => ({ ...prev, category: e.target.value }))
          }
        >
          <option value="all">All Category</option>
          <option value="Shopping">Shopping</option>
          <option value="Travel">Travel</option>
          <option value="Food">Food</option>
        </select>
      </div>

      <TransactionsTable />
    </div>
  );
}

export default Transaction
