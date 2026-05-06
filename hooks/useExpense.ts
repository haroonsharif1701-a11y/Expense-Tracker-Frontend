  "use client";

  import { useEffect, useState } from "react";
  import { Expense } from "@/types/expense";

  export default function useExpense() {
    const [expenses, setExpenses] = useState<Expense[]>(() => {
      if (typeof window === "undefined") return [];

      try {
        const stored = localStorage.getItem("expenses");
        return stored ? JSON.parse(stored) : [];
      } catch {
        return [];
      }
    });

    useEffect(() => {
      localStorage.setItem("expenses", JSON.stringify(expenses));
    }, [expenses]);

  const addExpense = (expense: Expense) => {
    console.log("🔥 addExpense CALLED:", expense);

    setExpenses((prev) => {
      const updated = [expense, ...prev];
      console.log("🔥 NEW STATE:", updated);
      return updated;
    });
  };

  const deleteExpense = (id: string) => {
    setExpenses((prev) => prev.filter((e) => e.id !== id));
  };

    return {
      expenses,
      addExpense,
      deleteExpense,
    };
  }