import { ButtonShopNow } from "@/app/component/Btton/Btton";


export default function BoxShowshop() {
    let img1='https://img.pikbest.com/origin/09/06/37/125pIkbEsTPm3.jpg!w700wp';
    return (
        <div className="relative "> 
            <div className="bg-[#e3e3e3] flex justify-center h-[342px] relative overflow-hidden">
                {/* <i className="fa-regular fa-image text-[#d5d5d5] text-[70px] pt-[110px] " ></i> */}
                <img src={img1} alt={img1} className="w-full mt-[-12px] h-[50vh] object-cover hover:calc(100% + 10px)"/>
            
            </div>
            <div className="flex justify-center">
                <ButtonShopNow />
            </div>
        </div>
        
    );
}

