import { ButtonShopNow } from "@/app/Btton/Btton";


export default function BoxShowshop() {
    return (
        <div className="relative "> 
            <div className="bg-[#e3e3e3] flex justify-center h-[342px]">
                <i className="fa-regular fa-image text-[#d5d5d5] text-[70px] pt-[110px] "></i>
            </div>
            <div className="flex justify-center">
                <ButtonShopNow />
            </div>
        </div>
        
    );
}