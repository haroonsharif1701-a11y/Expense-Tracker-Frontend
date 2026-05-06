import React from "react";

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export default function Input(props: InputProps) {
  return (
    <input
      {...props}
      className="w-full p-3 rounded-xl bg-gray-800 text-white outline-none border border-gray-700"
    />
  );
}