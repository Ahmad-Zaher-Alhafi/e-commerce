"use client";

import React from "react";
import Cart from "./Cart";
import { useRouter, usePathname } from "next/navigation";
import { doAfter } from "../lib/delayer";

const Header = () => {
  const router = useRouter();
  const pathName = usePathname();

  const isHomePage = pathName === "/";

  const handleSearchChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value.trim();

    console.log(pathName);

    doAfter(0.5, () => {
      if (pathName.startsWith("/products")) {
        if (!searchTerm) {
          router.replace("/products/all");
          return;
        }
        router.replace(`/products/all?search=${searchTerm}`);
      } else {
        router.push(`/products/all?search=${searchTerm}`);
      }
    });
  };

  return (
    <header
      className={
        "header flex flex-col gap-[24px] custom-paddingX sm:max-xl:px-[2%] py-[20px] md:py-[24px]"
      }
    >
      <div className="flex justify-between gap-[4%] items-center h-[48px]">
        <span className={"flex gap-[16px] items-center"}>
          <img
            src="/assets/svgs/dropDown.svg"
            alt="search icon"
            className={"sm:hidden"}
          />
          <span
            className={
              "logo font-integral font-bold text-[25px] sm:text-[32px] translate-y-[-3px] sm:translate-y-[-4px] cursor-pointer"
            }
            onClick={() => router.push("/")}
          >
            SHOP.CO
          </span>
        </span>

        <ul className={"hidden sm:flex gap-[24px] items-center"}>
          <li>
            <a href="" className={"font-satoshi"}>
              Shop
            </a>
          </li>
          <li>
            <a href="" className={"font-satoshi text-nowrap"}>
              On Sale
            </a>
          </li>
          <li>
            <a href="" className={"font-satoshi text-nowrap"}>
              New Arrivals
            </a>
          </li>
          <li>
            <a href="" className={"font-satoshi"}>
              Brands
            </a>
          </li>
        </ul>

        <div className="relative hidden md:block flex-1">
          <input
            type="text"
            placeholder="Search for products..."
            className=" pl-10 py-2 pr-4 border rounded-[62px] w-full bg-[#F0F0F0] font-satoshi"
            onChange={handleSearchChanged}
          />
          <img
            src="/assets/svgs/search.svg"
            alt="search icon"
            className="absolute left-3 top-1/2 transform -translate-y-1/2 opacity-[40%]"
          />
        </div>

        <span
          className={
            "Icons flex justify-between items-center gap-[10px] flex-shrink-0"
          }
        >
          <img
            src="/assets/svgs/search.svg"
            alt="search icon"
            className={"md:hidden"}
          />

          <Cart></Cart>

          <img src="/assets/svgs/profile.svg" alt="profile icon" />
        </span>
      </div>

      {!isHomePage && <hr className="custom-divider"></hr>}
    </header>
  );
};

export default Header;
