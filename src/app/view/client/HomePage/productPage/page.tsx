import Link from "next/link";
import BannerSmall1 from "./bannerSmall1/page";
import BannerSmall2 from "./bannerSmall2/page";
import BoxProduct from "./boxProduct/page";
import ViewUserPage from "./viewUser/viewus";
import BoxShowshop from "./boxShowshop/page";
import BoxShowshopp from "./boxShowshop2/boxshop2";
import SlideProduct from "./slideProduct/page";


export default function ProductPage() {
    return (
        <div className="" style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <div className=" translate-x-[-121%] my-[30px]">
                <div className="flex items-end gap-[10px]"><h2 className="text-[28px] font-bold mr-[10px]">NEW ARRIVALS</h2> <Link href="#" className="text-[16px] font-extrabold text-black underline ">SEE ALL</Link></div>
            </div>
            <div className="flex justify-between  gap-[15px] mb-[20px] ">
                    <div className="bg-[gray] w-[505px] h-[342px]">
                        <BoxShowshop />
                    </div>
                    <div className=" w-[505px] h-[342px] flex justify-between ">
                       <BoxProduct />
                       <BoxProduct />
                    </div>
                  
            </div>
            <div className="flex justify-between  gap-[15px] mb-[20px] ">
                    <div className=" w-[505px] h-[342px] flex justify-between ">
                            <BoxProduct />
                            <BoxProduct />
                    </div>
                    <div className="bg-[gray] w-[505px] h-[342px]">
                        <BoxShowshopp />
                    </div>
            </div>
            
               <div className="translate-x-[-121%] my-[30px]">
                <div className="flex items-end gap-[10px]"><h2 className="text-[28px] font-bold mr-[10px]">NEW ARRIVALS</h2> <a href="#" className="text-[16px] font-extrabold text-black underline ">SEE ALL</a></div>
            </div>
            <div className=" relative flex justify-between gap-[15px] items-center mb-[30px]  ">
                    <SlideProduct />
                    {/* <div className="absolute bg-[#cccccc] h-[80px] w-[25px] flex items-center pl-[8px] cursor-pointer ml-[-35px]"><i className="fa-solid fa-chevron-left my-auto text-[#fff]"></i></div>
                    <div className="absolute bg-[#cccccc] right-0 h-[80px] w-[25px] flex items-center pl-[8px] cursor-pointer mr-[-35px]"><i className="fa-solid fa-chevron-right text-[#fff]"></i></div> */}
            </div> 
            <div  >
                <BannerSmall1 />
            </div>
            <div className=" translate-x-[-121%] my-[30px]">
                <div className="flex items-end gap-[10px]"><h2 className="text-[28px] font-bold mr-[10px]">NEW ARRIVALS</h2> <a href="#" className="text-[16px] font-extrabold text-black underline ">SEE ALL</a></div>
            </div>
            <div className=" relative flex justify-between gap-[15px]    items-center mb-[30px]  ">
                    <SlideProduct />
                    {/* <div className="absolute bg-[#cccccc] h-[80px] w-[25px] flex items-center pl-[8px] cursor-pointer ml-[-35px]"><i className="fa-solid fa-chevron-left my-auto text-[#fff]"></i></div>
                    <div className="absolute bg-[#cccccc] right-0 h-[80px] w-[25px] flex items-center pl-[8px] cursor-pointer mr-[-35px]"><i className="fa-solid fa-chevron-right text-[#fff]"></i></div> */}
            </div> 
            <div  >
                <BannerSmall2 />
            </div>
            <div className="translate-x-[-109%] my-[30px]">
                <div className="flex items-end gap-[10px]"><h2 className="text-[28px] font-bold mr-[10px]">AMBASSADORS</h2> <a href="#" className="text-[16px] font-extrabold text-black underline ">VIEW ALL</a></div>
            </div>
             <div className=" relative flex justify-between gap-[15px] items-center mb-[30px]  ">
                    <ViewUserPage />
                    <div className="absolute bg-[#cccccc] h-[80px] w-[25px] flex items-center pl-[8px] cursor-pointer ml-[-35px]"><i className="fa-solid fa-chevron-left my-auto text-[#fff]"></i></div>
                    <div className="absolute bg-[#cccccc] right-0 h-[80px] w-[25px] flex items-center pl-[8px] cursor-pointer mr-[-35px]"><i className="fa-solid fa-chevron-right text-[#fff]"></i></div>
            </div> 
        </div>
    );
}