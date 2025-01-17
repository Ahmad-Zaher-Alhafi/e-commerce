import { PrismaClient, Product } from "@prisma/client";

export const populateDB = async () => {
  const prisma = new PrismaClient();

  try {
    const productsCount = await prisma.product.count();

    if (productsCount !== 0) return;

    let response = await fetch(
      "https://fakestoreapi.com/products/category/men's clothing"
    );

    if (!response.ok) {
      console.error("Failed to fetch data");
      return;
    }

    let products = await response.json();

    response = await fetch(
      "https://fakestoreapi.com/products/category/women's clothing"
    );

    if (!response.ok) {
      console.error("Failed to fetch data");
      return;
    }

    products = products.concat(await response.json());

    const filteredProducts = products.map(
      ({
        title,
        price,
        image,
        rating,
        description,
      }: {
        title: string;
        price: number;
        image: string;
        rating: { rate: number; count: number };
        description: string;
      }) => ({
        name: title,
        price,
        imageUrl: image,
        rate: rating.rate,
        description,
      })
    );

    const finalProducts = filteredProducts.map((product: Product) => {
      const randomColors = Array.from(
        { length: Math.floor(Math.random() * 3) + 1 },
        () => getRandomHexColor()
      );

      const randomSizes = getSizes(Math.floor(Math.random() * 9) + 1);

      // Ensure colors and sizes are not empty
      product.colors = randomColors.length > 0 ? randomColors : ["#000000"]; // Default to black if empty
      product.sizes = randomSizes.length > 0 ? randomSizes : ["medium"]; // Default to 'medium' if empty

      product.salePercent = Math.floor(Math.random() * 101);
      product.numInStock = Math.floor(Math.random() * 20) + 1;

      return product;
    });

    try {
      await prisma.product.createMany({ data: finalProducts });
      console.log("Products added successfully!");
    } catch (error) {
      console.error("Error inserting products:", error);
    }
  } finally {
    prisma.$disconnect();
  }
};

function getRandomHexColor() {
  const hex = Math.floor(Math.random() * 0xffffff)
    .toString(16)
    .padStart(6, "0");
  return `#${hex}`;
}

function getSizes(num: number) {
  const sizes = [
    "xx-small",
    "x-small",
    "small",
    "medium",
    "large",
    "x-large",
    "xx-large",
    "3x-large",
    "4x-large",
  ];

  return sizes.slice(0, num + 1);
}
