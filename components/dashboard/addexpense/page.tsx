"use client";

import { useState } from "react";
import Card from "@/components/ui/Card";
import useExpense from "@/hooks/useExpense";
import { Expense } from "@/types/expense";

export default function AddExpensePage() {
  const { addExpense } = useExpense();

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Food & Dining");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!title.trim() || Number(amount) <= 0) return;

    const newExpense: Expense = {
      id: crypto.randomUUID(),
      title: title.trim(),
      amount: Number(amount),
      category,
      date: new Date().toISOString(),
    };

    addExpense(newExpense);

    setTitle("");
    setAmount("");
    setCategory("Food & Dining");
  };

  return (
    <main className="min-h-screen bg-black text-white p-6">
      {/* PAGE TITLE */}
      <div className="mb-6 mt-4">
        <h1 className="text-3xl font-bold">
          <span className="text-orange-500">Add</span> Expense
        </h1>
        <p className="text-sm text-gray-400">
          Quickly add your daily spending
        </p>
      </div>

      {/* CENTER FORM */}
      <div className="max-w-xl mx-auto">
        <Card>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">

            {/* TITLE */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs text-gray-400">Title</label>
              <input
                className="rounded-xl border border-gray-700 bg-gray-800 px-3 py-2 text-white"
                placeholder="e.g. Coffee, Uber, Shopping"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            {/* AMOUNT */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs text-gray-400">Amount</label>
              <input
                type="number"
                className="rounded-xl border border-gray-700 bg-gray-800 px-3 py-2 text-white"
                placeholder="0.00"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>

            {/* CATEGORY */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs text-gray-400">Category</label>
              <select
                className="rounded-xl border border-gray-700 bg-gray-800 px-3 py-2 text-white"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option>Food & Dining</option>
                <option>Transport</option>
                <option>Shopping</option>
                <option>Entertainment</option>
                <option>Bills & Utilities</option>
                <option>Health</option>
              </select>
            </div>

            {/* SUBMIT */}
            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 transition rounded-xl py-2 font-semibold mt-2"
            >
              + Add Expense
            </button>

          </form>
        </Card>
      </div>
    </main>
  );
}