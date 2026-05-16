import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from "chart.js"

import { Pie } from "react-chartjs-2"

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
)

function ExpenseChart({ transactions }) {
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

  const data = {
    labels: ["Income", "Expense"],

    datasets: [
      {
        label: "Financial Overview",

        data: [income, expense],

        backgroundColor: [
          "#22C55E", // Green → Income
          "#EF4444"  // Red → Expense
        ],

        borderColor: [
          "#16A34A",
          "#DC2626"
        ],

        borderWidth: 2
      }
    ]
  }

  const options = {
    responsive: true,

    plugins: {
      legend: {
        position: "top",

        labels: {
          font: {
            size: 14
          }
        }
      }
    }
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6">
      <h2 className="text-2xl font-bold mb-4 text-center">
        Expense Analytics
      </h2>

      <div className="max-w-md mx-auto">
        <Pie
          data={data}
          options={options}
        />
      </div>

      <div className="flex justify-center gap-6 mt-6">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-green-500 rounded-full"></div>

          <span className="font-medium">
            Income
          </span>
        </div>

        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-red-500 rounded-full"></div>

          <span className="font-medium">
            Expense
          </span>
        </div>
      </div>
    </div>
  )
}

export default ExpenseChart