import React from 'react'

const Product = ({
                     name = "Product",
                     rate = 4.5,
                     price = 232,
                     imgUrl = "https://th.bing.com/th/id/OIP.yVFELyec8W3aJSAdeHn4rwHaE8?rs=1&pid=ImgDetMain",
                     salePercent = 20
                 }: { name: string, rate: number, price: number, imgUrl: string, salePercent?: number }) => {
    const startsCount = Math.floor(rate)
    const hasHalfStar = rate % 1 !== 0
    const finalPrice = salePercent ? Math.floor(price - (price * salePercent / 100)) : price;

    return (
        <div className={"flex flex-col"}>
            <img src={imgUrl} alt="product image"
                 className={"h-[200px] sm:h-[298px] rounded-[13px] sm:rounded-[20px] border-2 border-[#F0EEED]"}/>

            <span className={"font-satoshi font-bold text-[16px] sm:text-[20px]"}>{name}</span>

            <div className={"flex gap-[5px]"}>
                {
                    [...Array(startsCount)].map((_, index) => {
                        return <img src={"/assets/svgs/star.svg"} alt={"star image"}
                                    className={"w-[15px] sm:w-[18px]"}/>
                    })
                }

                {
                    hasHalfStar && <img src={"/assets/svgs/halfStar.svg"} alt={"half star image"}/>
                }

                <span className={"font-satoshi text-[12px] sm:text-[14px]"}>{rate}/<span
                    className={"opacity-60"}>5</span></span>

            </div>

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
