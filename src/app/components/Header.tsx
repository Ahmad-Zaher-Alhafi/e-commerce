import React from 'react'

const Header = () => {
    return (
        <div
            className={"header h-[48px] flex justify-between gap-[40px] items-center custom-paddingX py-[40px] md:py-[48px]"}>
            <span className={"flex gap-[16px] items-center"}>
                <img src="/assets/svgs/dropDown.svg" alt="search icon"/>
                <span
                    className={"logo font-integral font-bold text-[25px] sm:text-[32px] translate-y-[-3px] sm:translate-y-[-4px]"}>SHOP.CO
                </span>
            </span>

            <ul className={"hidden sm:flex gap-[24px] items-center"}>
                <li><a href="" className={"font-satoshi"}>Shop</a></li>
                <li><a href="" className={"font-satoshi text-nowrap"}>On Sale</a></li>
                <li><a href="" className={"font-satoshi text-nowrap"}>New Arrivals</a></li>
                <li><a href="" className={"font-satoshi"}>Brands</a></li>
            </ul>

            <div className="relative hidden md:block flex-1">
                <input
                    type="text"
                    placeholder="Search for products..."
                    className=" pl-10 py-2 pr-4 border rounded-[62px] w-full bg-[#F0F0F0] font-satoshi"
                />
                <img
                    src="/assets/svgs/search.svg"
                    alt="search icon"
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 opacity-[40%]"
                />
            </div>


            <span className={"Icons flex justify-between items-center gap-[10px] flex-shrink-0"}>
                <img src="/assets/svgs/search.svg" alt="search icon" className={"md:hidden"}/>
                <img src="/assets/svgs/cart.svg" alt="cart icon"/>
                <img src="/assets/svgs/profile.svg" alt="profile icon"/>
            </span>
        </div>
    )
}

export default Header
