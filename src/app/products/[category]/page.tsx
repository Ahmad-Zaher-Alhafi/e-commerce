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

  const products = await getProducts(search);

  const width = "w-[172px] lg:w-[295px]";
  const height = "h-[174px] lg:h-[298px]";

  return (
    <div className="custom-paddingX grid grid-cols-[repeat(auto-fit,172px)] lg:grid-cols-[repeat(auto-fit,295px)] gridc gap-[14px] lg:gap-[20px] place-content-between">
      {products?.map((product: ProductType) => (
        <Product
          key={product.id}
          product={product}
          width={width}
          height={height}
        ></Product>
      ))}
    </div>
  );
};

export default page;
