import Card from "@/components/ui/Card";
import { StatsItem } from "@/types/dashboard";

type Props = {
  item: StatsItem;
};

export default function StatsCard({ item }: Props) {
  return (
    <Card className="flex flex-col justify-between">
      <div className="flex justify-between items-center">
        <span className="text-lg">{item.icon ?? "💰"}</span>

        {item.change !== 0 && (
  <span
    className={`text-xs px-2 py-1 rounded ${
      item.change > 0
        ? "bg-green-900 text-green-400"
        : "bg-red-900 text-red-400"
    }`}
  >
    {item.change > 0 ? "↑" : "↓"} {Math.abs(item.change)}%
  </span>
)}
      </div>

      <div>
        <p className="text-gray-400 text-sm">{item.title}</p>
        <h2 className="text-2xl font-bold">{item.value}</h2>
        <p className="text-xs text-gray-500">{item.subtitle}</p>
      </div>
    </Card>
  );
}