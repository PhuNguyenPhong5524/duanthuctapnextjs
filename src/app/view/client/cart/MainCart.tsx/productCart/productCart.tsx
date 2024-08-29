"use client"

import { ButtonRemoveCartPD } from "@/app/component/Btton/Btton";
import React from 'react';
import { useCart } from "@/app/contexts/CartContext";



const ProductCart: React.FC = () => {
    const { cart } = useCart();
  
    if (!cart || cart.length === 0) {
      return <div>Giỏ hàng trống</div>;
    }
  
    return (
        <div className="mb-[20px]">
            {cart.map((item) => (
            <div className="flex justify-between gap-[20px] mb-[10px]" key={item.id}>
                <div className="bg-[#fff] w-[105px] h-[105px] flex justify-center items-center cursor-pointer mr-[20px]  ">
                     <img src={item.hinh} alt={item.ten_sp} />
                </div>
                <div className="mb-[10px] w-[400px]  mx-[10px]"> 
                     <div className="text-[18px] font-bold">{item.ten_sp}</div>
                    <div className="relative flex gap-[5px] items-end mt-[5px]">
                        <div>
                            <p className="text-[18px] font-sans font-bold text-[#c2c2c2]">AED 32.00</p>
                            <p className="absolute translate-y-[-15px] border-[1.5px] w-[90px] ml-[-1px] bg-[#464646]"></p>
                        </div>
                        <div className="mr-[25px]">
                            <p className="text-[18px] font-sans font-bold text-[black]">AED 25.60</p>
                        </div>
                    </div>
                    <div className="mt-[9px] flex gap-[10px]">
                        <div className="flex items-center justify-center p-[5px] w-[38px] font-semibold text-[#000] bg-[#f1f1f1] h-[31px] hover:border-2 cursor-pointer hover:bg-[#fff] hover:text-[black]">
                            <i className="fa-solid fa-minus"></i>
                        </div>
                        <input type="number" placeholder="1" className="flex items-center justify-center p-[5px] w-[38px] font-semibold text-[#000] border-[black] placeholder:text-[black] bg-[#fff] h-[31px] border-2 cursor-pointer" />
                        <div className="flex items-center justify-center p-[5px] w-[38px] font-semibold text-[#000] bg-[#f1f1f1] h-[31px] hover:border-2 cursor-pointer hover:bg-[#fff] hover:text-[black]">
                            <i className="fa-solid fa-plus"></i>
                        </div>
                    </div>
                </div>
                <div>
                    <ButtonRemoveCartPD />
                </div>
                <hr />
            </div>
            ))}
      </div>
      
    );
  }
  
  export default ProductCart;
  
