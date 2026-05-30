"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GoldButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "outline";
  onClick?: () => void;
  href?: string;
  className?: string;
  type?: "button" | "submit";
}

export default function GoldButton({
  children,
  variant = "primary",
  onClick,
  href,
  className,
  type = "button",
}: GoldButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-body font-medium text-sm tracking-wide transition-all duration-300 cursor-pointer";

  const variants = {
    primary:
      "bg-gradient-to-r from-[#FACC15] via-[#F59E0B] to-[#D97706] text-[#020617] hover:shadow-[0_0_28px_rgba(250,204,21,0.4)] hover:scale-[1.04] active:scale-[0.97]",
    outline:
      "backdrop-blur-md bg-[rgba(2,6,23,0.25)] border border-[rgba(250,204,21,0.45)] text-[#FACC15] hover:border-[rgba(250,204,21,0.75)] hover:bg-[rgba(2,6,23,0.4)] hover:shadow-[0_0_20px_rgba(250,204,21,0.2)] hover:scale-[1.04] active:scale-[0.97]",
  };

  const classes = cn(base, variants[variant], className);

  if (href) {
    return (
      <motion.a href={href} className={classes} whileTap={{ scale: 0.96 }}>
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={classes}
      whileTap={{ scale: 0.96 }}
    >
      {children}
    </motion.button>
  );
}
