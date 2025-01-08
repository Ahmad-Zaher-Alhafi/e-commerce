import { CartItem } from "@prisma/client";
import { addCartItem } from "../../../../DB/productController";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body: CartItem = await req.json();

  const {
    name,
    size,
    color,
    price,
    quantity,
    imageUrl,
    productId,
  }: {
    name: string;
    size: string;
    color: string;
    price: number;
    quantity: number;
    imageUrl: string;
    productId: number;
  } = body;

  try {
    await addCartItem(name, size, color, price, quantity, imageUrl, productId);
    return NextResponse.json({ message: "Item added to cart" });
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to add item to cart", error },
      { status: 500 }
    );
  }
}
