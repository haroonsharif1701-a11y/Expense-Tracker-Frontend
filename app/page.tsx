"use client";

import Header from "@/components/dashboard/Header";
import StatsCard from "@/components/dashboard/StatsCard";
import AddExpenseForm from "@/components/dashboard/AddExpenseForm";
import RecentTransactions from "@/components/dashboard/RecentTransaction";
import useExpense from "@/hooks/useExpense";  
import { statsData } from "@/data/dashboardData";
import CategoryList from "@/components/dashboard/CategoryList";
import { categoryData } from "@/data/dashboardData";
import WeeklyChart from "@/components/dashboard/WeeklyChart";

export default function Home() {
  const { expenses, addExpense, deleteExpense } = useExpense();

  return (
    <main className="p-6 bg-black min-h-screen text-white">
      <Header />

      <div className="grid md:grid-cols-4 gap-4 mb-6">
        {statsData.map((item, i) => (
          <StatsCard key={i} item={item} />
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-6 mt-6">
        <WeeklyChart />
        <CategoryList data={categoryData} />
      </div>

      <div className="grid md:grid-cols-3 gap-6 mt-6">
        <AddExpenseForm onAdd={addExpense} />

        <div className="md:col-span-2">
      <RecentTransactions
  data={expenses}
  onDelete={deleteExpense}
/>
        </div>
      </div>
    </main>
  );
}