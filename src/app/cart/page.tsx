import CartProduct from "../components/CartProduct";
import { getCartItems } from "../../../DB/productController";
import { CartItem } from "@prisma/client";

const Cart = async () => {
  const cartItems = await getCartItems();

  let subtotal;
  const discountPercentage = 20;
  let discount;
  const deliveryFee = 0;
  let total;

  calculate();

  function calculate() {
    if (!cartItems) return;

    subtotal = cartItems.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    discount = Math.floor(subtotal * (discountPercentage / 100));
    total = subtotal - discount + deliveryFee;
  }

  return (
    <div className="flex flex-col gap-[24px] custom-paddingX">
      <span className="font-integral font-bold text-[32px] sm:text-[40px]">
        Your cart
      </span>

      {cartItems && cartItems.length > 0 ? (
        <div className="flex flex-col xl:flex-row gap-[20px]">
          <div
            className="flex flex-col gap-[21px] border-[2px] border-[#F0EEED] rounded-[20px] px-[27px] py-[21px] flex-[1.5]
          max-h-[520px] overflow-auto"
          >
            {cartItems?.map((cartItem: CartItem, index: number) => (
              <div key={cartItem.id} className="flex flex-col gap-[21px]">
                <CartProduct cartItem={cartItem}></CartProduct>
                {index < cartItems.length - 1 && (
                  <hr className="custom-divider"></hr>
                )}
              </div>
            ))}
          </div>

          <div className="flex-1">
            <div className="flex flex-col gap-[16px] border-[2px] border-[#F0EEED] rounded-[20px] px-[27px] py-[21px]">
              <span className="font-satoshi font-bold text-[24px]">
                Order Summary
              </span>
              <div>
                <div className="flex justify-between items-center font-satoshi text-[16px] sm:text-[20px]">
                  <span className="opacity-60">Subtotal</span>
                  <span className="font-bold">${subtotal}</span>
                </div>

                <div className="flex justify-between items-center font-satoshi text-[16px] sm:text-[20px]">
                  <span className="opacity-60">
                    Discount (-{discountPercentage}%)
                  </span>
                  <span className="font-bold text-[#FF3333]">-${discount}</span>
                </div>

                <div className="flex justify-between items-center font-satoshi text-[16px] sm:text-[20px]">
                  <span className="opacity-60">Delivery fee</span>
                  <span className="font-bold">${deliveryFee}</span>
                </div>
              </div>

              <hr className="custom-divider"></hr>

              <div className="flex justify-between items-center font-satoshi text-[16px] sm:text-[20px]">
                <span>Total</span>
                <span className="font-bold">${total}</span>
              </div>

              <div className="flex gap-[12px] justify-between">
                <div className="flex justify-start items-center gap-[20px] rounded-[62px] min-w-[44px] flex-[1.5]">
                  <div className="relative flex-1">
                    <input
                      type="text"
                      placeholder="Search for products..."
                      className="pl-10 py-[10px] pr-4 border rounded-[62px] w-full bg-[#F0F0F0] font-satoshi font-medium text-[14px] text-nowrap sm:text-[16px]"
                    />
                    <img
                      src="/assets/svgs/tagIcon.svg"
                      alt="search icon"
                      className="absolute left-3 top-1/2 transform -translate-y-1/2 opacity-60"
                    />
                  </div>
                </div>

                <button className="primary-button flex-1">Apply</button>
              </div>

              <button className="flex justify-center items-center gap-[15px] primary-button">
                Got to checkout
                <svg
                  width="20"
                  height="16"
                  viewBox="0 0 20 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.2959 0.454104L19.0459 7.2041C19.1508 7.30862 19.234 7.43281 19.2908 7.56956C19.3476 7.7063 19.3768 7.85291 19.3768 8.00098C19.3768 8.14904 19.3476 8.29565 19.2908 8.4324C19.234 8.56915 19.1508 8.69334 19.0459 8.79785L12.2959 15.5479C12.0846 15.7592 11.7979 15.8779 11.4991 15.8779C11.2002 15.8779 10.9135 15.7592 10.7022 15.5479C10.4908 15.3365 10.3721 15.0499 10.3721 14.751C10.3721 14.4521 10.4908 14.1654 10.7022 13.9541L15.5313 9.12504L1.75 9.12504C1.45163 9.12504 1.16548 9.00651 0.954505 8.79554C0.743527 8.58456 0.625 8.29841 0.625 8.00004C0.625 7.70167 0.743527 7.41552 0.954505 7.20455C1.16548 6.99357 1.45163 6.87504 1.75 6.87504L15.5313 6.87504L10.7013 2.04598C10.4899 1.83463 10.3712 1.54799 10.3712 1.2491C10.3712 0.950218 10.4899 0.663574 10.7013 0.45223C10.9126 0.240885 11.1992 0.122151 11.4981 0.122151C11.797 0.122151 12.0837 0.240885 12.295 0.45223L12.2959 0.454104Z"
                    fill="white"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <span className="font-satoshi font-bold text-[24px]">
          Your cart is empty
        </span>
      )}
    </div>
  );
};

export default Cart;
