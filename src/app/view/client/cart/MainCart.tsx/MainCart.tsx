"use client"

import Link from "next/link";
import ProductCart from "./productCart/productCart";
import { useCart } from "@/app/contexts/CartContext";


const MainCart: React.FC = () => {
    const { cart , totalPrice } = useCart();
    const totalP = totalPrice();

    return (
        <div className="bg-[#f1f1f1] mt-[-30px] pb-[10px]" >
            <div className="pt-[40px] grid justify-center">
                <div className="translate-x-[10px]"><a href="#" className="text-[12px] font-extrabold ">Home</a> <i className="fa-solid fa-chevron-right text-[9px] font-extrabold"></i> <a href="#" className="text-[12px] font-extrabold ">Cart</a> </div>
                <h2 className="text-[28px] mx-[8px] font-sans mt-[10px] font-bold">CART</h2>
                <div className="h-auto w-[1025px] ml-[10px] mt-[20px] mb-[15px] flex justify-between">
                <div className="bg-[#fff] h-full w-[62%] pt-[45px] px-[20px]">
                    <ProductCart  />
                </div>
                <div className="bg-[#fff] h-[512px] w-[35%] pt-[45px] px-[20px]">
                    <h2 className="text-[23px] mx-[8px] font-sans font-bold mb-[10px]">Add Promo Code</h2>
                    <input className=" mx-[8px] w-[240px] h-[48px] rounded-none border-2 border-[black] pl-[10px]" />
                    <button className=" mx-[8px] h-[49px] mt-[10px] mb-[20px] w-[130px] bg-[black] hover:border-2 text-[#fff] font-bold hover:bg-[#fff] hover:text-[black] hover:border-[black]">ADD</button>
                    <h2 className="text-[23px] mx-[8px] font-sans font-bold mb-[10px]">Summary</h2>
                    <div className="mx-[8px]">
                        <div className="flex justify-between my-[10px]">
                            <p className="text-[14px] font-semibold">Price ({cart.length} items)</p>
                            <p className="text-[16px] font-bold">AED {totalP.toFixed(1)}</p>
                        </div>
                        <hr/>
                        <div className="flex justify-between my-[10px]">
                            <p className="text-[14px] font-semibold">Delivery Charge</p>
                            <p className="text-[16px] font-bold">AED 15.00</p>
                        </div>
                        <hr/>
                        <div className="flex justify-between my-[10px]">
                            <p className="text-[14px] font-semibold">Total Price</p>
                            <p className="text-[16px] font-bold">AED 143.00</p>
                        </div>
                        <div className="flex justify-between mx-[5px]">
                            <button className="text-[14px]  h-[49px] mt-[10px] mb-[20px] w-[140px] bg-[#fff] border-2 text-[black] font-bold hover:bg-[black] hover:text-[#fff] border-[black]">CONTINUE SHOPPING</button>
                            <button className="text-[14px]  h-[49px] mt-[10px] mb-[20px] w-[130px] bg-[black] hover:border-2 text-[#fff] font-bold hover:bg-[#fff] hover:text-[black] hover:border-[black]"><Link href="/view/client/checkout">PLACE ORDER</Link></button>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    
    );
}


export default  MainCart;