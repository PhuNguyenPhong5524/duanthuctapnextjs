export default function BannerSmall() {
    return (
        <div className=" bg-[#e3e3e3] w-[1025px] h-[177px] flex justify-between items-center">
                <div className="bg-[#e3e3e3] translate-x-[260px]">
                    <i className="fa-regular fa-image text-[#d5d5d5] text-[100px]  "></i>
                </div>
                <div className="flex justify-center gap-[50px] items-center pr-[50px]">
                    <div>
                        <h2 className="text-[51px] font-bold font-sans">50% OFF</h2>
                        <p className="text-[22px]">All <strong >SKINCARE Items</strong></p>
                    </div>
                    <div className="">
                        <button className="text-[16px] font-bold w-[160px] h-[63px] border-2 border-black  bg-[#fff] hover:bg-[#000] hover:text-[#fff]" >SHOP NOW</button>
                    </div>
                </div>
        </div>
    );
}
