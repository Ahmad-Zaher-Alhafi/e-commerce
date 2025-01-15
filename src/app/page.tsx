import WelcomeSection from "@/app/components/WelcomeSection";
import Products from "@/app/components/Products";
import Review from "@/app/components/Review";
import React, { Suspense } from "react";
import ProductsSkeleton from "./components/ProductsSkeleton";
import Category from "./components/Category";
import AutoScroll from "./components/AutoScroll";

export default async function Home() {
  const numberOfReviews = 8;

  return (
    <div className={"home"}>
      <WelcomeSection></WelcomeSection>

      <div
        className={
          "flex flex-col gap-[40px] sm:gap-[64px] pt-[50px] custom-paddingX"
        }
      >
        <Suspense fallback={<ProductsSkeleton title="New Arrivals" />}>
          <Products title={"New Arrivals"}></Products>
        </Suspense>

        <hr className={"custom-divider"} />

        <Suspense fallback={<ProductsSkeleton title="Top Selling" />}>
          <Products title={"Top Selling"}></Products>
        </Suspense>
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
            <Category
              minImgUrl="/assets/images/casualCategory.png"
              minWidth={769}
              maxImgUrl="/assets/images/casualCategoryBig.png"
              maxWidth={768}
              direction={-1}
            ></Category>

            <Category
              minImgUrl="/assets/images/formalCategory.png"
              minWidth={769}
              maxImgUrl="/assets/images/formalCategoryBig.png"
              maxWidth={768}
              direction={1}
            ></Category>

            <Category
              minImgUrl="/assets/images/partCategory.png"
              minWidth={769}
              maxImgUrl="/assets/images/partCategoryBig.png"
              maxWidth={768}
              direction={-1}
            ></Category>

            <Category
              minImgUrl="/assets/images/gymCategory.png"
              minWidth={769}
              maxImgUrl="/assets/images/gymCategoryBig.png"
              maxWidth={768}
              direction={1}
            ></Category>
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
          <AutoScroll>
            <div className={"flex gap-[20px]"}>
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
          </AutoScroll>

          <div className="hidden sm:block absolute top-0 left-0 w-[8%] h-full backdrop-blur-[1.5px]"></div>
          <div className="hidden sm:block absolute top-0 right-0 w-[8%] h-full backdrop-blur-[1.5px]"></div>
        </div>
      </div>
    </div>
  );
}
