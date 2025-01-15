import React from "react";
import Product from "@/app/components/Product";
import { getProducts } from "../../../DB/productController";
import { Product as ProductType } from "@prisma/client"; // Import your Product type from Prisma
import Button from "./NavigationButton";
import AutoScroll from "./AutoScroll";
import * as motion from "motion/react-client";

const Products = async ({ title }: { title: string }) => {
  const products = await getProducts();

  return (
    <motion.div
      whileInView={{ y: [-40, 0] }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className={"flex flex-col gap-[32px] sm:gap-[55px] items-center"}
    >
      <span className={"font-integral text-[clamp(32px,4vw,48px)] font-bold"}>
        {title}
      </span>

      <div
        className={"flex flex-col gap-[24px] sm:gap-[36px] items-center w-full"}
      >
        <AutoScroll>
          <div className="grid grid-flow-col auto-cols-[minmax(198px,1fr)] sm:auto-cols-[minmax(295px,1fr)] gap-[16px] sm:gap-[20px] px-customPaddingX w-full">
            {products?.map((product: ProductType) => (
              <Product key={product.id} product={product}></Product>
            ))}
          </div>
        </AutoScroll>

        <Button className={"secondary-button"}>View All</Button>
      </div>
    </motion.div>
  );
};

export default Products;
