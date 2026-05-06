"use client";

import { useState } from "react";
import Card from "@/components/ui/Card";
import { Category } from "@/types/dashboard";

const initialData: Category[] = [
  { name: "Food", amount: 250, color: "bg-orange-500" },
  { name: "Travel", amount: 400, color: "bg-blue-500" },
  { name: "Shopping", amount: 150, color: "bg-pink-500" },
  { name: "Bills", amount: 300, color: "bg-green-500" },
];

export default function CategoriesPage() {
  const [data, setData] = useState<Category[]>(initialData);

  const total = data.reduce((sum, item) => sum + item.amount, 0);

  return (
    <main className="min-h-screen bg-black text-white p-6">
      
      {/* Header */}
      <h1 className="text-3xl font-bold mb-2">
        <span className="text-orange-500">Expense</span> Categories
      </h1>
      <p className="text-gray-400 text-sm mb-6">
        Breakdown of your spending by category
      </p>

      {/* Top Stats */}
      <div className="grid md:grid-cols-3 gap-4 mb-6">
        <Card>
          <p className="text-gray-400 text-sm">Total Categories</p>
          <h2 className="text-2xl font-bold">{data.length}</h2>
        </Card>

        <Card>
          <p className="text-gray-400 text-sm">Total Spending</p>
          <h2 className="text-2xl font-bold">${total.toFixed(2)}</h2>
        </Card>

        <Card>
          <p className="text-gray-400 text-sm">Average Spend</p>
          <h2 className="text-2xl font-bold">
            ${(total / data.length).toFixed(2)}
          </h2>
        </Card>
      </div>

      {/* Category List */}
      <Card>
        <h3 className="text-lg font-semibold mb-4">All Categories</h3>

        <div className="flex flex-col gap-5">
          {data.map((item) => {
            const percentage = (item.amount / total) * 100;

            return (
              <div key={item.name}>
                {/* Top Row */}
                <div className="flex justify-between text-sm mb-1">
                  <span>{item.name}</span>
                  <span className="font-semibold">
                    ${item.amount.toFixed(2)}
                  </span>
                </div>

                {/* Progress Bar */}
                <div className="w-full h-2 bg-gray-800 rounded-full">
                  <div
                    className={`h-2 rounded-full ${item.color}`}
                    style={{ width: `${percentage}%` }}
                  />
                </div>

                <p className="text-xs text-gray-500 mt-1">
                  {percentage.toFixed(1)}% of total spending
                </p>
              </div>
            );
          })}
        </div>
      </Card>
    </main>
  );
}