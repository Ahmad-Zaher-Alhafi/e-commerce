import React from "react";
import { getProductById } from "../../../../DB/productController";
import Image from "next/image";
import Rate from "@/app/components/Rate";

const page = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;
  const product = await getProductById(Number(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  const { name, rate, salePercent, price, description, colors, sizes } =
    product;

  const finalPrice = salePercent
    ? Math.floor(price - (price * salePercent) / 100)
    : price;

  return (
    <div className="flex flex-col lg:flex-row custom-paddingX items-center gap-[20px] justify-between">
      <div className="flex flex-col lg:flex-row-reverse justify-end gap-[12px]">
        <div>
          <Image
            width={444}
            height={530}
            src={product.imageUrl}
            alt="product image"
            unoptimized
            className={
              "h-[290px] max-w-[358px] sm:h-[530px] sm:max-w-[444px] rounded-[13px] sm:rounded-[20px] border-2 border-[#F0EEED] p-[10px]"
            }
          />
        </div>

        <div className="flex flex-row lg:flex-col justify-between">
          <Image
            width={152}
            height={168}
            src={product.imageUrl}
            alt="product image"
            unoptimized
            className={
              "h-[106px] max-w-[111px] sm:h-[168px] sm:max-w-[252px] rounded-[13px] sm:rounded-[20px] border-2 border-[#F0EEED] p-[10px]"
            }
          />
          <Image
            width={152}
            height={168}
            src={product.imageUrl}
            alt="product image"
            unoptimized
            className={
              "h-[106px] max-w-[111px] sm:h-[168px] sm:max-w-[252px] rounded-[13px] sm:rounded-[20px] border-2 border-[#F0EEED] p-[10px]"
            }
          />
          <Image
            width={152}
            height={168}
            src={product.imageUrl}
            alt="product image"
            unoptimized
            className={
              "h-[106px] max-w-[111px] sm:h-[168px] sm:max-w-[252px] rounded-[13px] sm:rounded-[20px] border-2 border-[#F0EEED] p-[10px]"
            }
          />
        </div>
      </div>

      <div className="flex flex-col gap-[12px] h-[290px] sm:h-[530px] justify-between">
        <span
          className={
            "font-integral font-bold text-[24px] sm:text-[40px] leading-[clamp(28px,4vw,40px)] ellipsis-text"
          }
        >
          {name}
        </span>

        <Rate rate={rate} showRateNumber={true}></Rate>

        <div className={"flex gap-[5px] sm:gap-[12px] items-center"}>
          <span className={"font-satoshi font-bold text-[24px] sm:text-[32px]"}>
            ${finalPrice}
          </span>

          {salePercent && (
            <div className={"flex gap-[5px] sm:gap-[12px] items-center"}>
              <span
                className={`font-satoshi font-bold text-[24px] sm:text-[32px] ${
                  salePercent && "line-through"
                } ${salePercent && "opacity-40"}`}
              >
                ${price}
              </span>
              <span
                className={
                  "font-satoshi font-bold text-[14px] sm:text-[16px] text-[#FF3333] bg-[#FF3333] bg-opacity-10 px-[8px] py-[3px] rounded-full"
                }
              >
                {salePercent}%
              </span>
            </div>
          )}
        </div>

        <p className="font-satoshi text-[14px] sm:text-[16px] opacity-60 ellipsis-text">
          {description}
        </p>

        <hr className={"custom-divider"}></hr>

        <span className="font-satoshi text-[14px] sm:text-[16px] opacity-60">
          Select Color
        </span>
        <div className="flex gap-[16px]">
          {colors.map((color) => (
            <button
              key={color}
              style={{ backgroundColor: color }}
              className={`font-satoshi text-[14px] sm:text-[16px] opacity-60 rounded-full h-[39px] w-[39px]`}
            ></button>
          ))}
        </div>

        <hr className={"custom-divider"}></hr>

        <span className="font-satoshi text-[14px] sm:text-[16px] opacity-60">
          Choose Size
        </span>
        <div className="flex flex-wrap gap-[16px] overflow-auto max-h-[112px]">
          {sizes.map((size) => (
            <button
              key={Math.random()}
              style={{ backgroundColor: size }}
              className={`font-satoshi text-[14px] sm:text-[16px] text-nowrap text-white rounded-full py-[10px] sm:py-[12px] px-[5%] bg-black`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
