
import BoxProductPage from "../boxProductPage/boxproduct";


export default function MainPageDetailPD() {
    return (
        <div className="bg-[#f1f1f1] mt-[-30px] pb-[50px] flex justify-center">
               <div className="pt-[40px] grid justify-center">
                    <div className="ml-[-21px]"><a href="#" className="text-[12px] font-extrabold ">Home</a> <i className="fa-solid fa-chevron-right text-[9px] font-extrabold"></i> <a href="#" className="text-[12px] font-extrabold ">Makeup</a>  </div>
                    <div className=" text-[28px] font-bold mt-[30px] ml-[-22px]">
                        <div className=""><h2 className="text-[28px] mb-[25px] font-semibold">MAKE UP</h2></div>
                        <div className="grid grid-cols-[25%_25%_25%_25%] gap-[12px]">
                            <BoxProductPage />
                            <BoxProductPage />
                            <BoxProductPage />
                            <BoxProductPage />
                            <BoxProductPage />
                            <BoxProductPage />
                            <BoxProductPage />
                            <BoxProductPage />
                            <BoxProductPage />
                            <BoxProductPage />
                            <BoxProductPage />
                            <BoxProductPage />
                            <BoxProductPage />
                            <BoxProductPage />
                            <BoxProductPage />
                            <BoxProductPage />
                        </div>
                    </div>
                    <div className="mt-[30px] flex gap-[10px] ml-[-20px]">
                        <div className="flex items-center justify-center p-[5px] w-[33px] font-semibold text-[#fff] bg-[#000] h-[29px] border-2 border-[#000] cursor-pointer hover:bg-[#fff] hover:text-[#000]" >1</div>
                        <div className="flex items-center justify-center p-[5px] w-[33px] font-semibold text-[#000]  h-[29px] border-2 border-[#000] cursor-pointer hover:bg-[#000] hover:text-[#fff]">2</div>
                        <div className="flex items-center justify-center p-[5px] w-[33px] font-semibold text-[#000]  h-[29px] border-2 border-[#000] cursor-pointer hover:bg-[#000] hover:text-[#fff]">3</div>
                        <div className="flex items-center justify-center p-[5px] w-[33px] font-semibold text-[#000]  h-[29px] border-2 border-[#000] cursor-pointer hover:bg-[#000] hover:text-[#fff]">4</div>
                        <div className="flex items-center justify-center p-[5px] w-[33px] font-semibold text-[#000]  h-[29px] border-2 border-[#000] cursor-pointer hover:bg-[#000] hover:text-[#fff]"><i className="fa-solid fa-chevron-right"></i></div>
                        <div className="flex items-center justify-center p-[5px] w-[33px] font-semibold text-[#000]  h-[29px] border-2 border-[#000] cursor-pointer hover:bg-[#000] hover:text-[#fff]"><i className="fa-solid fa-chevron-right"></i><i className="fa-solid fa-chevron-right"></i></div>
                    </div>
               </div>
        </div>
    );
}