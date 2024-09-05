import { ButtonShopNow } from "@/app/component/Btton/Btton";




export default function BoxShowshopp() {
    let img2='https://5.imimg.com/data5/SELLER/Default/2024/1/381737223/LP/SG/KG/28026942/hp-notebook-pc-340s-g7-14inch-laptop.jpg';
    return (
        <div className="relative group"> 
                  <div className="bg-[#e3e3e3] flex justify-center h-[360px] relative overflow-hidden">
                <img src={img2} alt={img2} className="w-full mt-[-12px] h-[52vh] group-hover:scale-105 transition-all duration-500"/>
            </div>
            <div className="flex justify-center">
                <ButtonShopNow />
            </div>
        </div>
        
    );
}