"use client"
  import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect, useState } from "react";
import ICategory from "@/app/types/interfaceCategory";
import { getapiDataCategory } from "@/app/utils/axiosIntance";
   
  export function DropdownMenuDemo() {
    const [category, setCategory] = useState<ICategory[]>([]);
    useEffect(() => {
        const fetchData = async () =>{
           const data = await getapiDataCategory();
           setCategory(data);
        }
        fetchData();
    })

    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild className="w-[120px] ">
          <Button variant="outline" className="border-none outline-none font-bold text-[#555555]">ALL BRANDS <i className="fa-solid fa-chevron-down text-black ml-[5px]"></i></Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className=" translate-x-[62px] mt-[-10px] w-[232px] pl-[20px]">
         <>
         {
            category.map((ct) => (
              <div key={ct.id}>
                  <DropdownMenuLabel className="text-[14px] text-[#3e3e3e] font-semibold hover:underline hover:text-[#000] cursor-pointer" ><Link href={`/view/client/product/${ct.id}`}>{ct.ten_loai}</Link></DropdownMenuLabel>
                  <DropdownMenuSeparator className="bg-[#e5e5e5]" />
              </div>
            ))
          }
         </>

        </DropdownMenuContent>
        
      </DropdownMenu>
    )
  }