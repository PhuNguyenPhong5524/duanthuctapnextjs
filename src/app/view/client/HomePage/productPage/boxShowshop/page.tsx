import { ButtonShopNow } from "@/app/component/Btton/Btton";


export default function BoxShowshop() {
    let img1='https://www.creativehatti.com/wp-content/uploads/edd/2023/04/Laptop-electronic-gadgets-banner-template-poster-12-large.jpg';
    return (
        <div className="relative "> 
            <div className="bg-[#e3e3e3] flex justify-center h-[342px] relative overflow-hidden">
                {/* <i className="fa-regular fa-image text-[#d5d5d5] text-[70px] pt-[110px] " ></i> */}
                <img src={img1} alt={img1} className="w-full mt-[-12px] h-[50vh] "/>
            
            </div>
            <div className="flex justify-center">
                <ButtonShopNow />
            </div>
        </div>
        
    );
}

