export default function ProgressBar({ value }: { value: number }) {
  return (
    <div className="w-full bg-gray-800 h-2 rounded-full">
      <div
        className="bg-white h-2 rounded-full"
        style={{ width: `${value}%` }}
      />
    </div>
  );
}