import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

export default function Card({ children, className = "" }: Props) {
  return (
    <div
      className={`bg-[#111] border border-gray-800 rounded-2xl p-5 shadow-md ${className}`}
    >
      {children}
    </div>
  );
}