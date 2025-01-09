"use client";
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
    <button className={className} onClick={handleClick}>
      {children}
    </button>
  );
};

export default Button;
