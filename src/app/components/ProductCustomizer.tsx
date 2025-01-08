"use client";

import React, { useState } from "react";
import { doDELETE, doPOST } from "../../../fetcher";
import { Prisma } from "@prisma/client";

type ProductWithRelations = Prisma.ProductGetPayload<{
  include: {
    cartItem: true;
  };
}>;

const ProductCustomizer = ({ product }: { product: ProductWithRelations }) => {
  const { id, name, colors, sizes, price, imageUrl, cartItem } = product;

  const [selectedColor, setSelectedColor] = useState<string>(colors[0]);
  const [selectedSize, setSelectedSize] = useState<string>(sizes[0]);
  const [quantity, setQuantity] = useState<number>(1);
  const [addingToCart, setAddingToCart] = useState<boolean>(false);
  const [removingFromCart, setRemovingFromCart] = useState<boolean>(false);

  const [cartItemId, setCartItemId] = useState<number | undefined>(
    cartItem?.id
  );

  const maxAllowedQuantity = 10;

  const handleSelectColor = (color: string) => {
    setSelectedColor(color);
  };

  const handleSelectSize = (color: string) => {
    setSelectedSize(color);
  };

  const handleQuantityPlus = () => {
    if (quantity < maxAllowedQuantity) {
      setQuantity(quantity + 1);
    }
  };

  const handleQuantityMinus = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handelAddClick = async () => {
    if (addingToCart) return;

    setAddingToCart(true);

    const response = await doPOST(`/api/cartItems/${id}`, {
      productId: id,
      name: name,
      size: selectedSize,
      color: selectedColor,
      price: price,
      quantity: quantity,
      imageUrl: imageUrl,
    });

    setAddingToCart(false);

    const { cartItem } = await response.json();
    setCartItemId(cartItem.id);

    if (!response.ok) {
      console.error("Failed to add item to cart");
      return;
    }

    console.log("Item added to cart");
  };

  const handelRemoveClick = async () => {
    if (removingFromCart) return;

    setRemovingFromCart(true);

    const response = await doDELETE(`/api/cartItems/${cartItemId}`);

    if (!response.ok) {
      console.error("Failed to remove item from cart");
      return;
    }

    setRemovingFromCart(false);
    setCartItemId(undefined);

    console.log("Item removed to cart");
  };

  return (
    <div className="flex flex-col gap-[12px] justify-between">
      <span className="font-satoshi text-[14px] sm:text-[16px] opacity-60">
        Select Color
      </span>
      <div className="flex gap-[16px]">
        {colors.map((color) => (
          <button
            key={color}
            style={{ backgroundColor: color }}
            className={`flex justify-center items-center font-satoshi text-[14px] sm:text-[16px] opacity-60 rounded-full h-[39px] w-[39px]
              border-2 border-black ${
                selectedColor === color
                  ? "border-opacity-100"
                  : "border-opacity-60"
              } hover:border-opacity-100`}
            onClick={() => handleSelectColor(color)}
          >
            {selectedColor === color && (
              <img src="/assets/svgs/checkIcon.svg" alt="check icon image" />
            )}
          </button>
        ))}
      </div>
      <hr className={"custom-divider"}></hr>
      <span className="font-satoshi text-[14px] sm:text-[16px] opacity-60">
        Choose Size
      </span>
      <div className="flex flex-wrap gap-[16px] overflow-auto sm:max-h-[112px]">
        {sizes.map((size) => (
          <button
            key={Math.random()}
            style={{ backgroundColor: size }}
            className={`font-satoshi text-[14px] sm:text-[16px] text-nowrap ${
              selectedSize === size ? "text-white" : "text-black"
            } ${
              selectedSize === size ? "text-opacity-100" : "text-opacity-60"
            } rounded-full py-[10px] sm:py-[12px] px-[5%] 
              ${selectedSize === size ? "bg-black" : "bg-[#F0F0F0]"}`}
            onClick={() => handleSelectSize(size)}
          >
            {size}
          </button>
        ))}
      </div>

      <hr className={"custom-divider"}></hr>

      {!cartItemId ? (
        <div className="flex gap-[12px] sm:gap-[20px]">
          {!addingToCart && (
            <div className="flex justify-between items-center gap-[18px] bg-[#F0F0F0] py-[10px] lg:py-[15px] px-[22px] rounded-[62px] flex-1 min-w-[150px] max-w-[236px]">
              <img
                src="/assets/svgs/minusIcon.svg"
                alt="plus icon"
                className={`w-[25px] h-[25px] hover:cursor-pointer ${
                  quantity <= 1 && "opacity-60"
                } ${quantity <= 1 && "hover:cursor-default"}`}
                onClick={handleQuantityMinus}
              />
              <span className="font-satoshi font-medium text-[20px]">
                {quantity}
              </span>
              <img
                src="/assets/svgs/plusIcon.svg"
                alt="plus icon"
                className={`w-[25px] h-[25px] hover:cursor-pointer ${
                  quantity >= maxAllowedQuantity && "opacity-60"
                } ${quantity >= maxAllowedQuantity && "hover:cursor-default"}`}
                onClick={handleQuantityPlus}
              />
            </div>
          )}
          <button
            className={`primary-button flex-[3] text-[14px] sm:text-[16px] !py-[10px] lg:!py-[15px] ${
              addingToCart && "!text-opacity-60 !bg-[#F0F0F0] !text-black"
            }`}
            onClick={handelAddClick}
            disabled={addingToCart}
          >
            {addingToCart ? "Adding to cart..." : "Add to cart"}
          </button>
        </div>
      ) : (
        <div className="flex gap-[12px] sm:gap-[20px]">
          <button
            className={`primary-button flex-[3] text-[14px] sm:text-[16px] !py-[10px] lg:!py-[15px] ${
              removingFromCart && "!text-opacity-60 !bg-[#F0F0F0] !text-black"
            }`}
            onClick={handelRemoveClick}
            disabled={removingFromCart}
          >
            {removingFromCart ? "Removing from cart..." : "Remove from cart"}
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductCustomizer;
