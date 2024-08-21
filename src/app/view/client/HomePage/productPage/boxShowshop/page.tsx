import { ButtonShopNow } from "@/app/component/Btton/Btton";



const imageshowshop = [
    {src:"https://img.pikbest.com/origin/09/06/37/125pIkbEsTPm3.jpg!w700wp"},
    {src1:"https://marketingtoancau.com/files/product/thiet-ke-banner-chuyen-nghiep-cho-cua-hang-dien-thoai-nhat-nam-mobile-dqovvmz5.jpg"}
];




export function BoxShowshop() {
    return (
        <div className="relative "> 
            <div className="bg-[#e3e3e3] flex justify-center h-[342px] relative overflow-hidden">
                {/* <i className="fa-regular fa-image text-[#d5d5d5] text-[70px] pt-[110px] " ></i> */}
                <img src={imageshowshop[0].src} alt={imageshowshop[0].src} className="w-full mt-[-12px] h-[50vh] object-cover hover:calc(100% + 10px)"/>
            
            </div>
            <div className="flex justify-center">
                <ButtonShopNow />
            </div>
        </div>
        
    );
}

export function BoxShowshop2() {
    return (
        <div className="relative "> 
                  <div className="bg-[#e3e3e3] flex justify-center h-[342px] relative overflow-hidden">
                {/* <i className="fa-regular fa-image text-[#d5d5d5] text-[70px] pt-[110px] " ></i> */}
                <img src={imageshowshop[1].src1} alt={imageshowshop[1].src1} className="w-full mt-[-12px] h-[50vh] object-cover hover:calc(100% + 10px)"/>
            
            </div>
            <div className="flex justify-center">
                <ButtonShopNow />
            </div>
        </div>
        
    );
}