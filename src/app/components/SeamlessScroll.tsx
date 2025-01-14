"use client";
import React from "react";
import { motion } from "motion/react";

const SeamlessScroll = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      className="flex flex-1 justify-between gap-[34px] "
      animate={{
        x: ["-40%", "-4.47%"], // Scroll the track to the left
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      {children}
      {children}
      {children}
      {children}
    </motion.div>
  );
};

export default SeamlessScroll;
