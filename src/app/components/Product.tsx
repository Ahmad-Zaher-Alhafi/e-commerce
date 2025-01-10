"use client";

import React from "react";
import Rate from "@/app/components/Rate";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Product as ProductType } from "@prisma/client";

const Product = ({
  product,
  width = "w-[295px]",
  height = "h-[200px] sm:h-[298px]",
}: {
  product: ProductType;
  width?: string;
  height?: string;
}) => {
  const {
    id,
    name = "Product",
    rate = 4.5,
    price = 232,
    imageUrl = "https://t3.ftcdn.net/jpg/03/34/79/68/360_F_334796865_VVTjg49nbLgQPG6rgKDjVqSb5XUhBVsW.jpg",
    salePercent = 20,
  } = product;

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
        width={200}
        height={298}
        src={imageUrl}
        alt="product image"
        unoptimized
        className={`${height} ${width} rounded-[13px] sm:rounded-[20px] border-2 border-[#F0EEED] p-[10px]`}
      />

      <span
        className={
          "font-satoshi font-bold text-[16px] sm:text-[20px] ellipsis-text"
        }
      >
        {name}
      </span>

      <Rate rate={rate} showRateNumber={true}></Rate>

      <div className={"flex gap-[5px] sm:gap-[12px] items-center"}>
        <span className={"font-satoshi font-bold text-[20px] sm:text-[24px]"}>
          ${finalPrice}
        </span>

        {salePercent != undefined && salePercent > 0 && (
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
