import { PrismaClient } from "@prisma/client";
import { populateDB } from "./PopulateDB";

await populateDB();

const prisma = new PrismaClient();

async function getProducts() {
  try {
    return await prisma.product.findMany();
  } catch (error) {
    console.error("Failed to get products from DB: ", error);
  } finally {
    disconnect();
  }
}

async function getProductById(id: number) {
  try {
    return await prisma.product.findUnique({
      where: {
        id: id,
      },
    });
  } catch (error) {
    console.error("Failed to get products from DB: ", error);
  } finally {
    disconnect();
  }
}

async function disconnect() {
  await prisma.$disconnect();
}

export { getProducts, getProductById };
