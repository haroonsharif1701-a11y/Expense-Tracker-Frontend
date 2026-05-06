import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
};

export default function Button({ children, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className="w-full bg-orange-500 hover:bg-orange-600 p-3 rounded-xl font-semibold"
    >
      {children}
    </button>
  );
}