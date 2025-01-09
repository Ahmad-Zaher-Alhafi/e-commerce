import { CartItem } from "@prisma/client";
import { populateDB } from "./PopulateDB";
import { prismaInstance } from "./prismaClientSingleton";

await populateDB();

async function getProducts() {
  try {
    return await prismaInstance.product.findMany();
  } catch (error) {
    console.error("Failed to get products from DB: ", error);
  }
}

async function getProductById(id: number) {
  try {
    return await prismaInstance.product.findUnique({
      where: {
        id: id,
      },
      include: {
        cartItem: true,
      },
    });
  } catch (error) {
    console.error("Failed to get products from DB: ", error);
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
    return await prismaInstance.cartItem.create({
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
  }
}

async function deleteCartItem(id: number) {
  try {
    await prismaInstance.cartItem.delete({
      where: {
        id: id,
      },
    });
  } catch (error) {
    console.error("Failed to delete cart item from DB: ", error);
  }
}

async function getCartItems() {
  try {
    return await prismaInstance.cartItem.findMany();
  } catch (error) {
    console.error("Failed to get cart items from DB: ", error);
  }
}

async function updateCartItem(id: number, cartItem: CartItem) {
  try {
    return await prismaInstance.cartItem.update({
      where: {
        id: id,
      },
      data: {
        name: cartItem.name,
        size: cartItem.size,
        color: cartItem.color,
        price: cartItem.price,
        quantity: cartItem.quantity,
        imageUrl: cartItem.imageUrl,
        productId: cartItem.productId,
      },
    });
  } catch (error) {
    console.error("Failed to update cart item in DB: ", error);
  }
}

export {
  getProducts,
  getProductById,
  addCartItem,
  getCartItems,
  deleteCartItem,
  updateCartItem,
};
