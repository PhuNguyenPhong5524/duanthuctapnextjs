"use client"

import React, { useEffect } from 'react';
import { useCart } from "@/app/contexts/CartContext";





const oneusd = 24000;
const ProductCart: React.FC= () => {
    let imgGH = '/bg_gh.webp';
    const { cart, removeFromCart, increaseQuantity, decreaseQuantity } = useCart(); // Thêm hàm increaseQuantity và decreaseQuantity

    if (!cart || cart.length === 0) {
      return <div>
                   <div className="flex justify-center"> <img src={imgGH} alt={imgGH} /></div>
                    <h1 className="text-center mt-[-30px] text-[20px] font-bold font-sans text-[#e1e1e1]">Giỏ hàng trống...</h1>
            </div>;
    }

    const handleRemoveToCart = (id: number) =>{
       if (typeof window.confirm("Đăng nhập để thêm sản phẩm vào giỏ hàng !")) {
             removeFromCart(id);
       }
    }


    return (
        <div className="mb-[20px]">
            {cart.map((item) => (
            <div className="relative flex justify-between gap-[20px] mb-[30px]" key={item.id}>
                <div className="bg-[#fff] w-[105px] h-[105px] flex justify-center items-center cursor-pointer mr-[20px]  ">
                     <img src={item.hinh} alt={item.ten_sp} />
                </div>
                <div className="mb-[10px] w-[400px]  mx-[10px]"> 
                     <div className="text-[18px] font-bold">{item.ten_sp}</div>
                    <div className="relative flex gap-[5px] items-end mt-[5px]">
                        <div>
                            <p className="text-[18px] font-sans font-bold text-[#c2c2c2]"><del>AED {(item.gia / oneusd).toFixed(1)} </del></p>
                        </div>
                        <div className="mr-[25px]">
                        <p className="text-[18px] font-sans font-bold text-[black]">AED {((item.gia_km / oneusd) * (item.quantity || 1)).toFixed(1)}</p>

                        </div>
                    </div>
                    <div className="mt-[9px] flex gap-[10px]">
                        {/* Nút giảm số lượng */}
                        <div
                            onClick={() => decreaseQuantity(item.id)}
                            className="flex items-center justify-center p-[5px] w-[38px] font-semibold text-[#000] bg-[#f1f1f1] h-[31px] hover:border-2 cursor-pointer hover:bg-[#fff] hover:text-[black]"
                        >
                            <i className="fa-solid fa-minus"></i>
                        </div>

                        {/* Hiển thị số lượng */}
                        <input
                            type="number"
                            value={item.quantity}
                            readOnly
                            className="flex items-center justify-center p-[5px] w-[38px] font-semibold text-[#000] border-[black] placeholder:text-[black] bg-[#fff] h-[31px] border-2 cursor-pointer"
                        />

                        {/* Nút tăng số lượng */}
                        <div
                            onClick={() => increaseQuantity(item.id)}
                            className="flex items-center justify-center p-[5px] w-[38px] font-semibold text-[#000] bg-[#f1f1f1] h-[31px] hover:border-2 cursor-pointer hover:bg-[#fff] hover:text-[black]"
                        >
                            <i className="fa-solid fa-plus"></i>
                        </div>
                    </div>
                </div>
                <div>
                    <button
                        onClick={() => handleRemoveToCart(item.id)}
                        className="flex justify-center items-center w-[145px] h-[49px] bg-[#fff] text-[#000] font-sans font-bold border-2 border-[#000] hover:bg-[#000] hover:text-[#fff] hover:border-[#000] cursor-pointer"
                    >
                        REMOVE
                    </button>
                </div>
                <hr className="absolute w-[100%] bottom-0 translate-y-[12px]" />
            </div>
            ))}
        </div>
    );
}

export default ProductCart;

