"use client"

import Link from "next/link";





export default function BoxProductPage() {

    return (
        <div className="bg-[#fff] h-[342px] w-[240px] shadow-none mb-[10px] hover:shadow-[0px_8px_24px_rgba(139,146,153,0.2)]">

            <div>
                <div className="absolute flex justify-center items-center text-[#fff] text-[13px] w-[61px] h-[25px] bg-[black] ml-[-9.5px] mt-[15px]">New</div>
                <div className= "ml-[16px] mt-[42.4px] absolute translate-x-[-28px] w-0 h-0 border-l-[15px] border-l-transparent tranform rotate-[270deg] border-r-[0] border-r-transparent border-b-[10px] border-b-[gray]"></div>
            </div>
            <div className=" bg-[#e3e3e3] flex justify-center h-[260px] ">
                 <i className="fa-regular fa-image text-[#d5d5d5] text-[70px] pt-[90px] "></i>
                 <div className="absolute ml-[-160px] mt-[220px] text-[#fff] text-[10px] w-[66px] h-[24px] bg-[black] flex justify-center items-center font-bold">CATEGORY</div>
            </div>
            <div>
                <Link href="/view/client/detailpage" className="cursor-pointer hover:text-[#93dcdd]" ><p className="text-[18px] font-sans font-bold pl-[8px] py-[10px]">Product Title Goes Here</p></Link>
                <p className="text-[11px] pl-[8px] translate-y-[-15px] font-sans font-medium">BRAND</p>
                <div className="relative flex gap-[5px] mx-[8px] items-center translate-y-[-12px]">
                    <div>
                        <p className="text-[14px] font-sans font-bold text-[#c2c2c2]">AED 32.00</p>
                        <p className="absolute translate-y-[-12px] border-[1.5px] w-[71px] ml-[-1px] bg-[#464646]"></p>
                    </div>
                    <div className="mr-[25px]">
                        <p className="text-[14px] font-sans font-bold text-[black]">AED 25.60</p>
                    </div>
                    <div className="border-2 border-[#000] text-[10px] p-[2px] font-semibold">30% OFF</div> 
                </div>
                
            </div>
        </div>
    );
}