import React from 'react'
import {
PieChart,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Pie,
  Cell,
} from "recharts";

const UserSpendingData = () => {
  // Chart data

  const data = [
    { name: "Shopping", value: 5000 },
    { name: "Food", value: 2000 },
    { name: "Travel", value: 3000 },
    { name: "Rent", value: 3000 },
    { name: "Movie", value: 3000 },
  ];

  //  Colors
  const color = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#F44236"];

  //  Highest Spending
  const highest = data.reduce((max, item) =>
    item.value > max.value ? item : max,
  );

  // 🔹 Monthly Comparison (dummy values)
  const currentMonth = 16000;
  const lastMonth = 12000;

  const change = ((currentMonth - lastMonth) / lastMonth) * 100;

  //  Tooltip
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload?.length) {
      return (
        <div className="bg-white shadow rounded text-sm p-4 border-0.5 border-black">
          <p className="">
            {payload[0].name}: ${payload[0].value}
          </p>
        </div>
      );
    }
  };

  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }) => {
    const RADIAN = Math.PI / 180;
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="center"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div className=" bg-white rounded-2xl p-4 mt-10">
      <h1 className="py-4 text-2xl font-semibold ">Spending Breakdown</h1>

      {/* Chart */}

      <ResponsiveContainer width="100%" height={300}>
        <PieChart margin={{ right: 30 }}>
          <Pie
            data={data}
            dataKey="value"
            innerRadius={50}
            outerRadius={120}
            label={renderCustomizedLabel}
            labelLine={false}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={color[index]} />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
          <Legend />
        </PieChart>
      </ResponsiveContainer>

      {/* 🔹 Insights */}

      <div className="mt-6 space-y-2 text-sm">
        <p className="flex items-center gap-2">
          🔥 <span className="font-semibold">Highest:</span> {highest.name} (₹
          {highest.value})
        </p>

        <p className="flex items-center gap-2">
          📈 <span className="font-semibold">Monthly Change:</span>{" "}
          {change.toFixed(1)}%
        </p>

        <p className="flex items-center gap-2">
          💡 <span className="font-semibold">Insight:</span> Most spending is on{" "}
          {highest.name}
        </p>
      </div>
    </div>
  );
};

export default UserSpendingData