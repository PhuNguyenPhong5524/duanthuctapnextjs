import { Inputdashboardicon } from "@/app/checkout/input/input";
import CheckBoxAddNew from "./checkbox/checkboxaddnew";



export default function MainAddNewReview() {
    return (
        <div className="bg-[#f1f1f1] mt-[-30px] pb-[10px]" >
            <div className="pt-[40px] grid justify-center">
                <div className="translate-x-[10px]"><a href="#" className="text-[12px] font-extrabold ">Home</a> <i className="fa-solid fa-chevron-right text-[9px] font-extrabold"></i> <a href="#" className="text-[12px] font-extrabold ">Dashboard</a>  <i className="fa-solid fa-chevron-right text-[9px] font-extrabold"></i> <a href="#" className="text-[12px] font-extrabold ">Add Review</a> </div>
                <h2 className="text-[28px] mx-[8px] font-sans mt-[10px] font-bold">ADD REVIEW</h2>
                <div className="h-[820px] w-[1025px] bg-[#fff] ml-[10px] mt-[20px] mb-[15px] flex justify-between">
                <div className="mx-[202px]">
                        <div  className=""><h2 className="text-[18px] my-[30px] font-bold ">Personal Details</h2></div>
                        <div className="flex justify-between gap-[60px] mb-[40px]">
                            <div>
                                <div className="relative">
                                    <label className="text-[14px] font-semibold">Select Brand</label>
                                    <div><input type="text" placeholder="Name" className="placeholder:text-[black] border-2 rounded-0 text-[14px] border-[black] h-[40px] w-[270px] pl-[10px]  mb-[8px]"/></div>
                                </div>
                                <h2 className="text-[15px] my-[20px] font-semibold ">You have selected “Product Name”</h2>
                                <div className="relative mb-[10px]">
                                    <label className="text-[14px] font-semibold">Upload Image</label>
                                    <div className="border-2 border-[black] flex items-center h-[40px] w-[270px] pl-[10px] mt-1">
                                        <input 
                                        type="text" 
                                        placeholder="Choose an image" 
                                        className="flex-grow text-[14px] bg-transparent border-none outline-none text-gray-500"
                                        disabled 
                                        />
                                        <button className="bg-gray-200 text-[14px] font-semibold py-[6px] px-[12px] rounded-full ml-[-50px]">
                                        Choose
                                        </button>
                                    </div>
                                </div>

                                <div className="relative">
                                    <label className="text-[14px] font-semibold">Video URL</label>
                                    <div><input type="text" className="placeholder:text-[black] border-2 rounded-0 text-[14px] border-[black] h-[40px] w-[270px] pl-[10px]  mb-[8px]"/></div>
                                </div>
                                <div className="relative">
                                    <label className="text-[14px] font-semibold">Instagram</label>
                                    <div><input type="text" className="border-2 rounded-0 text-[14px] border-[black] h-[40px] w-[270px] pl-[10px]  mb-[8px]"/></div>
                                </div>
                            </div>
                            <div>
                                <div className="relative">
                                    <label className="text-[14px] font-semibold">Select Product</label>
                                    <Inputdashboardicon/>
                                </div>
                            </div>
                        </div>
                        <div className="relative mt-[-30px]"  >
                            <label className="text-[14px] font-semibold">Summary</label>
                            <div><input type="text" className="border-2 rounded-0 text-[14px] border-[black] h-[100px] w-[700px] pl-[10px]  mb-[8px]"/></div>
                        </div>
                        <h2 className="text-[15px] my-[20px] font-semibold ">Select Options</h2>
                        <div className="grid grid-cols-[20%_20%_20%_20%_20%] gap-[8px]">
                                <CheckBoxAddNew/>
                                <CheckBoxAddNew/>
                                <CheckBoxAddNew/>
                                <CheckBoxAddNew/>
                                <CheckBoxAddNew/>
                                <CheckBoxAddNew/>
                                <CheckBoxAddNew/>
                                <CheckBoxAddNew/>
                                <CheckBoxAddNew/>
                                <CheckBoxAddNew/>
                                <CheckBoxAddNew/>
                                <CheckBoxAddNew/>
                                <CheckBoxAddNew/>
                                <CheckBoxAddNew/>
                                <CheckBoxAddNew/>

                        </div>
                        </div>
                </div>
            </div>
        </div>

    );
}