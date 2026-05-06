import Card from "@/components/ui/Card";

type DayData = {
  day: string;
  amount: number;
};

const data: DayData[] = [
  { day: "Sat", amount: 16 },
  { day: "Sun", amount: 110 },
  { day: "Mon", amount: 4 },
  { day: "Tue", amount: 4 },
  { day: "Wed", amount: 4 },
  { day: "Thu", amount: 4 },
  { day: "Fri", amount: 10 },
];

export default function WeeklyChart() {
  const max = Math.max(...data.map((d) => d.amount));

  return (
    <Card>
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">Weekly Overview</h3>
        <span className="text-xs text-gray-400">Last 7 days</span>
      </div>

      {/* Chart */}
      <div className="flex items-end justify-between gap-2 h-[140px]">
        {data.map((item, i) => {
          const height = (item.amount / max) * 100;

          return (
            <div
              key={i}
              className="flex flex-1 flex-col items-center gap-2"
            >
              {/* Amount */}
              <span className="text-xs text-gray-400">
                {item.amount > 0 ? `$${item.amount}` : ""}
              </span>

              {/* Bar container */}
              <div className="relative w-full flex justify-center h-[100px]">
                <div
                  className={`w-6 rounded-lg transition-all duration-700 ${
                    i === data.length - 1
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

              {/* Day */}
              <span
                className={`text-xs ${
                  i === data.length - 1
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
  );
}