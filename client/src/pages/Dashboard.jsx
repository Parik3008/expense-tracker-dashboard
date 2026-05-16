import ExpenseChart from "../components/ExpenseChart"
import { useEffect, useState } from "react"
import API from "../services/api"

import AddTransaction from "../components/AddTransaction"

function Dashboard() {
  const [transactions, setTransactions] = useState([])

  const fetchTransactions = async () => {
    try {
      const res = await API.get("/transactions")
      setTransactions(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    const loadData = async () => {
      await fetchTransactions()
    }

    loadData()
  }, [])

  const income = transactions
    .filter((t) => t.type === "income")
    .reduce(
      (acc, curr) => acc + Number(curr.amount),
      0
    )

  const expense = transactions
    .filter((t) => t.type === "expense")
    .reduce(
      (acc, curr) => acc + Number(curr.amount),
      0
    )

  const balance = income - expense

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-center mb-8">
        Expense Tracker Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-green-500 text-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold">
            Income
          </h2>

          <p className="text-2xl mt-2">
            ₹{income}
          </p>
        </div>

        <div className="bg-red-500 text-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold">
            Expense
          </h2>

          <p className="text-2xl mt-2">
            ₹{expense}
          </p>
        </div>

        <div className="bg-blue-500 text-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold">
            Balance
          </h2>

          <p className="text-2xl mt-2">
            ₹{balance}
          </p>
        </div>
      </div>

      <AddTransaction
        fetchTransactions={fetchTransactions}
      />

      <ExpenseChart transactions={transactions} />

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">
          Transactions
        </h2>

        {transactions.map((transaction) => (
          <div
            key={transaction._id}
            className="border-b py-3 flex justify-between items-center"
          >
            <div>
              <h3 className="font-semibold">
                {transaction.title}
              </h3>

              <p>
                ₹{transaction.amount} •{" "}
                {transaction.category}
              </p>
            </div>

            <button
              onClick={async () => {
                await API.delete(
                  `/transactions/${transaction._id}`
                )

                fetchTransactions()
              }}
              className="bg-red-500 text-white px-3 py-1 rounded"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Dashboard