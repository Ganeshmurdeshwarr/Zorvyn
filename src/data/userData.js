const userData = {
  user: {
    name: "Ganesh Murdeshwar",
    email: "ganesh@example.com",
    phone: "9876543210",
  },

  summary: {
    last30Days: {
      income: 45000,
      expense: 32000,
    },
    balance: 13000,
  },

  spendingByCategory: [
    { category: "Shopping", amount: 8000 },
    { category: "Travel", amount: 5000 },
    { category: "Rent", amount: 12000 },
    { category: "Food", amount: 4000 },
    { category: "Personal", amount: 3000 },
  ],

  balanceHistory: [
    { month: "Jan", balance: 5000 },
    { month: "Feb", balance: 8000 },
    { month: "Mar", balance: 12000 },
    { month: "Apr", balance: 10000 },
    { month: "May", balance: 15000 },
    { month: "Jun", balance: 20000 },
    { month: "Jul", balance: 18000 },
    { month: "Aug", balance: 22000 },
    { month: "Sep", balance: 25000 },
    { month: "Oct", balance: 23000 },
    { month: "Nov", balance: 27000 },
    { month: "Dec", balance: 30000 },
  ],

  transactions: [
    {
      id: 1,
      date: "2026-04-01",
      category: "Shopping",
      type: "debit",
      amount: 2000,
    },
    {
      id: 2,
      date: "2026-04-02",
      category: "Salary",
      type: "credit",
      amount: 30000,
    },
    {
      id: 3,
      date: "2026-04-03",
      category: "Food",
      type: "debit",
      amount: 500,
    },
    {
      id: 4,
      date: "2026-04-05",
      category: "Travel",
      type: "debit",
      amount: 1500,
    },
    {
      id: 5,
      date: "2026-04-07",
      category: "Rent",
      type: "debit",
      amount: 12000,
    },
    {
      id: 6,
      date: "2026-04-10",
      category: "Freelance",
      type: "credit",
      amount: 15000,
    },
    {
      id: 7,
      date: "2026-04-12",
      category: "Shopping",
      type: "debit",
      amount: 3000,
    },
    {
      id: 8,
      date: "2026-04-15",
      category: "Food",
      type: "debit",
      amount: 800,
    },
  ],
};


export default  userData