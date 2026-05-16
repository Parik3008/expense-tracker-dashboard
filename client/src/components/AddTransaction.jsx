import { useState } from "react"
import API from "../services/api"

function AddTransaction({ fetchTransactions }) {
  const [form, setForm] = useState({
    title: "",
    amount: "",
    type: "expense",
    category: ""
  })

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Validation
    if (
      !form.title.trim() ||
      !form.amount ||
      !form.category.trim()
    ) {
      alert("Please fill all fields")
      return
    }

    await API.post("/transactions", form)

    setForm({
      title: "",
      amount: "",
      type: "expense",
      category: ""
    })

    fetchTransactions()
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-lg shadow-md mb-6"
    >
      <h2 className="text-2xl font-bold mb-4">
        Add Transaction
      </h2>

      <input
        type="text"
        placeholder="Title"
        value={form.title}
        onChange={(e) =>
          setForm({
            ...form,
            title: e.target.value
          })
        }
        className="border p-2 w-full mb-3 rounded"
      />

      <input
        type="number"
        placeholder="Amount"
        value={form.amount}
        onChange={(e) =>
          setForm({
            ...form,
            amount: e.target.value
          })
        }
        className="border p-2 w-full mb-3 rounded"
      />

      <select
        value={form.type}
        onChange={(e) =>
          setForm({
            ...form,
            type: e.target.value
          })
        }
        className="border p-2 w-full mb-3 rounded"
      >
        <option value="expense">
          Expense
        </option>

        <option value="income">
          Income
        </option>
      </select>

      <input
        type="text"
        placeholder="Category"
        value={form.category}
        onChange={(e) =>
          setForm({
            ...form,
            category: e.target.value
          })
        }
        className="border p-2 w-full mb-3 rounded"
      />

      <button className="bg-blue-500 text-white px-4 py-2 rounded w-full hover:bg-blue-600">
        Add Transaction
      </button>
    </form>
  )
}

export default AddTransaction