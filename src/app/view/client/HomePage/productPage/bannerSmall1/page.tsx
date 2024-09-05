

export default function BannerSmall() {
    let img ="https://laptop.delectech.com/images/slideshow/2018/07/13/original/banner3_1531477906.jpg"
    return (
        <div className="group bg-[#e3e3e3] overflow-hidden flex justify-between items-center relative">
                <div className="overflow-hidden relative w-[1025px] h-[177px]">
                    <img src={img} alt={img} className="object-cover w-[1025px] h-[177px] group-hover:scale-105 transition-all duration-500" />
                </div>
                <div className="absolute right-[10px] flex justify-center gap-[50px] items-center pr-[50px]">
                    <div>
                        <h2 className="text-[51px] text-[#fff] font-bold font-sans">50% OFF</h2>
                        <p className="text-[22px] text-[#fff] border-2 border-[#fff] p-1">All <strong >SKINCARE Items</strong></p>
                    </div>
                    <div className="">
                        <button className="text-[16px] font-bold w-[160px] h-[63px] border-2 border-black  bg-[#fff] hover:bg-[#fa2623] hover:text-[#fff] hover:border-[#fff]" >SHOP NOW</button>
                    </div>
                </div>
        </div>
    );
}
