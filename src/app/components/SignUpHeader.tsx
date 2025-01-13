import Link from "next/link";
import React from "react";

const SignUpHeader = ({ isHidden }: { isHidden: boolean }) => {
  if (isHidden) return;

  return (
    <div
      className={
        "signUpHeader w-full h-[34px] sm:h-[38px] flex justify-between items-center py-[9px] sm:py-[12px] bg-black text-white "
      }
    >
      <div className={"font-satoshi mx-auto text-[12px] sm:text-[14px]"}>
        Sign up and get 20% off to your first order.
        <Link
          href="/signup"
          className={"underline underline-offset-4 ml-[5px]"}
        >
          Sign Up Now
        </Link>
      </div>

      <img
        src="/assets/svgs/cross.svg"
        alt="cross icon"
        className={"hidden sm:block mr-[44px] sm:mr-[100px]"}
      />
    </div>
  );
};
export default SignUpHeader;
