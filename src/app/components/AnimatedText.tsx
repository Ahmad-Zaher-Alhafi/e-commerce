"use client";
import { animate, motion } from "motion/react";
import React, { useEffect, useState } from "react";

const AnimatedText = ({
  from = 0,
  to,
  duration = 1,
}: {
  from?: number;
  to: number;
  duration?: number;
}) => {
  const [count, setCount] = useState(from);
  const numDigits = to.toString().length;

  useEffect(() => {
    const controls = animate(from, to, {
      duration,
      onUpdate(value) {
        setCount(Math.floor(value)); // Round to the nearest whole number
      },
    });

    return () => controls.stop(); // Clean up animation on unmount
  }, [from, to, duration]);

  const formattedCount = count.toLocaleString().padStart(numDigits, "0"); // Pad to 7 digits

  return (
    <motion.div
      className="font-satoshi font-bold text-2xl xl:text-[40px]"
      style={{
        fontVariantNumeric: "tabular-nums", // Ensures the numbers are monospace
      }}
    >
      {formattedCount}+
    </motion.div>
  );
};

export default AnimatedText;
