import { TabsDemo } from "./tabs/tabs";


export default function MainDASHBOARD() {
    return (
        <div className="bg-[#f1f1f1]  mt-[-30px] pt-[45px] pb-[50px] pl-[10px]">
            <div className="mt-[30px] mx-[220px]">
                <div className=" text-[28px] font-bold mt-[30px]">
                    <div className=" bg-[#fff] pt-[45px] ">
                        <div className="flex justify-center gap-[25px] ">

                        </div>
                        <h2 className="text-[25px] font-normal text-center mb-[50px] ml-[220px]">Welcome NAME SURNAME</h2>
                        <div className="grid justify-center gap-[25px] mb-[30px]">
                            <div className="h-[148px] mt-[-15px] w-[153px] bg-[#f1f1f1] grid justify-center" >
                                <i className="fa-regular fa-circle-user text-[50px] text-center mt-[50px] text-[#cdcdcd]"></i>
                            </div>
                        </div>
                        <div className=" flex justify-center">
                            <TabsDemo/>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}