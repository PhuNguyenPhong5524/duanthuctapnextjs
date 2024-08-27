"use client"

import Link from "next/link";
import * as React from "react";
import { useEffect, useState } from "react";




import {

  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { classname } from "@/app/types/classname";
import { getapiDataProductNew } from "@/app/utils/axiosIntance";

export function SlideProduct() {
   const [productnew,setproductnew] = useState<classname[]>([]);
   useEffect(() => {
     const fecthData = async () =>{
       const data = await getapiDataProductNew();
       setproductnew(data);
       console.log(data);
     }
       fecthData();
   })
    
const oneusd = 24000;
  return (
    <Carousel
      opts={{
        align: "start",
      }}
       className="w-full max-w-5xl "
    >
      <CarouselContent>
        {productnew.map((sp) => (
          <CarouselItem key={sp.id} className="md:basis-1/2 lg:basis-1/4">
            <div className="p-1">
                <div className="bg-[#fff] h-[360px] w-[240px] shadow-none mb-[10px] hover:shadow-[0px_8px_24px_rgba(139,146,153,0.2)] hover"  key={sp.id}>
                 
                    <div className=" flex justify-center h-[260px] ">
                        <div className="flex justify-center items-center"><img src={sp.hinh} alt={sp.ten_sp} className="h-[130px]" /> </div>       
                        <div className="absolute ml-[-160px] mt-[220px] text-[#fff] text-[10px] w-[66px] h-[24px] bg-[black] flex justify-center items-center font-bold">CATEGORY</div>
                    </div>
                    <div>
                        <Link href={`/view/client/detailpage/${sp.id}`} className="cursor-pointer hover:text-[#93dcdd]" ><p className="text-[15px] font-sans font-bold pl-[8px] py-[10px]">{sp.ten_sp}</p></Link>
                        <p className="text-[11px] pl-[8px] translate-y-[-15px] font-sans font-medium">BRAND</p>
                        <div className="relative flex gap-[5px] mx-[8px] items-center translate-y-[-12px]">
                            <div>
                                <p className="text-[12px] font-sans font-bold text-[#c2c2c2]">AED {(sp.gia / oneusd).toFixed(1)}</p>
                                <p className="absolute translate-y-[-11px] border-[1.5px] w-[67px] ml-[-1px] bg-[#464646]"></p>
                            </div>
                            <div className="mr-[18px] ml-[5px]">
                                <p className="text-[14px] font-sans font-bold text-[black]">AED {(sp.gia_km / oneusd).toFixed(1)}</p>
                            </div>
                            <div className="border-2 border-[#000] text-[10px] p-[1px] font-bold">{(Math.round(((sp.gia - sp.gia_km)/sp.gia)*100))} % OFF</div> 
                        </div>
                        
                    </div>
                </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
     
      <CarouselPrevious className="absolute ml-[-28px] left-0 bg-[#e8e8e8] text-[black] h-[80px] w-[25px] flex items-center rounded-[5px] cursor-pointer" />
      <CarouselNext className="absolute mr-[-35px] right-0 bg-[#e8e8e8] text-[black] h-[80px] w-[25px] flex items-center rounded-[5px] cursor-pointer"></CarouselNext>
 
    </Carousel>
  )
}
