
   
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
   
  export function DropdownMenuDemo() {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild className="w-[120px] ">
          <Button variant="outline" className="border-none outline-none font-bold text-[#555555]">ALL BRANDS <i className="fa-solid fa-chevron-down text-black ml-[5px]"></i></Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className=" translate-x-[62px] mt-[-10px] w-[232px] pl-[20px]">
          <DropdownMenuLabel className="text-[14px] text-[#3e3e3e] font-semibold hover:underline hover:text-[#000] cursor-pointer" ><Link href="#/">Brand Name</Link></DropdownMenuLabel>
          <DropdownMenuSeparator className="bg-[#e5e5e5]" />
          <DropdownMenuLabel className="text-[14px] text-[#3e3e3e] font-semibold hover:underline hover:text-[#000] cursor-pointer" ><Link href="#/">Brand Name</Link></DropdownMenuLabel>
          <DropdownMenuSeparator className="bg-[#e5e5e5]" />
          <DropdownMenuLabel className="text-[14px] text-[#3e3e3e] font-semibold hover:underline hover:text-[#000] cursor-pointer" ><Link href="#/">Brand Name</Link></DropdownMenuLabel>
          <DropdownMenuSeparator className="bg-[#e5e5e5]" />
          <DropdownMenuLabel className="text-[14px] text-[#3e3e3e] font-semibold hover:underline hover:text-[#000] cursor-pointer" ><Link href="#/">Brand Name</Link></DropdownMenuLabel>
          <DropdownMenuSeparator className="bg-[#e5e5e5]" />
          <DropdownMenuLabel className="text-[14px] text-[#3e3e3e] font-semibold hover:underline hover:text-[#000] cursor-pointer" ><Link href="#/">Brand Name</Link></DropdownMenuLabel>
          <DropdownMenuSeparator className="bg-[#e5e5e5]" />
          <DropdownMenuLabel className="text-[14px] text-[#3e3e3e] font-semibold hover:underline hover:text-[#000] cursor-pointer" ><Link href="#/">Brand Name</Link></DropdownMenuLabel>
          <DropdownMenuSeparator className="bg-[#e5e5e5]" />
          <DropdownMenuLabel className="text-[14px] text-[#3e3e3e] font-semibold hover:underline hover:text-[#000] cursor-pointer" ><Link href="#/">Brand Name</Link></DropdownMenuLabel>
          <DropdownMenuSeparator className="bg-[#e5e5e5]" />
          <DropdownMenuLabel className="text-[14px] text-[#3e3e3e] font-semibold hover:underline hover:text-[#000] cursor-pointer" ><Link href="#/">Brand Name</Link></DropdownMenuLabel>
          <DropdownMenuSeparator className="bg-[#e5e5e5]" />
          <DropdownMenuLabel className="text-[14px] text-[#3e3e3e] font-semibold hover:underline hover:text-[#000] cursor-pointer" ><Link href="#/">Brand Name</Link></DropdownMenuLabel>
          <DropdownMenuSeparator className="bg-[#e5e5e5]" />
          <DropdownMenuLabel className="text-[14px] text-[#3e3e3e] font-semibold hover:underline hover:text-[#000] cursor-pointer" ><Link href="#/">Brand Name</Link></DropdownMenuLabel>
          <DropdownMenuSeparator className="bg-[#e5e5e5]" />
        </DropdownMenuContent>
        
      </DropdownMenu>
    )
  }