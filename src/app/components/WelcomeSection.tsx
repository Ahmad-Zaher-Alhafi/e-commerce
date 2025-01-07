import React from "react";

const WelcomeSection = () => {
  return (
    <section className={"relative"}>
      <div
        className={
          "bg-[#F2F0F1] lg:bg-transparent custom-paddingX flex flex-col lg:absolute left-0 top-0 " +
          "gap-[20px] pt-[40px] lg:max-w-[40%] z-[10] sm:box-content"
        }
      >
        <div
          className={
            "font-integral font-bold text-[clamp(36px,4vw,8rem)] leading-[100%]"
          }
        >
          FIND CLOTHES THAT MATCHES YOUR STYLE
        </div>

        <p
          className={"font-satoshi text-[clamp(14px,1.5vw,8rem)] opacity-[60%]"}
        >
          Browse through our diverse range of meticulously crafted garments,
          designed to bring out your individuality and cater to your sense of
          style.
        </p>

        <button className={"primary-button mt-[4px] max-w-[210px]"}>Shop Now</button>

        <div
          className={
            "flex justify-center gap-[27px] flex-wrap px-[28px] sm:px-0"
          }
        >
          <div className={"flex flex-col flex-1 sm:gap-2.5"}>
            <span className={"font-satoshi font-bold text-2xl xl:text-[40px]"}>
              200+
            </span>
            <span className={"font-satoshi text-xs opacity-60  xl:text-[16px]"}>
              International Brands
            </span>
          </div>

          <div className={"bg-black opacity-[10%] w-[1px]"}></div>

          <div className={"flex flex-col flex-1 sm:gap-2.5"}>
            <span
              className={"font-satoshi font-bold text-2xl  xl:text-[40px] "}
            >
              2,000+
            </span>
            <span className={"font-satoshi text-xs opacity-60  xl:text-[16px]"}>
              High-Quality Products
            </span>
          </div>

          <div
            className={"bg-black opacity-[10%] w-[1px] hidden xs:block"}
          ></div>

          <div className={"flex flex-col sm:gap-2.5"}>
            <span className={"font-satoshi font-bold text-2xl  xl:text-[40px]"}>
              30,000+
            </span>
            <span className={"font-satoshi text-xs opacity-60  xl:text-[16px]"}>
              Happy Customers
            </span>
          </div>
        </div>
      </div>

      <div className={"flex justify-center bg-[#F2F0F1] relative"}>
        <picture className={"relative"}>
          <source
            srcSet="/assets/images/mainImageBig.png"
            media="(min-width: 1441px)"
          />
          <source
            srcSet="/assets/images/mainImage.png"
            media="(min-width: 1021px)"
          />
          <source
            srcSet="/assets/images/mainImageSmall.png"
            media="(max-width: 1024px)"
          />
          <img src="/assets/images/mainImageSmall.png" alt="Main Image" />

          <div>
            <img
              className={
                "absolute top-1/3 left-10 right-0 lg:left-1/2 lg:right-1/2 transform -translate-y-[30px] lg:translate-x-20"
              }
              src="/assets/svgs/smallStar.svg"
              alt="small star icon"
            />

            <img
              className={
                "absolute top-1/4 right-10 transform -translate-y-[70px]"
              }
              src="/assets/svgs/bigStart.svg"
              alt="big start icon"
            />
          </div>
        </picture>
      </div>

      <div
        className={
          "bg-black flex flex-wrap gap-[34px] justify-center py-[40px]"
        }
      >
        <img src="/assets/svgs/versLogo.svg" alt="versace image" />
        <img src="/assets/svgs/zaraLogo.svg" alt="zara image" />
        <img src="/assets/svgs/gucciLogo.svg" alt="gucci image" />
        <img src="/assets/svgs/pradaLogo.svg" alt="prada image" />
        <img src="/assets/svgs/calvinLogo.svg" alt="calvin klein image" />
      </div>
    </section>
  );
};
export default WelcomeSection;
