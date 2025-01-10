"use client";

import React, { useState } from "react";
import Cart from "./Cart";
import { useRouter, usePathname } from "next/navigation";
import { doAfter } from "../lib/delayer";
import Link from "next/link";

const Header = () => {
  const router = useRouter();
  const pathName = usePathname();
  const [searchTerm, setSearchTerm] = useState("");

  const isHomePage = pathName === "/";

  const handleSearchChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value.trim();
    setSearchTerm(searchTerm);
    const route =
      `/products/${pathName}` + searchTerm ? `?search=${searchTerm}` : "";

    doAfter(0.5, () => {
      if (isHomePage) {
        router.push(route);
      } else {
        router.replace(route);
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
            <Link
              href={
                `/products/all` + (searchTerm ? `?search=${searchTerm}` : "")
              }
              className={"font-satoshi text-nowrap"}
            >
              Shop
            </Link>
          </li>
          <li>
            <Link
              href={
                `/products/onSale` + (searchTerm ? `?search=${searchTerm}` : "")
              }
              className={"font-satoshi text-nowrap"}
            >
              On Sale
            </Link>
          </li>
          <li>
            <Link
              href={
                `/products/newArrivals` +
                (searchTerm ? `?search=${searchTerm}` : "")
              }
              className={"font-satoshi text-nowrap"}
            >
              New Arrivals
            </Link>
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
