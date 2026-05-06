"use client";
import Card from "@/components/ui/Card";
import useExpense from "@/hooks/useExpense";

type DayData = {
  day: string;
  amount: number;
};

export default function WeeklyPage() {
  const { expenses } = useExpense();

  /* ---------------- GROUP EXPENSES BY WEEKDAY ---------------- */
  const getDayName = (date: string) => {
    return new Date(date).toLocaleDateString("en-US", {
      weekday: "short",
    });
  };

  const weeklyData: DayData[] = (() => {
    const map: Record<string, number> = {
      Sun: 0,
      Mon: 0,
      Tue: 0,
      Wed: 0,
      Thu: 0,
      Fri: 0,
      Sat: 0,
    };

    expenses.forEach((exp) => {
      const day = getDayName(exp.date);
      map[day] += Number(exp.amount);
    });

    return Object.entries(map).map(([day, amount]) => ({
      day,
      amount,
    }));
  })();

  const max = Math.max(...weeklyData.map((d) => d.amount), 1);

  const totalSpent = weeklyData.reduce((sum, d) => sum + d.amount, 0);

  return (
    <main className="min-h-screen bg-black text-white p-6">

      {/* TITLE */}
      <div className="mb-6 mt-4">
        <h1 className="text-3xl font-bold">
          <span className="text-orange-500">Weekly</span> Overview
        </h1>
        <p className="text-sm text-gray-400">
          Your spending pattern for the last 7 days
        </p>
      </div>

      {/* STATS */}
      <div className="grid md:grid-cols-3 gap-4 mb-6">
        <Card>
          <p className="text-gray-400 text-sm">Total This Week</p>
          <h2 className="text-2xl font-bold">${totalSpent.toFixed(2)}</h2>
        </Card>

        <Card>
          <p className="text-gray-400 text-sm">Average / Day</p>
          <h2 className="text-2xl font-bold">
            ${(totalSpent / 7).toFixed(2)}
          </h2>
        </Card>

        <Card>
          <p className="text-gray-400 text-sm">Highest Day</p>
          <h2 className="text-2xl font-bold">
            $
            {Math.max(...weeklyData.map((d) => d.amount)).toFixed(2)}
          </h2>
        </Card>
      </div>

      {/* CHART */}
      <Card>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">Weekly Breakdown</h3>
          <span className="text-xs text-gray-400">Last 7 days</span>
        </div>

        <div className="flex items-end justify-between gap-2 h-[180px]">
          {weeklyData.map((item, i) => {
            const height = (item.amount / max) * 100;

            return (
              <div
                key={i}
                className="flex flex-1 flex-col items-center gap-2"
              >
                {/* VALUE */}
                <span className="text-xs text-gray-400">
                  {item.amount > 0 ? `$${item.amount}` : ""}
                </span>

                {/* BAR */}
                <div className="relative w-full flex justify-center h-[120px]">
                  <div
                    className={`w-6 rounded-lg transition-all duration-700 ${
                      item.amount === max && max > 0
                        ? "bg-gradient-to-t from-orange-500 to-orange-400"
                        : "bg-gray-700"
                    }`}
                    style={{
                      height: `${height}%`,
                      position: "absolute",
                      bottom: 0,
                    }}
                  />
                </div>

                {/* DAY */}
                <span
                  className={`text-xs ${
                    item.amount === max && max > 0
                      ? "text-orange-500"
                      : "text-gray-400"
                  }`}
                >
                  {item.day}
                </span>
              </div>
            );
          })}
        </div>
      </Card>
    </main>
  );
}