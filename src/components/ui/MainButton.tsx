"use client";
import { cn } from "@/utils";
import { HTMLAttributes } from "react";

type MainButtonProps = {
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
} & HTMLAttributes<HTMLButtonElement>;

export default function MainButton({
  className,
  children,
  disabled,
  ...props
}: MainButtonProps) {
  return (
    <button
      disabled={disabled}
      {...props}
      className={cn(
        "main__button text-white capitalize shadow-sm font-bold tracking-wide leading-9 p-[12px_45px] rounded-[20px] border-primary bg-primary transition-colors duration-300 hover:bg-transparent border hover:text-primary",
        className
      )}
    >
      {children}
    </button>
  );
}
