import Card from "@/components/ui/Card";
import { Category } from "@/types/dashboard";

type Props = {
  data: Category[];
};

export default function CategoryList({ data }: Props) {
  const total = data.reduce((sum, item) => sum + item.amount, 0);

  return (
    <Card>
      <h3 className="text-lg font-semibold mb-4">By Category</h3>

      <div className="flex flex-col gap-4">
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
            </div>
          );
        })}
      </div>
    </Card>
  );
}