import { useState } from "react";
import useMyContext from "../../context/useMyContext";

const AddForm = () => {
  const { addTransaction, setModal } = useMyContext();

  const [formData, setFormData] = useState({
    date: "",
    category: "",
    type: "debit",
    amount: "",
  });

  const handleSubmit = () => {
    addTransaction({
      ...formData,
      amount: Number(formData.amount),
    });

    setModal({ type: null, data: null });
  };

  return (
    <div className=" p-6 rounded-2xl shadow-lg bg-white/10 backdrop-blur-lg border border-white/10 w-[350px]">
      <h2 className="text-xl font-semibold mb-4">Add Transaction</h2>

      <input
        type="date"
        className="w-full border p-2 rounded mb-3"
        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
      />

      <input
        type="text"
        placeholder="Category"
        className="w-full border p-2 rounded mb-3"
        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
      />

      <input
        type="number"
        placeholder="Amount"
        className="w-full border p-2 rounded mb-4"
        onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
      />

      <div className="flex justify-between gap-2">
        <button
          onClick={handleSubmit}
          className="bg-blue-500 text-white px-4 py-2 rounded w-full"
        >
          Add
        </button>

        <button
          onClick={() => setModal({ type: null, data: null })}
          className="bg-gray-300 px-4 py-2 rounded w-full"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default AddForm