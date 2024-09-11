"use client";
import React, { useEffect, useState } from "react";
import IProductDetail from "@/app/types/inrterfaceProductDetail";
import Link from "next/link";
import { getPDHot } from "@/app/utils/axiosIntance";
import { ButtonAddPD } from "@/app/component/Btton/buttonadd";
import { useCart } from "@/app/contexts/CartContext";

const oneusd = 24000;
export default function BoxProduct() {
    const [products, setProducts] = useState<IProductDetail[]>([]);
    const { addToCart } = useCart();
    useEffect(() => {
        const fetchProducts = async () => {
            const response = await getPDHot();
            setProducts(response);
        };
        fetchProducts();
    }, []);
    const handleAddToCart = (product: IProductDetail) => {
        if (products) {
          addToCart({...product, quantity: 1 });
        }
      };
    return (
      <>
        {products.filter(sp => sp.id_loai === 1).slice(0, 2).map((pd) => (
        <div className= "group bg-[#fff] h-[360px] w-[245px] shadow-none hover:shadow-[0px_8px_24px_rgba(139,146,153,0.2)] " key={pd.id}>
            <div className="relative flex justify-center items-center h-[260px] ">
                 <img src={pd.hinh} alt={pd.hinh} className="object-cover h-[110px] w-[120px] group-hover:scale-105 transition-all duration-300 group-hover:slate-y-[-10px] tranform trasition-all group-hover:border-[#fa2623]" />
                 <div className="absolute ml-[-160px] mt-[220px] text-[#fff] text-[10px] w-[66px] h-[24px] bg-[black] flex justify-center items-center font-bold">CATEGORY</div>
            </div>
            <div className="relative">
                <Link href={`/view/client/detailpage/${pd.id}`} className="cursor-pointer hover:text-[#93dcdd]" ><p className="text-[15px] font-sans font-bold px-[10px] pl-[8px] py-[10px]">{pd.ten_sp}</p></Link>
                <p className="text-[11px] pl-[8px] translate-y-[-15px] font-sans font-medium">BRAND</p>
                <div className="relative flex gap-[5px] mx-[8px] items-center translate-y-[-12px]">
                    <div>
                        <p className="text-[11px] font-sans font-bold text-[#c2c2c2]"><del>AED {(pd.gia / oneusd).toFixed(1)} </del></p>
                    </div>
                    <div className="mr-[25px]">
                        <p className="text-[13.5px] font-sans font-bold text-[black]">AED {(pd.gia_km / oneusd).toFixed(1)}</p>
                    </div>
                    <div className="border-2 border-[#000] text-[10px] p-[2px] font-semibold">30% OFF</div>
                </div>
                <div className="absolute ml-[40%] mt-[10px]" onClick={() => handleAddToCart(pd)}><ButtonAddPD />  </div>
            </div>
            
        </div>
        ))}
      </>
       

    );
}



