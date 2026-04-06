import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import useMyContext from "../../context/useMyContext";

const Chart = () => {

  const { selectedUser} = useMyContext()

   const data =
     selectedUser?.balanceHistory?.map((item) => ({
       date: item.month,
       balance: item.balance,
     })) || [];

     if (!selectedUser) return <p>Loading...</p>;
     
  return (
    <div className="border text-white mb-4 border-white/10 rounded-2xl hover:shadow-2xl shadow-lg p-4 transition-transform hover:scale-[1.02]">
      <h1 className="py-4 text-lg font-semibold  ">
        Balance Trend
      </h1>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data} margin={{ right: 30 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="balance" stroke="#2563eb" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
