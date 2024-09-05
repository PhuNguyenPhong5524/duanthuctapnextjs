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
import { getapiDataProductNew } from "@/app/utils/axiosIntance";
import {ButtonAddPD} from "@/app/component/Btton/buttonadd";
import { useCart } from "@/app/contexts/CartContext";
import IProductDetail from "@/app/types/inrterfaceProductDetail";

const  SlideProduct2: React.FC = () => {
   const [productnew,setproductnew] = useState<IProductDetail[]>([]);
   const { addToCart } = useCart();
   useEffect(() => {
     const fecthData = async () =>{
       const data = await getapiDataProductNew();
       setproductnew(data);
     }
       fecthData();
   },[])
   const handleAddToCart = (product: IProductDetail) => {
    if (productnew) {
      addToCart({...product, quantity: 1 });
    }
  };
    
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
          <CarouselItem key={sp.id} className="md:basis-1/2 lg:basis-1/4 ">
            <div className="px-[9px] relative">
                <div className="relative group z-12">
                    <div className="absolute flex justify-center items-center text-[#fff] text-[13px] w-[61px] h-[25px] bg-[black] ml-[-8.5px] mt-[15px]">Sale!</div>
                    <div className= " mt-[41.5px] absolute translate-x-[-11px] w-0 h-0 border-l-[12px] border-l-transparent tranform rotate-[270deg] border-r-[0] border-r-transparent border-b-[8px] border-b-[gray]"></div>
                </div>
                <div className=" z-10 group bg-[#fff] h-[370px] w-[248px] shadow-none mb-[10px] overflow-hidden hover:shadow-[0px_2px_24px_rgba(139,146,153,0.2)] "  key={sp.id}>
              
                    <div className=" flex justify-center h-[260px] ">
                        <div className="flex justify-center items-center"><img src={sp.hinh} alt={sp.ten_sp} className="h-[110px] w-[120px] transition-transform ease-in-out transform duration-300 group-hover:scale-[120%]" /> </div>       
                        <div className="absolute ml-[-160px] mt-[220px] text-[#fff] text-[10px] w-[66px] h-[24px] bg-[black] flex justify-center items-center font-bold">CATEGORY</div>
                    </div>
                    <div>
                        <Link href={`/view/client/detailpage/${sp.id}`} className="cursor-pointer hover:text-[#93dcdd]" ><p className="text-[15px] px-[10px] font-sans font-bold pl-[8px] py-[10px]">{sp.ten_sp}</p></Link>
                        <p className="text-[11px] pl-[8px] translate-y-[-15px] font-sans font-medium">BRAND</p>
                        <div className="relative flex gap-[5px] mx-[5px] items-center translate-y-[-12px]">
                            <div>
                                <p className="text-[12px] font-sans font-bold text-[#c2c2c2]"> <del>AED {(sp.gia / oneusd).toFixed(1)}</del></p>
                                {/* <p className="absolute translate-y-[-11px] border-[1.5px] w-[67px] ml-[-1px] bg-[#464646]"></p> */}
                            </div>
                            <div className=" ml-[5px]">
                                <p className="text-[13.5px] font-sans font-bold text-[black]">AED {(sp.gia_km / oneusd).toFixed(1)}</p>
                            </div>
                            <div className="absolute right-[20px] border-2 border-[#000] text-[12px] p-[3px] font-bold ">{(Math.round(((sp.gia - sp.gia_km)/sp.gia)*100))} % OFF</div> 
                        </div>
                      <div onClick={() => handleAddToCart(sp)}><ButtonAddPD />  </div>
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


export default  SlideProduct2;