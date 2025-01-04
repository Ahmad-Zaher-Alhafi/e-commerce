import React from 'react'
import Rate from "@/app/components/Rate";

const Product = ({
                     name = "Product",
                     rate = 4.5,
                     price = 232,
                     imgUrl = "https://th.bing.com/th/id/OIP.yVFELyec8W3aJSAdeHn4rwHaE8?rs=1&pid=ImgDetMain",
                     salePercent = 20
                 }: { name: string, rate: number, price: number, imgUrl: string, salePercent?: number }) => {

    const finalPrice = salePercent ? Math.floor(price - (price * salePercent / 100)) : price;

    return (
        <div className={"flex flex-col"}>
            <img src={imgUrl} alt="product image"
                 className={"h-[200px] sm:h-[298px] rounded-[13px] sm:rounded-[20px] border-2 border-[#F0EEED]"}/>

            <span className={"font-satoshi font-bold text-[16px] sm:text-[20px]"}>{name}</span>

            <Rate rate={rate} showRateNumber={true}></Rate>

            <div className={"flex gap-[5px] sm:gap-[12px] items-center"}>
                <span className={"font-satoshi font-bold text-[20px] sm:text-[24px]"}>${finalPrice}</span>

                {salePercent &&
                    <div className={"flex gap-[5px] sm:gap-[12px] items-center"}>
                        <span
                            className={`font-satoshi font-bold text-[20px] sm:text-[24px] ${salePercent && "line-through"} ${salePercent && "opacity-40"}`}>${price}</span><span
                        className={"font-satoshi font-bold text-[10px] sm:text-[12px] text-[#FF3333] bg-[#FF3333] bg-opacity-10 px-[8px] py-[3px] rounded-full"}>{salePercent}%</span>
                    </div>
                }
            </div>
        </div>
    )
}
export default Product
