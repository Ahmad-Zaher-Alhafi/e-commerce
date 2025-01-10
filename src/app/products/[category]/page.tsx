import Product from "@/app/components/Product";
import React from "react";
import { getProducts } from "../../../../DB/productController";
import { Product as ProductType } from "@prisma/client";

const page = async ({
  params,
  searchParams,
}: {
  params: { category: string };
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
  const { category } = await params;
  const { search } = await searchParams;

  const products = await getProducts(search, category === "onSale");

  const width = "w-[172px] lg:w-[295px]";
  const height = "h-[174px] lg:h-[298px]";

  return (
    <div className="flex flex-col gap-[24px] custom-paddingX">
      <span className="font-satoshi font-bold text-[22px] sm:text-[28px]">
        {category && `Results of: ${category} category`}
        {search && `, Search: ${search}`}
      </span>

      <div className="grid grid-cols-[repeat(auto-fit,172px)] lg:grid-cols-[repeat(auto-fit,295px)] gridc gap-[14px] lg:gap-[20px]">
        {products?.map((product: ProductType) => (
          <Product
            key={product.id}
            product={product}
            width={width}
            height={height}
          ></Product>
        ))}
      </div>
    </div>
  );
};

export default page;
