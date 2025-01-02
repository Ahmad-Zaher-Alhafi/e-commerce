import React from 'react'

const SignUpHeader = () => {
    return (
        <div className={"signUpHeader w-full h-[38px] flex justify-between items-center px-[100px] py-[12px] bg-black "}>
            <div className={"font-satoshi"}>up and get 20% off to your first order. Sign Up Now</div>
            <img src="/assets/svgs/cross.svg" alt="cross icon"/>
        </div>
    )
}
export default SignUpHeader
