"use client";

import React from "react";
import Rate from "@/app/components/Rate";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Product = ({
  id,
  name = "Product",
  rate = 4.5,
  price = 232,
  imgUrl = "https://t3.ftcdn.net/jpg/03/34/79/68/360_F_334796865_VVTjg49nbLgQPG6rgKDjVqSb5XUhBVsW.jpg",
  salePercent = 20,
}: {
  id: number;
  name: string;
  rate: number;
  price: number;
  imgUrl: string;
  salePercent?: number | null;
}) => {
  const finalPrice = salePercent
    ? Math.floor(price - (price * salePercent) / 100)
    : price;

  const router = useRouter();

  const handleProductClick = () => {
    router.push(`/product/${id}`);
  };

  return (
    <div
      onClick={handleProductClick}
      className={
        "flex flex-col hover:cursor-pointer hover:bg-[#F0EEED] rounded-[13px]"
      }
    >
      <Image
        width={295}
        height={200}
        src={imgUrl}
        alt="product image"
        unoptimized
        className={
          "h-[200px] sm:h-[298px] rounded-[13px] sm:rounded-[20px] border-2 border-[#F0EEED] p-[20px]"
        }
      />

      <span className={"font-satoshi font-bold text-[16px] sm:text-[20px]"}>
        {name}
      </span>

      <Rate rate={rate} showRateNumber={true}></Rate>

      <div className={"flex gap-[5px] sm:gap-[12px] items-center"}>
        <span className={"font-satoshi font-bold text-[20px] sm:text-[24px]"}>
          ${finalPrice}
        </span>

        {salePercent && (
          <div className={"flex gap-[5px] sm:gap-[12px] items-center"}>
            <span
              className={`font-satoshi font-bold text-[20px] sm:text-[24px] ${
                salePercent && "line-through"
              } ${salePercent && "opacity-40"}`}
            >
              ${price}
            </span>
            <span
              className={
                "font-satoshi font-bold text-[10px] sm:text-[12px] text-[#FF3333] bg-[#FF3333] bg-opacity-10 px-[8px] py-[3px] rounded-full"
              }
            >
              {salePercent}%
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
export default Product;
