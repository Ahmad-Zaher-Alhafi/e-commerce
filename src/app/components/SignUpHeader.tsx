import Image from "next/image";
import React from "react";

const SignUpHeader = () => {
  return (
    <div
      className={
        "signUpHeader w-full h-[34px] sm:h-[38px] flex justify-between items-center py-[9px] sm:py-[12px] bg-black text-white "
      }
    >
      <div className={"font-satoshi mx-auto text-[12px] sm:text-[14px]"}>
        Sign up and get 20% off to your first order. Sign Up Now
      </div>
      <Image
        src="/assets/svgs/cross.svg"
        alt="cross icon"
        className={"hidden sm:block mr-[44px] sm:mr-[100px]"}
      />
    </div>
  );
};
export default SignUpHeader;
