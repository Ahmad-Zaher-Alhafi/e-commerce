"use client";
import { motion } from "motion/react";
import { useRouter } from "next/navigation";
import React from "react";

const Button = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/products/all`);
  };

  return (
    <motion.button
      className={className}
      onClick={handleClick}
      animate={{ y: [-20, 0], opacity: [0, 1] }}
      transition={{ duration: 1 }}
    >
      {children}
    </motion.button>
  );
};

export default Button;
