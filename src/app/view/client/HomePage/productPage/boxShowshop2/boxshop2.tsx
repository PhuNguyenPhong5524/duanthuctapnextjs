import { ButtonShopNow } from "@/app/component/Btton/Btton";




export default function BoxShowshopp() {
    let img2='https://cdn.dribbble.com/users/5895311/screenshots/15912084/media/51b16334aec5670636512179128d0ada.jpg?resize=400x0';
    return (
        <div className="relative "> 
                  <div className="bg-[#e3e3e3] flex justify-center h-[342px] relative overflow-hidden">
                {/* <i className="fa-regular fa-image text-[#d5d5d5] text-[70px] pt-[110px] " ></i> */}
                <img src={img2} alt={img2} className="w-full mt-[-12px] h-[50vh] "/>
            
            </div>
            <div className="flex justify-center">
                <ButtonShopNow />
            </div>
        </div>
        
    );
}