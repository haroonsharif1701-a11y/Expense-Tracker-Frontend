import React from "react";

type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
  options: string[];
};

export default function Select({ options, ...props }: SelectProps) {
  return (
    <select
      {...props}
      className="w-full p-3 rounded-xl bg-gray-800 text-white border border-gray-700"
    >
      {options.map((opt, i) => (
        <option key={i} value={opt}>
          {opt}
        </option>
      ))}
    </select>
  );
}