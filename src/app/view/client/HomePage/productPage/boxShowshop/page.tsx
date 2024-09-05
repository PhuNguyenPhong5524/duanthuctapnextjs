import { ButtonShopNow } from "@/app/component/Btton/Btton";


export default function BoxShowshop() {
    let img1='https://m.media-amazon.com/images/I/61sWhs4CI2L._SL1000_.jpg';
    return (
        <div className="relative group "> 
            <div className="bg-[#e3e3e3] flex justify-center h-[360px] relative overflow-hidden">
                <img src={img1} alt={img1} className="w-full mt-[-12px] h-[52vh] group-hover:scale-105 transition-all duration-500"/>
            </div>
            <div className="flex justify-center">
                <ButtonShopNow />
            </div>
        </div>
        
    );
}

