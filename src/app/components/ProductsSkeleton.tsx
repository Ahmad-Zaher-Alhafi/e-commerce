import React from "react";
import ProductSkeleton from "./ProductSkeleton";

const ProductsSkeleton = ({ title }: { title: string }) => {
  return (
    <div className={"flex flex-col gap-[32px] sm:gap-[55px] items-center"}>
      <span className={"font-integral text-[clamp(32px,4vw,48px)] font-bold"}>
        {title}
      </span>

      <div
        className={
          "flex flex-col gap-[24px] sm:gap-[36px] items-center w-full custom-paddingX"
        }
      >
        <div
          className={
            "grid grid-flow-col auto-cols-[minmax(198px,1fr)] sm:auto-cols-[minmax(295px,1fr)] gap-[16px] sm:gap-[20px] px-customPaddingX w-full overflow-auto"
          }
        >
          <ProductSkeleton></ProductSkeleton>
          <ProductSkeleton></ProductSkeleton>
          <ProductSkeleton></ProductSkeleton>
          <ProductSkeleton></ProductSkeleton>
          <ProductSkeleton></ProductSkeleton>
          <ProductSkeleton></ProductSkeleton>
        </div>

        <button className={"secondary-button"}>View all</button>
      </div>
    </div>
  );
};

export default ProductsSkeleton;
