import React from "react";

const ProductSkeleton = () => {
  return (
    <div className="flex flex-col relative pb-[16px]">
      <div className="h-[200px] sm:h-[298px] bg-gray-200 animate-pulse rounded-[13px] sm:rounded-[20px]" />
    </div>
  );
};

export default ProductSkeleton;
