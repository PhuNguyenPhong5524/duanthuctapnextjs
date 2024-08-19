export default function BoxProduct() {
    return (
        <div className="bg-[#fff] h-[342px] w-[245px] shadow-none hover:shadow-[0px_8px_24px_rgba(139,146,153,0.2)] mb-[-24px]">
            <div className="relative bg-[#e3e3e3] flex justify-center h-[260px] ">
                 <i className="fa-regular fa-image text-[#d5d5d5] text-[70px] pt-[90px] "></i>
                 <div className="absolute ml-[-160px] mt-[220px] text-[#fff] text-[10px] w-[66px] h-[24px] bg-[black] flex justify-center items-center font-bold">CATEGORY</div>
            </div>
            <div>
                <a href="/detailpage" className="cursor-pointer hover:text-[#93dcdd]" ><p className="text-[18px] font-sans font-bold pl-[8px] py-[10px]">Product Title Goes Here</p></a>
                <p className="text-[11px] pl-[8px] translate-y-[-15px] font-sans font-medium">BRAND</p>
                <div className="relative flex gap-[5px] mx-[8px] items-center translate-y-[-12px]">
                    <div>
                        <p className="text-[14px] font-sans font-bold text-[#c2c2c2]">AED 32.00</p>
                        <p className="absolute translate-y-[-12px] border-[1.5px] w-[71px] ml-[-1px] bg-[#464646]"></p>
                    </div>
                    <div className="mr-[25px]">
                        <p className="text-[14px] font-sans font-bold text-[black]">AED 25.60</p>
                    </div>
                    <div className="border-2 border-[#000] text-[10px] p-[2px] font-semibold">30% OFF</div>
                </div>
                
            </div>
        </div>
    );
}