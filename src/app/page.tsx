import WelcomeSection from "@/app/components/WelcomeSection";
import Products from "@/app/components/Products";
import Review from "@/app/components/Review";
import React from "react";

export default function Home() {
  const numberOfReviews = 5;

  return (
    <div className={"home"}>
      <WelcomeSection></WelcomeSection>

      <div className={"flex flex-col gap-[40px] sm:gap-[64px] pt-[50px]"}>
        <Products title={"New Arrivals"}></Products>
        <div className={"custom-paddingX"}>
          <hr className={"bg-black h-[2px] opacity-10"} />
        </div>
        <Products title={"Top Selling"}></Products>
      </div>

      <div className={"custom-paddingX"}>
        <div
          className={
            "flex flex-col items-center gap-[28px] bg-[#F0F0F0] py-[40px] px-[24px] sm:px-[32px] mt-[50px] rounded-[20px] sm:rounded-[40px]"
          }
        >
          <span
            className={
              "font-integral font-bold text-center text-[32px] leading-[36px] sm:leading-normal sm:text-[48px]"
            }
          >
            Browse by dress style
          </span>

          <div
            className={
              "flex flex-col justify-center sm:flex-row flex-wrap gap-[16px] sm:gap-[20px]"
            }
          >
            <picture>
              <source
                srcSet="/assets/images/casualCategoryBig.png"
                media="(min-width: 769px)"
              />
              <source
                srcSet="/assets/images/casualCategory.png"
                media={"(max-width: 768px)"}
              />
              <img
                src="/assets/images/casualCategory.png"
                alt="casual category image"
              />
            </picture>

            <picture>
              <source
                srcSet="/assets/images/formalCategoryBig.png"
                media="(min-width: 769px)"
              />
              <source
                srcSet="/assets/images/formalCategory.png"
                media={"(max-width: 768px)"}
              />
              <img
                src="/assets/images/formalCategory.png"
                alt="casual category image"
              />
            </picture>

            <picture>
              <source
                srcSet="/assets/images/partCategoryBig.png"
                media="(min-width: 769px)"
              />
              <source
                srcSet="/assets/images/partCategory.png"
                media={"(max-width: 768px)"}
              />
              <img
                src="/assets/images/partCategory.png"
                alt="casual category image"
              />
            </picture>

            <picture>
              <source
                srcSet="/assets/images/gymCategoryBig.png"
                media="(min-width: 769px)"
              />
              <source
                srcSet="/assets/images/gymCategory.png"
                media={"(max-width: 768px)"}
              />
              <img
                src="/assets/images/gymCategory.png"
                alt="casual category image"
              />
            </picture>
          </div>
        </div>
      </div>

      <div
        className={
          "flex flex-col  pt-[50px] sm:pt-[80px] gap-[24px] sm:gap-[40px]"
        }
      >
        <div className={"flex justify-between items-end custom-paddingX"}>
          <span
            className={
              "font-integral font-bold text-[32px] sm:text-[48px] leading-[36px] sm:leading-normal"
            }
          >
            Our happy customers
          </span>

          <div className={"flex justify-end gap-[5px] min-w-[50px]"}>
            <img src="/assets/svgs/arrowLeft.svg" alt="casual category image" />
            <img
              src="/assets/svgs/arrowRight.svg"
              alt="casual category image"
            />
          </div>
        </div>

        <div className={"relative"}>
          <div
            className={
              "flex justify-center gap-[20px] overflow-auto hide-scrollbar sm:show-scrollbar"
            }
          >
            {[...Array(numberOfReviews)].map(() => {
              return (
                <Review
                  key={Math.random()}
                  rate={5}
                  customerName={"Jasem"}
                ></Review>
              );
            })}
          </div>

          <div className="hidden sm:block absolute top-0 left-0 w-[8%] h-full backdrop-blur-[1.5px]"></div>
          <div className="hidden sm:block absolute top-0 right-0 w-[8%] h-full backdrop-blur-[1.5px]"></div>
        </div>
      </div>
    </div>
  );
}
