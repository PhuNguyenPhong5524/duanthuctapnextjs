
export default function Banner() {
    return (
            <div className="bg-[#f1f1f1] h-[625px] flex items-center justify-between">
                <div className="bg-[#cccccc] h-[80px] w-[25px] flex items-center pl-[8px] cursor-pointer"><i className="fa-solid fa-chevron-left my-auto text-[#fff]"></i></div>
                <div className="relative text-center flex items-center justify-center">
                    <i className="fa-regular fa-image text-[#e6e6e6] text-[200px]"></i>
                    <div className="absolute -translate-y-[-280px] flex gap-[5px]">
                        <div className="bg-[gray] w-[10px] h-[10px] rounded-[50%]"></div>
                        <div className="bg-[#f0f0f0] w-[10px] h-[10px] rounded-[50%] border-[1px] border-[#c1c1c1]"></div>
                        <div className="bg-[#f0f0f0] w-[10px] h-[10px] rounded-[50%] border-[1px] border-[#c1c1c1]"></div>
                        <div className="bg-[#f0f0f0] w-[10px] h-[10px] rounded-[50%] border-[1px] border-[#c1c1c1]"></div>
                    </div>
                </div>
                <div className="bg-[#cccccc] h-[80px] w-[25px] flex items-center pl-[8px] cursor-pointer"><i className="fa-solid fa-chevron-right text-[#fff]"></i></div>
            </div>
    );
}