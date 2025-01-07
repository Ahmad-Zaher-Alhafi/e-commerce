"use client";

import { useRouter } from "next/navigation";
import React from "react";

const Cart = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/cart");
  };

  return (
    <div>
      <button className="flex items-center" onClick={handleClick}>
        <img src="/assets/svgs/cart.svg" alt="cart icon" />
      </button>
    </div>
  );
};

export default Cart;
