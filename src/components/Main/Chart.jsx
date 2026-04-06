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

const Chart = () => {
  const data = [
    { date: "Jan ", balance: 10000 },
    { date: "Feb", balance: 12000 },
    { date: "Mar", balance: 9000 },
    { date: "Apr", balance: 1000 },
    { date: "May", balance: 9000 },
    { date: "Jun", balance: 5000 },
    { date: "Jul", balance: 100000 },
    { date: "Aug", balance: 9000 },
    { date: "Oct", balance: 9000 },
    { date: "Sep", balance: 9000 },
    { date: "Nuv", balance: 9000 },
    { date: "Des", balance: 9000 },
  ];

  return (
    <div className=" bg-white rounded-2xl p-4">
      <h1 className="py-4 text-2xl font-semibold">Balance Trend</h1>
      
      <ResponsiveContainer width="100%" height={300}>
        <LineChart  data={data} margin={{ right: 30 }}>
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
