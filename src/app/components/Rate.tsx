import React from 'react'

const Rate = ({rate, showRateNumber}: { rate: number, showRateNumber: boolean }) => {
    const startsCount = Math.floor(rate)
    const hasHalfStar = rate % 1 !== 0

    return (
        <div className={"flex gap-[5px]"}>
            {
                [...Array(startsCount)].map(() => {
                    return <img src={"/assets/svgs/star.svg"} alt={"star image"}
                                className={"w-[15px] sm:w-[18px]"}/>
                })
            }

            {
                hasHalfStar && <img src={"/assets/svgs/halfStar.svg"} alt={"half star image"}/>
            }

            {showRateNumber && <span className={"font-satoshi text-[12px] sm:text-[14px]"}>{rate}/<span
                className={"opacity-60"}>5</span></span>}

        </div>
    )
}

export default Rate
