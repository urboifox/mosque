"use client";
import { cn } from "@/utils";
import { HTMLAttributes } from "react";

type MainButtonProps = {
  children: React.ReactNode;
  className?: string;
} & HTMLAttributes<HTMLButtonElement>;

export default function MainButton({
  className,
  children,
  ...props
}: MainButtonProps) {
  return (
    <button
      {...props}
      className={cn(
        " text-white capitalize shadow-sm font-bold tracking-wide leading-9 p-[12px_45px] rounded-[20px] border-primary bg-primary transition-colors duration-300 hover:bg-transparent border hover:text-primary",
        className
      )}
    >
      {children}
    </button>
  );
}
