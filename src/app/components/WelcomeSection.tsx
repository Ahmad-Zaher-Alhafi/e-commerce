import React from "react";
import Button from "./NavigationButton";
import * as motion from "motion/react-client";
import AnimatedText from "./AnimatedText";
import AutoScroll from "./AutoScroll";

const WelcomeSection = () => {
  return (
    <section className={"relative"}>
      <div
        className={
          "bg-[#F2F0F1] lg:bg-transparent custom-paddingX flex flex-col lg:absolute left-0 top-0 " +
          "gap-[20px] pt-[40px] lg:max-w-[40%] z-[10] sm:box-content"
        }
      >
        <motion.div
          animate={{ x: [-50, 0], opacity: [0, 1] }}
          transition={{ duration: 1 }}
          className={
            "font-integral font-bold text-[clamp(36px,4vw,8rem)] leading-[100%]"
          }
        >
          FIND CLOTHES THAT MATCHES YOUR STYLE
        </motion.div>

        <motion.p
          animate={{ x: [50, 0], opacity: [0, 1] }}
          transition={{ duration: 1 }}
          className={"font-satoshi text-[clamp(14px,1.5vw,8rem)] opacity-[60%]"}
        >
          Browse through our diverse range of meticulously crafted garments,
          designed to bring out your individuality and cater to your sense of
          style.
        </motion.p>

        <Button className={"primary-button mt-[4px] max-w-[210px]"}>
          Shop Now
        </Button>

        <div
          className={
            "flex justify-center gap-[27px] flex-wrap px-[28px] sm:px-0"
          }
        >
          <motion.div
            className={"flex flex-col flex-1 sm:gap-2.5"}
            animate={{ y: [-20, 0], opacity: [0, 1] }}
            transition={{ duration: 0.3 }}
          >
            <AnimatedText to={200}></AnimatedText>

            <span className={"font-satoshi text-xs opacity-60  xl:text-[16px]"}>
              International Brands
            </span>
          </motion.div>

          <div className={"bg-black opacity-[10%] w-[1px]"}></div>

          <motion.div
            className={"flex flex-col flex-1 sm:gap-2.5"}
            animate={{ y: [-20, 0], opacity: [0, 1] }}
            transition={{ duration: 0.6 }}
          >
            <AnimatedText to={2000}></AnimatedText>
            <span className={"font-satoshi text-xs opacity-60  xl:text-[16px]"}>
              High-Quality Products
            </span>
          </motion.div>

          <div
            className={"bg-black opacity-[10%] w-[1px] hidden xs:block"}
          ></div>

          <motion.div
            className={"flex flex-col sm:gap-2.5"}
            animate={{ y: [-20, 0], opacity: [0, 1] }}
            transition={{ duration: 1 }}
          >
            <AnimatedText to={30000}></AnimatedText>
            <span className={"font-satoshi text-xs opacity-60  xl:text-[16px]"}>
              Happy Customers
            </span>
          </motion.div>
        </div>
      </div>

      <div
        className={"flex justify-center bg-[#F2F0F1] relative overflow-hidden"}
      >
        <motion.picture
          className={"relative"}
          animate={{ x: [40, 0], opacity: [0, 1] }}
          transition={{ duration: 1 }}
        >
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
            <motion.img
              initial={{ scale: 0 }}
              animate={{ scale: [0.5, 1] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className={
                "absolute top-1/3 left-10 right-0 lg:left-[55%] lg:right-1/2 transform -translate-y-[30px] lg:translate-x-20"
              }
              src="/assets/svgs/smallStar.svg"
              alt="small star icon"
            />

            <motion.img
              initial={{ scale: 0 }}
              animate={{ scale: [0.5, 1] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className={
                "absolute top-[10%] right-10 lg:right-[10%] transform -translate-y-[70px]"
              }
              src="/assets/svgs/bigStart.svg"
              alt="big start icon"
            />
          </div>
        </motion.picture>
      </div>

      <div className="text-white bg-black py-[40px] overflow-hidden">
        <AutoScroll dragAble={false}>
          <div className="flex gap-[75px] sm:gap-[200px]">
          <img
            src="/assets/svgs/versLogo.svg"
            alt="versace image"
            draggable={false}
          />
          <img
            src="/assets/svgs/zaraLogo.svg"
            alt="zara image"
            draggable={false}
          />
          <img
            src="/assets/svgs/gucciLogo.svg"
            alt="gucci image"
            draggable={false}
          />
          <img
            src="/assets/svgs/pradaLogo.svg"
            alt="prada image"
            draggable={false}
          />
          <img
            src="/assets/svgs/calvinLogo.svg"
            alt="calvin klein image"
            draggable={false}
          />

          <img
            src="/assets/svgs/versLogo.svg"
            alt="versace image"
            draggable={false}
          />
          <img
            src="/assets/svgs/zaraLogo.svg"
            alt="zara image"
            draggable={false}
          />
          <img
            src="/assets/svgs/gucciLogo.svg"
            alt="gucci image"
            draggable={false}
          />
          <img
            src="/assets/svgs/pradaLogo.svg"
            alt="prada image"
            draggable={false}
          />
          <img
            src="/assets/svgs/calvinLogo.svg"
            alt="calvin klein image"
            draggable={false}
          />
          </div>
        </AutoScroll>
      </div>
    </section>
  );
};
export default WelcomeSection;
