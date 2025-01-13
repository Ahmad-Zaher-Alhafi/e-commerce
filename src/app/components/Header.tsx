"use client";

import React, { useEffect, useRef, useState } from "react";
import Cart from "./Cart";
import { useRouter, usePathname } from "next/navigation";
import { doAfter } from "../lib/delayer";
import Link from "next/link";
import Search from "./Search";
import UserLogo from "./UserLogo";

const Header = ({ isLoggedIn }: { isLoggedIn: boolean }) => {
  const router = useRouter();
  let pathName = usePathname();
  const [searchTerm, setSearchTerm] = useState("");
  const [showSearchItem, setShowSearchItem] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const isProductsPage = pathName.startsWith("/products");

  const handleSearchChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!isProductsPage) {
      pathName = "/products/all/";
    }

    const searchTerm = e.target.value.trim();

    if (searchInputRef.current) {
      searchInputRef.current.value = searchTerm;
    }

    setSearchTerm(searchTerm);

    const route = `${pathName}` + (searchTerm ? `?search=${searchTerm}` : "");

    doAfter(0.5, () => {
      if (isProductsPage) {
        router.replace(route);
      } else {
        router.push(route);
      }
    });
  };

  const handleSearchClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowSearchItem(true);
  };

  const handleClickOutside = () => {
    setShowSearchItem(false);
  };

  useEffect(() => {
    const handleDocumentClick = () => handleClickOutside();

    window.addEventListener("click", handleDocumentClick);

    return () => {
      window.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  return (
    <header className="header relative flex flex-col gap-[24px] custom-paddingX sm:max-xl:px-[2%] py-[20px] md:py-[24px]">
      <div className="flex justify-between gap-[4%] items-center h-[48px]">
        <span className={"flex gap-[16px] items-center"}>
          <img
            src="/assets/svgs/dropDown.svg"
            alt="search icon"
            className={"sm:hidden"}
          />
          <span
            className="logo font-integral font-bold text-[25px] sm:text-[32px] translate-y-[-3px] sm:translate-y-[-4px] cursor-pointer"
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
            className="pl-10 py-2 pr-4 border rounded-[62px] w-full bg-[#F0F0F0] font-satoshi"
            onChange={handleSearchChanged}
            ref={searchInputRef}
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
            className={"md:hidden cursor-pointer"}
            onClick={handleSearchClick}
          />

          <Cart />

          <UserLogo isLoggedIn={isLoggedIn}></UserLogo>
        </span>
      </div>

      {!isProductsPage && <hr className="custom-divider"></hr>}

      {showSearchItem && (
        <Search
          handleSearchChanged={handleSearchChanged}
          value={searchTerm}
        ></Search>
      )}
    </header>
  );
};

export default Header;
