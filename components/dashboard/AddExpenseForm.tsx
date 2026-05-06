"use client";

import { useState } from "react";
import Card from "@/components/ui/Card";
import { Expense } from "@/types/expense";

type Props = {
  onAdd: (expense: Expense) => void;
};

export default function AddExpenseForm({ onAdd }: Props) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Food & Dining");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!title.trim() || Number(amount) <= 0) return;

    onAdd({
      id: crypto.randomUUID(),
      title: title.trim(),
      amount: Number(amount),
      category,
      date: new Date().toISOString(),
    });

    setTitle("");
    setAmount("");
    setCategory("Food & Dining");
  };

  return (
    <Card>
     <form onSubmit={handleSubmit} className="flex flex-col gap-4">
  {/* Title */}
  <div className="flex flex-col gap-1.5">
    <label className="text-xs text-gray-400">Title</label>
    <input
      className="rounded-xl border border-gray-700 bg-gray-800 px-3 py-2 text-white"
      placeholder="e.g. Coffee Shop"
      value={title}
      onChange={(e) => setTitle(e.target.value)}
    />
  </div>

  {/* Amount */}
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

  {/* Category */}
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

  {/* Submit */}
  <button
    type="submit"
    className="bg-orange-500 hover:bg-orange-600 transition rounded-xl py-2 font-semibold"
  >
    + Add Expense
  </button>
</form>
    </Card>
  );
}