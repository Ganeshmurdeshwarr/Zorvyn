import { createContext, useEffect, useState, useMemo } from "react";
import { getUserData } from "../utils/mockApi";



const MyContext = createContext()



const MyContextProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [role , setRole] = useState('admin')
  const [modal, setModal] = useState({
    type: null,
    data: null,
  });

  const transactions = selectedUser?.transactions || [];

  const [filter, setFilter] = useState({
    search: "",
    category: "all",
    type: "all",
  });

  // Add transaction
  const addTransaction = (newTxn) => {
    const txnWithId = {
      ...newTxn,
      id: Date.now(), // simple unique id
    };

    setSelectedUser((prev) => ({
    ...prev,
    transactions: [txnWithId, ...prev.transactions],
  }))
  };

  // Edit 
  const editTransaction = (updatedTxn) => {
    setSelectedUser((prev) =>({
    ...prev,
    transactions: prev.transactions.map((txn) =>
      txn.id === updatedTxn.id ? { ...txn, ...updatedTxn } : txn
    ),
  })
    )
  };

const filteredTransactions = useMemo(() => {
  if (!transactions) return [];

  return transactions.filter((txn) => {
    const matchesSearch = txn.category
      .toLowerCase()
      .includes(filter.search.toLowerCase());

    const matchesCategory =
      filter.category === "all" || txn.category === filter.category;

    const matchesType = filter.type === "all" || txn.type === filter.type;

    return matchesSearch && matchesCategory && matchesType;
  });
}, [transactions, filter]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // ✅ API CALL
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await getUserData();

        setUsers(res);
        setSelectedUser(res[0]);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // ✅ VALUE (IMPORTANT)
  const value = {
    users,
    selectedUser,
    setSelectedUser,
    role,
    setRole,
    transactions,
    filteredTransactions,
    addTransaction,
    editTransaction,
    filter,
    setFilter,
    modal,
    setModal,
    loading,
    error,
  };



  return (
    <MyContext.Provider value={value}>
      {children}
    </MyContext.Provider>
  );
};;

export { MyContext , MyContextProvider };