import { StatsItem, Category } from "@/types/dashboard";

export const statsData: StatsItem[] = [
  {
    title: "Total Spent",
    value: "$465.28",
    change: -12,
    subtitle: "All time",
    icon: "💰",
  },
  {
    title: "This Month",
    value: "$465.28",
    change: 8,
    subtitle: "April",
    icon: "📅",
  },
  {
    title: "Daily Average",
    value: "$66.47",
    change: 0,
    subtitle: "Last 7 days",
    icon: "📊",
  },
  {
    title: "Transactions",
    value: "8",
    change: 0,
    subtitle: "Total entries",
    icon: "🧾",
  },
];
export const categoryData: Category[] = [
  { name: "Food & Dining", amount: 130.5, color: "bg-red-500" },
  { name: "Transport", amount: 76.3, color: "bg-blue-500" },
  { name: "Shopping", amount: 89.99, color: "bg-purple-500" },
  { name: "Entertainment", amount: 15.99, color: "bg-yellow-500" },
  { name: "Bills & Utilities", amount: 120, color: "bg-green-500" },
  { name: "Health", amount: 32.5, color: "bg-pink-500" },
];