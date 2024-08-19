import { ButtonContinue } from "@/app/Btton/Btton";
import { InputCheckOut, InputCheckOuticon, TextTraCheckOut } from "../input/input";

export default function MainCheckPage() {
    return (
        <div className="bg-[#f1f1f1] mt-[-30px] pb-[10px]" >
        <div className="pt-[40px] grid justify-center">
            <div className="translate-x-[10px]"><a href="#" className="text-[12px] font-extrabold ">Home</a> <i className="fa-solid fa-chevron-right text-[9px] font-extrabold"></i> <a href="#" className="text-[12px] font-extrabold ">Cart</a> </div>
            <h2 className="text-[28px] mx-[8px] font-sans mt-[10px] font-bold">CART</h2>
            <div className="h-[850px] w-[1025px] ml-[10px] mt-[20px] mb-[15px] flex justify-between">
            <div className="bg-[#fff] h-full w-[68%] pt-[40px] px-[20px]">
                <div className="w-full mx-[5px] h-[4px] bg-[black] relative">
                    <i className="fa-solid fa-circle absolute mt-[-7px] ml-[-1.5px] text-[18px] z-10"></i>
                    <i className="fa-solid fa-circle absolute mt-[-10px] ml-[-5px] text-[25px] text-[#bbbbbb] z-9"></i>
                </div>
                <div className="flex justify-between  my-[20px]">
                    <h2 className="text-[22px] font-sans  font-bold">Shipping Details</h2>
                    <h2 className="text-[22px] font-sans font-bold text-[#dadada]">Billing Details</h2>
                </div>
                <div className="flex justify-between items-center">
                    <div>
                        <div className="relative mb-[10px]">
                            <label className="text-[14px] font-semibold ">Type of Address</label>
                            <InputCheckOuticon/>
                        </div>
                        <div className="relative mb-[10px]">
                            <label className="text-[14px] font-semibold ">First Name</label>
                            <InputCheckOut/>
                        </div>
                        <div className="relative mb-[10px]">
                            <label className="text-[14px] font-semibold ">Street Address</label>
                            <InputCheckOut/>
                        </div>
                        <div className="relative mb-[10px]">
                            <label className="text-[14px] font-semibold ">City</label>
                            <InputCheckOut/>
                        </div>
                        <div className="relative mb-[10px]">
                            <label className="text-[14px] font-semibold ">Delivery Instructions</label>
                            <TextTraCheckOut/>
                        </div>
                    </div>
                    <div>
                        <div className="relative mb-[10px]">
                            <label className="text-[14px] font-semibold ">Last Name</label>
                            <InputCheckOuticon/>
                        </div>
                        <div className="relative mb-[10px]">
                            <label className="text-[14px] font-semibold ">Area</label>
                            <InputCheckOuticon/>
                        </div>
                        <div className="relative mb-[10px]">
                            <label className="text-[14px] font-semibold ">Phone Number</label>
                            <InputCheckOuticon/>
                        </div>
                    </div>
                </div>
                <p className="text-[14px] font-bold mt-[10px] mb-[20px]">Molestias fringilla aliquam curae, taciti, vestibulum potenti sapien, tellus voluptatibus aliquid sapien. Nisi su aliquid sapien. Nisscipit, dapibus dapibus.</p>
                <ButtonContinue/>
            </div>
            <div className="bg-[#fff] h-[250px] w-[30%] pt-[20px] px-[20px]">
                <h2 className="text-[23px] mx-[8px] font-sans font-bold mb-[10px]">Add Promo Code</h2>
                <div className="mx-[8px]">
                        <div className="flex justify-between my-[10px]">
                            <p className="text-[14px] font-semibold">Price (4 items)</p>
                            <p className="text-[16px] font-bold">AED 128.60</p>
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
                    </div>
                
            </div>
            </div>
        </div>
    </div>
    );
}