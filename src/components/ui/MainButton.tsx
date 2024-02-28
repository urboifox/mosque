"use client";
import { cn } from "@/utils";
import { MotionProps, motion } from "framer-motion";

type MainButtonProps = {
  children: React.ReactNode;
  className?: string;
} & MotionProps;

export default function MainButton({
  className,
  children,
  ...props
}: MainButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.95 }}
      transition={{
        type: "tween",
        duration: 0.2,
      }}
      {...props}
      className={cn(
        "px-6 py-[.4rem] text-white capitalize shadow-sm rounded-lg bg-gradient-to-tr from-blue-200 to-blue-300",
        className
      )}
    >
      {children}
    </motion.button>
  );
}
