"use client";

import { useRouter } from "next/navigation";
import React from "react";

const Category = ({
  minImgUrl,
  minWidth,
  maxImgUrl,
  maxWidth,
}: {
  minImgUrl: string;
  minWidth: number;
  maxImgUrl: string;
  maxWidth: number;
}) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/products/all`);
  };

  return (
    <picture
      className="cursor-pointer border-2 rounded-[20px] hover:border-black"
      onClick={handleClick}
    >
      <source srcSet={maxImgUrl} media={`(min-width: ${minWidth}px)`} />
      <source srcSet={minImgUrl} media={`(max-width: ${maxWidth}px)`} />
      <img src={minImgUrl} alt="casual category image" />
    </picture>
  );
};

export default Category;
