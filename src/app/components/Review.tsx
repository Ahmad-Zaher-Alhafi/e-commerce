import React from "react";
import Rate from "@/app/components/Rate";
import Image from "next/image";

const Review = ({
  rate,
  customerName = "Customer name",
  content = "Oh la la, a wonderful website, I really like it Oh la la, a wonderful website, I really like it",
}: {
  rate: number;
  customerName: string;
  content: string;
}) => {
  return (
    <div
      className={
        "flex flex-col gap-[10px] sm:gap-[15px] rounded-[20px] border border-opacity-10 px-[24px] sm:px-[32px] py-[24] sm:py-[28px]" +
        " min-w-[358px] sm:min-w-[400px] xlg:min-w-[600px]"
      }
    >
      <Rate rate={rate} showRateNumber={false}></Rate>

      <div className={"flex items-center gap-[6px]"}>
        <span className={"font-satoshi text-[16px] sm:text-[20px] font-bold"}>
          {customerName}
        </span>
        <Image src="/assets/svgs/checkMark.svg" alt="check mark image" />
      </div>

      <p className={"font-satoshi text-[14] sm:text-[16px] opacity-60"}>
        {content}
      </p>
    </div>
  );
};
export default Review;
