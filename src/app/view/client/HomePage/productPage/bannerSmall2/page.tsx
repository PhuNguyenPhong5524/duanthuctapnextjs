export default function BannerSmall() {
    let img ="https://pcandparts.com/wp-content/uploads/asus_rog.jpg"
    return (
        <div className="group bg-[#e3e3e3]  flex justify-between items-center relative">
                <div className="overflow-hidden relative w-[1025px] h-[177px]">
                    <img src={img} alt={img} className="object-cover w-[1025px] h-[177px] group-hover:scale-105 transition-all duration-500" />
                </div>
                <div className="absolute right-[10px] flex justify-center gap-[50px] items-center pr-[50px]">
                    <div>
                        <h2 className="text-[51px] font-bold font-sans text-[#fff]">35% OFF</h2>
                        <p className="text-[22px] text-[#fff] border-2 border-[#fff] p-1">All <strong >SKINCARE Items</strong></p>
                    </div>
                    <div className="">
                        <button className="text-[16px] font-bold w-[160px] h-[63px] border-2 border-black  bg-[#fff] hover:bg-[#fa2623] hover:text-[#fff] hover:border-[#fff]" >SHOP NOW</button>
                    </div>
                </div>
        </div>
    );
}
