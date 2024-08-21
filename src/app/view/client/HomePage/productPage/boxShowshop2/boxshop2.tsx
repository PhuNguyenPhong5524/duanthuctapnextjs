import { ButtonShopNow } from "@/app/component/Btton/Btton";




export default function BoxShowshopp() {
    let img2='https://marketingtoancau.com/files/product/thiet-ke-banner-chuyen-nghiep-cho-cua-hang-dien-thoai-nhat-nam-mobile-dqovvmz5.jpg';
    return (
        <div className="relative "> 
                  <div className="bg-[#e3e3e3] flex justify-center h-[342px] relative overflow-hidden">
                {/* <i className="fa-regular fa-image text-[#d5d5d5] text-[70px] pt-[110px] " ></i> */}
                <img src={img2} alt={img2} className="w-full mt-[-12px] h-[50vh] object-cover hover:calc(100% + 10px)"/>
            
            </div>
            <div className="flex justify-center">
                <ButtonShopNow />
            </div>
        </div>
        
    );
}