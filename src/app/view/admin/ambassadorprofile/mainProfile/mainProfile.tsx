import BoxProduct from "@/app/view/client/HomePage/productPage/boxProduct/page";

export default function MainProfilePage() {
    return (
        <div className="bg-[#f1f1f1] mt-[-30px] " >
               <div className="pt-[40px] grid justify-center">
                    <div className="h-[280vh] w-[1025px] ml-[10px] bg-[#fff] mt-[20px] pt-[45px] mb-[15px]  flex justify-center ">
                        <div className="bg-[#fff] h-[384px]">
                            <div className="flex flex-col justify-center items-center">
                                <div className="relative bg-[#ededed] flex justify-center items-center w-[143px] h-[143px] rounded-[50%] mt-[10px] mb-[20px]">
                                    <i className="fa-regular fa-user text-[#d5d5d5] text-[50px]"></i>
                                </div>
                                <div><h2 className="text-[22px] font-semibold font-sans">Name Surname</h2></div>
                                <div className="mx-[10px] mt-[5px] mb-[5px]"><div  className="w-[120px] mx-auto flex items-center justify-center text-[10px] font-bold p-[10px]  h-[25px] border-2 rounded-[50px] border-black pt-[20px]">@username</div></div>
                                <div className="flex justify-center gap-[10px] mt-[10px] mb-[25px]">
                                    <div><i className="fa-brands fa-square-facebook" style={{fontSize: "25px",width:"20px",height:'20px',display:'flex',alignItems:"center",justifyContent:'center'}}></i></div>
                                    <div><i className="fa-brands fa-square-twitter" style={{fontSize: "25px",width:"20px",height:'20px',display:'flex',alignItems:"center",justifyContent:'center'}}></i></div>
                                    <div><i className="fa-brands fa-youtube" style={{fontSize: "25px",width:"20px",height:'20px',display:'flex',alignItems:"center",justifyContent:'center'}}></i></div>
                                </div>
                            </div>
                            <p className="text-justify font-sans font-semibold mx-[20px] my-[20px] text-[14px]">Enim expedita torquent! Animi sunt beatae laoreet nec. Euismod rutrum pariatur! Nunc dolorum nisl eum quos quisquam ea. Nobis Perspiciatis, quidem! Sint esse neque viverra rerum nullam, ex aut exercitationem leo dolores, netus ipsum eveniet esse ligula saepe possimus.</p>
                            <div className="bg-[#d4d4d4] h-[335px] flex items-center justify-center">
                                <div className="relative text-center flex items-center justify-center">
                                    <i className="fa-regular fa-image text-[#e6e6e6] text-[200px]"></i>
                                    <div className="absolute -translate-y-[-150px] flex gap-[5px]">
                                        <div className="bg-[gray] w-[10px] h-[10px] rounded-[50%]"></div>
                                        <div className="bg-[#f0f0f0] w-[10px] h-[10px] rounded-[50%] border-[1px] border-[#c1c1c1]"></div>
                                        <div className="bg-[#f0f0f0] w-[10px] h-[10px] rounded-[50%] border-[1px] border-[#c1c1c1]"></div>
                                        <div className="bg-[#f0f0f0] w-[10px] h-[10px] rounded-[50%] border-[1px] border-[#c1c1c1]"></div>
                                    </div>
                                </div>
                                
                            </div>
                            <div className="grid grid-cols-3 mx-[110px] mt-[40px]">
                                <div className="mb-[50px] "><BoxProduct/></div>
                                <div className="mb-[50px] "><BoxProduct/></div>
                                <div className="mb-[50px] "><BoxProduct/></div>
                                <div className="mb-[50px] "><BoxProduct/></div>
                                <div className="mb-[50px] "><BoxProduct/></div>
                                <div className="mb-[50px] "><BoxProduct/></div>
                                <div className="mb-[50px] "><BoxProduct/></div>
                                <div className="mb-[50px] "><BoxProduct/></div>
                                <div className="mb-[50px] "><BoxProduct/></div>
                                
                            </div>
                        </div>
                    </div>
                    
                </div>
        </div>

    );
}