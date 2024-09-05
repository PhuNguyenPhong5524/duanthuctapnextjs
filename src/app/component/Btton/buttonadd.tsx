"use client"

import { toast } from "sonner"

export function ButtonAddPD() {
  return (
    <div  className="absolute ml-[40%] text-[24px] mt-[-250px] px-[10px] py-[6px] bg-[#fff] border-none rounded-[10px] hidden  transition-transform ease-in-out transform duration-300 group-hover:inline ">
        <button  className="relative"
        onClick={() =>
            toast("Thông báo", {
            description: "Sản phẩm đã thêm thành công!",
            duration: 2000,
            className:"w-[72%] ml-[85px] text-[15px] font-bold font-sans", 
            })
        }
        > 
        <i className="fa-solid fa-cart-plus"></i>
        </button>
    </div>
  )
}
