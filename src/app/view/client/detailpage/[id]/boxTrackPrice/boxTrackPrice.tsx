"use client"

import { ButtonTRACKPRICE } from "@/app/component/Btton/Btton"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"
import * as React from "react";
import IProductDetail from './../../../../../types/inrterfaceProductDetail';


interface MainDetailProps {
  productdetail: IProductDetail;
}


 const BoxTrackPrice: React.FC<MainDetailProps> = ({ productdetail }) =>  {
  const oneusd:number = 24000;
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="h-[10px] border-none w-[70px] mt-[2px]"><p className="underline font-extrabold hover:text-[blue]">Track Rate</p></Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[479px] h-[529px] pt-[50px]">
            <div className="mx-[10px]">
                    <div className="flex gap-[20px] mb-[10px]">
                         <div className="bg-[#ffff] w-[117px] h-[108px] flex justify-center items-center cursor-pointer"><img src={productdetail.hinh} alt={productdetail.ten_sp} /></div>
                        <div className="mb-[10px]">
                            <p className="text-[14px] mb-[5px] font-bold">{productdetail.ten_loai}</p>
                            <p className="text-[22px] font-bold">{productdetail.ten_sp}</p>
                            <div className="relative flex gap-[5px] items-center mt-[22px]">
                                <div>
                                    <p className="text-[12.2px] font-sans font-bold text-[#c2c2c2]"><del>AED {(productdetail.gia / oneusd).toFixed(1)}</del></p>
                                </div>
                                <div className="mr-[25px]">
                                    <p className="text-[14px] font-sans font-bold text-[black]">AED {(productdetail.gia_km / oneusd).toFixed(1)}</p>
                                </div>
                                <div className="border-2 border-[#000] text-[15px] font-[700] p-[2px] w-[95px] h-[32px] flex justify-center items-center"><p>{(Math.round(((productdetail.gia - productdetail.gia_km)/productdetail.gia)*100))}% OFF</p></div>
                            </div>
                        </div>
                    </div>
                    <div className="mb-[20px]">
                        <div className="relative">
                            <label className="text-[15px] font-semibold">Desired price</label>
                            <div><input type="text" placeholder="Enter Desired price here" className="border-2 rounded-0 text-[14px] border-[black] h-[50px] w-[180px] pl-[10px] mb-[8px] placeholder:text-[#dadada] pt-[5px]" /></div>
                        </div>
                        <div className="relative">
                            <label className="text-[14px] font-semibold">Email Address</label>
                            <div><input type="text" placeholder="Enter Desired price here" className="border-2 rounded-0 text-[14px] border-[black] h-[50px] w-full pl-[10px] mb-[8px] placeholder:text-[#dadada] pt-[5px]" /></div>
                        </div>
                    </div>
                    <p className="text-justify font-sans font-bold">When price of this product hits your desired price, we will notify you by sending an email.</p>
                    <div className="flex justify-center mt-[25px]"  ><ButtonTRACKPRICE/></div>
            </div>
      </DialogContent>
    </Dialog>
  )
}

export default BoxTrackPrice;