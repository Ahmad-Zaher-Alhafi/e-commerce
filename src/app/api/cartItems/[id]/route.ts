import { CartItem } from "@prisma/client";
import {
  addCartItem,
  deleteCartItem,
  updateCartItem,
} from "../../../../../DB/productController";
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
    const cartItem = await addCartItem(
      name,
      size,
      color,
      price,
      quantity,
      imageUrl,
      productId
    );
    return NextResponse.json({ message: "Item added to cart", cartItem });
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to add item to cart", error },
      { status: 500 }
    );
  }
}

export async function PUT(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const cartItem: CartItem = await req.json();
  const id = Number((await params).id);

  try {
    const returnedCartItem = await updateCartItem(id, cartItem);
    return NextResponse.json({
      message: "Item updated in cart",
      returnedCartItem,
    });
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to update cart item", error },
      { status: 500 }
    );
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const id = Number((await params).id);
  try {
    await deleteCartItem(id);
    return NextResponse.json({ message: "Item was deleted from cart" });
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to delete item from cart", error },
      { status: 500 }
    );
  }
}
