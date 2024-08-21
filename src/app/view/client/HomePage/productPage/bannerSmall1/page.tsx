

export default function BannerSmall() {
    let img = 'Đang cập nhật...'
    return (
        <div className=" bg-[#e3e3e3]  flex justify-between items-center relative">
                <div className="overflow-hidden relative">
                    <img src={img} alt={img} className="object-cover w-[1025px] h-[177px]" />
                </div>
                <div className="absolute right-[10px] flex justify-center gap-[50px] items-center pr-[50px]">
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
