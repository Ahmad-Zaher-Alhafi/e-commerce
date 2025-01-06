import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function getProducts() {
  try {
    return await prisma.product.findMany();
  } catch (error) {
    console.error("Failed to get products from DB: ", error);
  }
}

export { getProducts };
