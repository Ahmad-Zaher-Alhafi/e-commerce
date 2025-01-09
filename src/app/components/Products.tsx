import React from "react";
import Product from "@/app/components/Product";
import { getProducts } from "../../../DB/productController";
import { Product as ProductType } from "@prisma/client"; // Import your Product type from Prisma
import Button from "./NavigationButton";

const Products = async ({ title }: { title: string }) => {
  const products = await getProducts();

  return (
    <div className={"flex flex-col gap-[32px] sm:gap-[55px] items-center"}>
      <span className={"font-integral text-[clamp(32px,4vw,48px)] font-bold"}>
        {title}
      </span>

      <div
        className={"flex flex-col gap-[24px] sm:gap-[36px] items-center w-full"}
      >
        <div
          className={
            "grid grid-flow-col auto-cols-[minmax(198px,1fr)] sm:auto-cols-[minmax(295px,1fr)] gap-[16px] sm:gap-[20px] px-customPaddingX w-full overflow-auto"
          }
        >
          {products?.map((product: ProductType) => (
            <Product key={product.id} product={product}></Product>
          ))}
        </div>

        <Button className={"secondary-button"}>View All</Button>
      </div>
    </div>
  );
};

export default Products;
