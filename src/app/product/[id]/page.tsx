import React, { Suspense } from "react";
import { getProductById } from "../../../../DB/productController";
import Image from "next/image";
import Rate from "@/app/components/Rate";
import Review from "@/app/components/Review";
import Products from "@/app/components/Products";
import ProductsSkeleton from "@/app/components/ProductsSkeleton";

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
    <div className="flex flex-col custom-paddingX sm:max-xl:px-[2%] items-center gap-[50px]">
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-[20px] justify-between">
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
                "h-[106px] max-w-[111px] lg:h-[168px] lg:max-w-[252px] rounded-[13px] sm:rounded-[20px] border-2 border-[#F0EEED] p-[10px]"
              }
            />
            <Image
              width={152}
              height={168}
              src={product.imageUrl}
              alt="product image"
              unoptimized
              className={
                "h-[106px] max-w-[111px] lg:h-[168px] lg:max-w-[252px] rounded-[13px] sm:rounded-[20px] border-2 border-[#F0EEED] p-[10px]"
              }
            />
            <Image
              width={152}
              height={168}
              src={product.imageUrl}
              alt="product image"
              unoptimized
              className={
                "h-[106px] max-w-[111px] lg:h-[168px] lg:max-w-[252px] rounded-[13px] sm:rounded-[20px] border-2 border-[#F0EEED] p-[10px]"
              }
            />
          </div>
        </div>
        <div className="flex flex-col gap-[12px] justify-between">
          <span
            className={
              "font-integral font-bold text-[24px] sm:text-[40px] leading-[24px] sm:leading-[38px]"
            }
          >
            {name}
          </span>
          <Rate rate={rate} showRateNumber={true}></Rate>
          <div className={"flex gap-[5px] sm:gap-[12px] items-center"}>
            <span
              className={"font-satoshi font-bold text-[24px] sm:text-[32px]"}
            >
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
          <div className="flex flex-wrap gap-[16px] overflow-auto sm:max-h-[112px]">
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

          <hr className={"custom-divider"}></hr>

          <div className="flex gap-[12px] sm:gap-[20px]">
            <div className="flex justify-between items-center gap-[18px] bg-[#F0F0F0] py-[10px] lg:py-[15px] px-[22px] rounded-[62px] flex-1 min-w-[150px] max-w-[236px]">
              <img
                src="/assets/svgs/minusIcon.svg"
                alt="plus icon"
                className="w-[25px] h-[25px]"
              />
              <span className="font-satoshi font-medium text-[20px]">1</span>
              <img
                src="/assets/svgs/plusIcon.svg"
                alt="plus icon"
                className="w-[25px] h-[25px]"
              />
            </div>
            <button className="primary-button flex-1 flex-grow-[3] text-[14px] !py-[10px] lg:!py-[15px]">
              Add to cart
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-full items-center">
        <div className="flex justify-between w-full">
          <button className="font-satoshi font-medium sm:text-[20px] border-b-[2px]  flex-1 opacity-60 hover:opacity-100 hover:border-black pb-[20px] lg:pb-[24px]">
            Product Details
          </button>
          <button className="font-satoshi font-medium sm:text-[20px] border-b-[2px] flex-1 opacity-60 hover:opacity-100 hover:border-black pb-[20px] lg:pb-[24px]">
            Rating and Reviews
          </button>
          <button className="font-satoshi font-medium sm:text-[20px] border-b-[2px] flex-1 opacity-60 hover:opacity-100 hover:border-black pb-[20px] lg:pb-[24px]">
            FAQ
          </button>
        </div>

        <div className="flex flex-col gap-[27px] items-center w-full">
          <div className="flex justify-between pt-[20px] items-center w-full">
            <div className="flex gap-[6px] flex-1 items-center">
              <span className="font-satoshi font-bold text-[20px] lg:text-[24px]">
                All Reviews
              </span>
              <span className="font-satoshi text-[14px] opacity-60">(0)</span>
            </div>
            <div className="flex gap-[8px] flex-1 items-center justify-end">
              <img
                src="/assets/svgs/filterIcon.svg"
                alt="filter icon"
                className="bg-[#F0F0F0] p-[12px] rounded-full w-[40px] h-[40px] lg:w-[48px] lg:h-[48px]"
              />
              <button className="primary-button text-[14px] !py-[10px] lg:!py-[15px] max-w-[166px]">
                Write a Review
              </button>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 flex-wrap gap-[20px] w-full">
            <Review></Review>
            <Review></Review>
            <Review></Review>
            <Review></Review>
            <Review></Review>
            <Review></Review>
          </div>

          <button className="secondary-button">Load More Reviews</button>
        </div>
      </div>

      <div className="w-full">
        <Suspense
          fallback={
            <ProductsSkeleton title="You might also like"></ProductsSkeleton>
          }
        >
          <Products title="You might also like"></Products>
        </Suspense>
      </div>
    </div>
  );
};

export default page;
