import React from "react";

const Footer = () => {
  return (
    <footer
      className={
        "bg-[#F0F0F0] custom-paddingX mt-[184px] pt-[190px] sm:pt-[140px] pb-[78px] flex flex-col gap-[40px] relative"
      }
    >
      <div className={"flex flex-col sm:flex-row gap-[24px] sm:gap-[113px]"}>
        <div className={"flex flex-col gap-[5px] sm:w-[248px]"}>
          <span
            className={"font-integral font-bold text-[29px] sm:text-[34px]"}
          >
            Shop.co
          </span>

          <p className={"font-satoshi text-[14px]"}>
            We have clothes that suits your style and which you’re proud to
            wear. From women to men.
          </p>

          <div className={"flex gap-[12px] pt-[15px]"}>
            <img src="/assets/svgs/twitterIcon.svg" alt="twitter icon" />
            <img src="/assets/svgs/facebookIcon.svg" alt="facebook icon" />
            <img src="/assets/svgs/instagramIcon.svg" alt="instagram icon" />
            <img src="/assets/svgs/girhubIcon.svg" alt="girhub icon" />
          </div>
        </div>

        <div
          className={
            "flex flex-wrap justify-start gap-x-[89px] gap-y-[24px] flex-1"
          }
        >
          <div className={"flex flex-col gap-[16px] flex-1"}>
            <span
              className={"font-satoshi font-medium text-[14px] tracking-[3px]"}
            >
              Company
            </span>
            <span
              className={"font-satoshi text-[14px] sm:text-[16px] opacity-60"}
            >
              About
            </span>
            <span
              className={"font-satoshi text-[14px] sm:text-[16px] opacity-60"}
            >
              Features
            </span>
            <span
              className={"font-satoshi text-[14px] sm:text-[16px] opacity-60"}
            >
              Work
            </span>
            <span
              className={"font-satoshi text-[14px] sm:text-[16px] opacity-60"}
            >
              Career
            </span>
          </div>

          <div className={"flex flex-col gap-[16px] flex-1"}>
            <span
              className={"font-satoshi font-medium text-[14px] tracking-[3px]"}
            >
              Help{" "}
            </span>
            <span
              className={
                "font-satoshi text-[14px] sm:text-[16px] opacity-60 text-nowrap"
              }
            >
              Customer Support
            </span>
            <span
              className={
                "font-satoshi text-[14px] sm:text-[16px] opacity-60 text-nowrap"
              }
            >
              Delivery Details
            </span>
            <span
              className={
                "font-satoshi text-[14px] sm:text-[16px] opacity-60 text-nowrap"
              }
            >
              Terms & Conditions
            </span>
            <span
              className={
                "font-satoshi text-[14px] sm:text-[16px] opacity-60 text-nowrap"
              }
            >
              Privacy Policy
            </span>
          </div>

          <div className={"flex flex-col gap-[16px] flex-1"}>
            <span
              className={"font-satoshi font-medium text-[14px] tracking-[3px]"}
            >
              FAQ
            </span>
            <span
              className={"font-satoshi text-[14px] sm:text-[16px] opacity-60"}
            >
              Account
            </span>
            <span
              className={
                "font-satoshi text-[14px] sm:text-[16px] opacity-60 text-nowrap"
              }
            >
              Manage Deliveries
            </span>
            <span
              className={"font-satoshi text-[14px] sm:text-[16px] opacity-60"}
            >
              Orders
            </span>
            <span
              className={"font-satoshi text-[14px] sm:text-[16px] opacity-60"}
            >
              Payment
            </span>
          </div>

          <div className={"flex flex-col gap-[16px] flex-1"}>
            <span
              className={"font-satoshi font-medium text-[14px] tracking-[3px]"}
            >
              Resources
            </span>
            <span
              className={
                "font-satoshi text-[14px] sm:text-[16px] opacity-60 text-nowrap"
              }
            >
              Free eBook
            </span>
            <span
              className={
                "font-satoshi text-[14px] sm:text-[16px] opacity-60 text-nowrap"
              }
            >
              Development Tutorial
            </span>
            <span
              className={
                "font-satoshi text-[14px] sm:text-[16px] opacity-60 text-nowrap"
              }
            >
              Ho to - blog
            </span>
            <span
              className={
                "font-satoshi text-[14px] sm:text-[16px] opacity-60 text-nowrap"
              }
            >
              Youtube playlist
            </span>
          </div>
        </div>
      </div>

      <div className={"flex flex-col gap-[16px]"}>
        <hr className={"bg-black h-[2px] opacity-10 "} />

        <div
          className={
            "flex flex-col sm:flex-row justify-between items-center gap-[16px]"
          }
        >
          <span className={"font-satoshi text-[14px] opacity-60"}>
            shop.com © 2000-2021, All rights reserved
          </span>
          <div className={"flex gap-[10px]"}>
            <img src="/assets/svgs/visaCard.svg" alt="visa car image" />
            <img src="/assets/svgs/masterCard.svg" alt="master card image" />
            <img src="/assets/svgs/paypalCard.svg" alt="paypal card image" />
            <img
              src="/assets/svgs/appelpayCard.svg"
              alt="apple pay card image"
            />
            <img
              src="/assets/svgs/googlepayCard.svg"
              alt="google pay card image"
            />
          </div>
        </div>
      </div>

      <div
        className={
          "bg-black pt-[32px] sm:pt-[2%] px-[24px] sm:px-[3%] pb-[28px] sm:pb-[2%] rounded-[20px] flex flex-col gap-[32px] sm:flex-row sm:gap-[10%] " +
          "absolute top-0 left-[4%] right-[4%] transform -translate-y-1/2 items-center justify-between"
        }
      >
        <span
          className={
            "text-white font-integral font-bold text-[32px] sm:text-[40px] leading-[35px] max-w-[551px] flex-1"
          }
        >
          STAY UPTO DATE ABOUT OUR LATEST OFFERS
        </span>

        <div
          className={
            "flex flex-col gap-[12px] flex-1 w-full sm:max-w-[349px] sm:w-auto"
          }
        >
          <div className="relative">
            <input
              type="text"
              placeholder="Enter your email address"
              className={
                "w-full py-[10px] pl-10 pr-4 rounded-full bg-white font-satoshi text-[14px]"
              }
            ></input>
            <img
              src="/assets/svgs/mailIcon.svg"
              alt="search icon"
              className="absolute left-3 top-1/2 transform -translate-y-1/2 opacity-[40%]"
            />
          </div>

          <button
            className={
              "font-satoshi font-medium text-[14px] bg-white rounded-full w-full py-[10px]"
            }
          >
            Subscribe to news letter
          </button>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
