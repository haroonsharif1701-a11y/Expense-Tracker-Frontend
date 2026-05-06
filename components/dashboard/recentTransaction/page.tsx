"use client";
import Card from "@/components/ui/Card";
import useExpense from "@/hooks/useExpense";
import RecentTransactions from "@/components/dashboard/RecentTransaction";

export default function RecentPage() {
  const { expenses, deleteExpense } = useExpense();

  return (
    <main className="min-h-screen bg-black text-white p-6">

      {/* PAGE TITLE */}
      <div className="mb-6 mt-4">
        <h1 className="text-3xl font-bold">
          <span className="text-orange-500">Recent</span> Transactions
        </h1>
        <p className="text-sm text-gray-400">
          Track all your latest expenses in one place
        </p>
      </div>

      {/* STATS ROW */}
      <div className="grid md:grid-cols-3 gap-4 mb-6">
        <Card>
          <p className="text-gray-400 text-sm">Total Transactions</p>
          <h2 className="text-2xl font-bold">{expenses.length}</h2>
        </Card>

        <Card>
          <p className="text-gray-400 text-sm">Total Spent</p>
          <h2 className="text-2xl font-bold">
            $
            {expenses
              .reduce((sum, item) => sum + Number(item.amount), 0)
              .toFixed(2)}
          </h2>
        </Card>

        <Card>
          <p className="text-gray-400 text-sm">Average Expense</p>
          <h2 className="text-2xl font-bold">
            $
            {expenses.length
              ? (
                  expenses.reduce(
                    (sum, item) => sum + Number(item.amount),
                    0
                  ) / expenses.length
                ).toFixed(2)
              : "0.00"}
          </h2>
        </Card>
      </div>

      {/* MAIN TRANSACTIONS CARD */}
      <div className="max-w-4xl mx-auto">
        <RecentTransactions
          data={expenses}
          onDelete={deleteExpense}
        />
      </div>
    </main>
  );
}