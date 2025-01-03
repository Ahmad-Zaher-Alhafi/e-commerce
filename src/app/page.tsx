import WelcomeSection from "@/app/components/WelcomeSection";
import Products from "@/app/components/Products";

export default function Home() {
    return (
        <div className={"home"}>
            <WelcomeSection></WelcomeSection>
            <div className={"flex flex-col gap-[40px] sm:gap-[64px] pt-[50px]"}>
                <Products title={"New Arrivals"}></Products>
                <div className={"custom-paddingX"}>
                    <hr className={"bg-black h-[1px]"}/>
                </div>
                <Products title={"Top Selling"}></Products>
            </div>
        </div>
    );
}
