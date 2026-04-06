import { useState } from "react";
import useMyContext from "../../context/useMyContext";



const EditForm = ({ data }) => {
  const { editTransaction, setModal } = useMyContext();

  const [formData, setFormData] = useState({
    date: data?.date || "",
    category: data?.category || "",
    type: data?.type || "debit",
    amount: data?.amount || "",
  });

  const handleSubmit = () => {
    if (!formData.date || !formData.category || !formData.amount) {
      alert("Please fill all fields");
      return;
    }

    editTransaction({
      ...data, // keep id
      ...formData,
      amount: Number(formData.amount),
    });

    setModal({ type: null, data: null });
  };

  return (
    <div className="bg-white p-6 rounded-2xl w-[350px] shadow-lg">
      <h2 className="text-xl font-semibold mb-4">Edit Transaction</h2>

      {/* Date */}
      <input
        type="date"
        value={formData.date}
        className="w-full border p-2 rounded mb-3"
        onChange={(e) =>
          setFormData({ ...formData, date: e.target.value })
        }
      />

      {/* Category */}
      <input
        type="text"
        placeholder="Category"
        value={formData.category}
        className="w-full border p-2 rounded mb-3"
        onChange={(e) =>
          setFormData({ ...formData, category: e.target.value })
        }
      />

      {/* Amount */}
      <input
        type="number"
        placeholder="Amount"
        value={formData.amount}
        className="w-full border p-2 rounded mb-4"
        onChange={(e) =>
          setFormData({ ...formData, amount: e.target.value })
        }
      />

      {/* Buttons */}
      <div className="flex justify-between gap-2">
        <button
          onClick={handleSubmit}
          className="bg-blue-500 text-white px-4 py-2 rounded w-full"
        >
          Update
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

export default EditForm;

