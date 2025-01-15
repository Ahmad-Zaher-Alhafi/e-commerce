"use client";

import { motion } from "motion/react";
import { useRouter } from "next/navigation";
import React from "react";

const Category = ({
  minImgUrl,
  minWidth,
  maxImgUrl,
  maxWidth,
  direction,
}: {
  minImgUrl: string;
  minWidth: number;
  maxImgUrl: string;
  maxWidth: number;
  direction: number;
}) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/products/all`);
  };

  return (
    <motion.picture
      initial={{ scale: 1, x: 60 * direction }}
      whileHover={{ scale: 1.05 }}
      whileInView={{ x: 0 }}
      transition={{ duration: 1 }}
      className="cursor-pointer border-2 rounded-[20px] hover:border-black"
      onClick={handleClick}
    >
      <source srcSet={maxImgUrl} media={`(min-width: ${minWidth}px)`} />
      <source srcSet={minImgUrl} media={`(max-width: ${maxWidth}px)`} />
      <img src={minImgUrl} alt="casual category image" />
    </motion.picture>
  );
};

export default Category;
