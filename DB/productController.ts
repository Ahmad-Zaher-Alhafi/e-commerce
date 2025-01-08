import { PrismaClient } from "@prisma/client";
import { populateDB } from "./PopulateDB";

await populateDB();

const prisma = new PrismaClient({
  log: ["error"],
});

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

async function addCartItem(
  name: string,
  size: string,
  color: string,
  price: number,
  quantity: number,
  imageUrl: string,
  productId: number
) {
  try {
    await prisma.cartItem.create({
      data: {
        name: name,
        size: size,
        color: color,
        price: price,
        quantity: quantity,
        imageUrl: imageUrl,
        productId: productId,
      },
    });
  } catch (error) {
    console.error("Failed to add cart item to DB: ", error);
  } finally {
    disconnect();
  }
}

async function getCartItems() {
  try {
    return await prisma.cartItem.findMany();
  } catch (error) {
    console.error("Failed to get cart items from DB: ", error);
  } finally {
    disconnect();
  }
}

async function disconnect() {
  await prisma.$disconnect();
}

export { getProducts, getProductById, addCartItem, getCartItems };
