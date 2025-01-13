"use client";
import React, { useEffect, useState } from "react";
import { logOut } from "../actions/auth";
import { redirect } from "next/navigation";

const UserLogo = ({ isLoggedIn }: { isLoggedIn: boolean }) => {
  const [showButton, setShowButton] = useState(false);

  const handleIconClick = (e: React.MouseEvent) => {
    setShowButton(!showButton);
    e.stopPropagation();
  };

  const handleButtonClick = async () => {
    setShowButton(!showButton);

    if (isLoggedIn) {
      await logOut();
    } else {
      redirect("/login");
    }
  };

  useEffect(() => {
    const hideButton = () => {
      setShowButton(false);
    };

    window.addEventListener("click", hideButton);

    return () => {
      window.removeEventListener("click", hideButton);
    };
  }, [showButton]);

  return (
    <div className="relative cursor-pointer">
      <div onClick={handleIconClick}>
        {isLoggedIn ? (
          <img
            src="/assets/images/userImage.png"
            alt="user image"
            className="w-[22px] h-[22px]"
          />
        ) : (
          <img src="/assets/svgs/profile.svg" alt="profile icon" />
        )}
      </div>

      {showButton && (
        <div
          className="absolute flex items-center top-full right-0 xl:left-1/2 transform translate-y-[10%] xl:-translate-x-1/2 bg-[#F2F0F1] p-2 w-[100px] h-[50px]
      rounded-[10px] cursor-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <button className="primary-button !py-1" onClick={handleButtonClick}>
            {isLoggedIn ? "Logout" : "Login"}
          </button>
        </div>
      )}
    </div>
  );
};

export default UserLogo;
