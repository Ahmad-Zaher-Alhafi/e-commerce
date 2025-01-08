"use client";

import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";

const CartProduct = ({
  productId,
  name = "Product",
  price = 232,
  imgUrl = "https://t3.ftcdn.net/jpg/03/34/79/68/360_F_334796865_VVTjg49nbLgQPG6rgKDjVqSb5XUhBVsW.jpg",
  size = "small",
  color,
}: {
  productId: number;
  name: string;
  price: number;
  imgUrl: string;
  size: string;
  color: string;
}) => {
  const router = useRouter();

  const handleShowProduct = () => {
    router.push(`/product/${productId}`);
  };

  return (
    <div className="flex gap-[14px]">
      <Image
        width={124}
        height={124}
        src={imgUrl}
        unoptimized
        alt="product image"
        className="w-[124px] h-[124px] rounded-[10px] border-2 border-[#F0EEED] p-[10px] hover:bg-[#F0EEED] cursor-pointer"
        onClick={handleShowProduct}
      />

      <div className="flex flex-col justify-between flex-1">
        <div className="flex justify-between items-center font-satoshi font-bold text-[20px]">
          {name}
          <img
            src="/assets/svgs/trashIcon.svg"
            alt="trash icon"
            className="w-[16px] h-[16px]"
          />
        </div>

        <div className="font-satoshi text-[12px]">
          Size: <span className="opacity-60">{size}</span>
        </div>
        <div className="flex items-center gap-[10px] font-satoshi text-[12px]">
          Color:
          <span
            className=" w-[15px] h-[15px] sm:w-[24px] sm:h-[24px] inline-block rounded-full"
            style={{ backgroundColor: color }}
          ></span>
        </div>

        <div className="flex items-center justify-between">
          <span className="font-satoshi font-bold text-[20px]">${price}</span>

          <div className="flex justify-between items-center gap-[20px] bg-[#F0F0F0] p-[10px] rounded-[62px] min-w-[44px] max-w-[105px] sm:max-w-[125px] flex-1">
            <img
              src="/assets/svgs/minusIcon.svg"
              alt="plus icon"
              className="w-[12.5px] h-[12.5px]"
            />
            <span className="font-satoshi font-medium text-[14px]">1</span>
            <img
              src="/assets/svgs/plusIcon.svg"
              alt="plus icon"
              className="w-[12.5px] h-[12.5px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
