"use client";

import Card from "@/components/ui/Card";
import { Expense } from "@/types/expense";

type Props = {
  data: Expense[];
  onDelete?: (id: string) => void;
};

const categoryIcons: Record<string, string> = {
  "Food & Dining": "🍔",
  Transport: "🚗",
  Shopping: "🛍️",
  Entertainment: "🎬",
  "Bills & Utilities": "💡",
  Health: "💊",
};

/* ------------------ SAFE DATE HELPERS ------------------ */

// stable YYYY-MM-DD format (no timezone mismatch issues)
const formatDateKey = (date: string) => {
  const d = new Date(date);
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

// safe display format (no hydration mismatch)
const formatDisplayDate = (date: string) => {
  const d = new Date(date);
  const month = d.toLocaleString("en-US", { month: "short" });
  const day = d.getDate();
  return `${month} ${day}`;
};

export default function RecentTransactions({ data, onDelete }: Props) {
  console.log("expenses in RecentTransactions:", data);

  /* ------------------ GROUP DATA SAFELY ------------------ */
  const grouped = (data ?? []).reduce(
    (acc: Record<string, Expense[]>, item) => {
      const dateKey = formatDateKey(item.date);

      if (!acc[dateKey]) acc[dateKey] = [];
      acc[dateKey].push(item);

      return acc;
    },
    {}
  );

  const dates = Object.keys(grouped).sort((a, b) => (a < b ? 1 : -1));

  return (
    <Card className="overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">Recent Transactions</h3>
        <span className="text-xs text-gray-400">
          {data?.length ?? 0} items
        </span>
      </div>

      {/* Scrollable List */}
      <div className="flex flex-col gap-4 max-h-[380px] overflow-y-auto pr-1">
        {dates.length === 0 && (
          <p className="text-gray-400 text-sm">No transactions yet</p>
        )}

        {dates.map((date) => (
          <div key={date} className="flex flex-col gap-2">
            {/* Date Header */}
            <p className="text-xs uppercase tracking-wider text-gray-400">
              {formatDisplayDate(date)}
            </p>

            {/* Transactions */}
            {grouped[date].map((item) => (
              <div
                key={item.id}
                className="group flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-gray-800 transition"
              >
                {/* Icon */}
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-800 text-lg">
                  {categoryIcons[item.category] || "💸"}
                </span>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <p className="truncate text-sm font-medium">
                    {item.title}
                  </p>
                  <p className="text-xs text-gray-400">
                    {item.category}
                  </p>
                </div>

                {/* Amount + Delete */}
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold text-red-400">
                    -${Number(item.amount).toFixed(2)}
                  </span>

                  <button
                    onClick={() => onDelete?.(item.id)}
                    className="opacity-0 group-hover:opacity-100 transition text-gray-400 hover:text-red-500"
                  >
                    ✕
                  </button>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </Card>
  );
}