export default function MainRegistrationPage() {
    return (
        <div className="bg-[#f1f1f1]  mt-[-30px] pb-[50px] pl-[10px]">
            <div className="mt-[30px] mx-[220px]">
                <div className="pt-[20px]"><a href="#" className="text-[12px] font-extrabold ">Home</a> <i className="fa-solid fa-chevron-right text-[9px] font-extrabold"></i> <a href="#" className="text-[12px] font-extrabold ">Registration</a>  </div>
                <div className=" text-[28px] font-bold mt-[30px]">
                    <div  className=""><h2 className="text-[28px] mb-[30px] font-semibold">REGISTRATION</h2></div>
                    <div className="h-[1044px] bg-[#fff] pt-[45px] ">
                        <div className="flex justify-center gap-[25px] ">
                            <div className="flex justify-center items-center gap-[2px] mb-[10px]">
                                <div className="border-2 border-[black] w-[187px] h-[46px] flex justify-center items-center">
                                    <div className="mr-[5px]"><i className="fa-solid fa-question" style={{fontSize: "14px",border: "3px solid black",borderRadius:"2px",width:"22px",height:'22px',display:'flex',alignItems:"center",justifyContent:'center'}}></i></div>
                                    <div className="mt-[10px]"><p className="text-[14px] font-semibold text-[black]">Login with Google +</p></div>
                                </div>
                            </div>
                            <div className="flex justify-center items-center gap-[2px] mb-[10px]">
                                <div className="border-2 border-[black] w-[187px] h-[46px] flex justify-center items-center">
                                    <div className="mr-[5px]"><i className="fa-solid fa-question" style={{fontSize: "14px",border: "3px solid black",borderRadius:"2px",width:"22px",height:'22px',display:'flex',alignItems:"center",justifyContent:'center'}}></i></div>
                                    <div className="mt-[10px]"><p className="text-[14px] font-semibold text-[black]">Login with Google +</p></div>
                                </div>
                            </div>
                            <div className="flex justify-center items-center gap-[2px] mb-[10px]">
                                <div className="border-2 border-[black] w-[187px] h-[46px] flex justify-center items-center">
                                    <div className="mr-[5px]"><i className="fa-solid fa-question" style={{fontSize: "14px",border: "3px solid black",borderRadius:"2px",width:"22px",height:'22px',display:'flex',alignItems:"center",justifyContent:'center'}}></i></div>
                                    <div className="mt-[10px]"><p className="text-[14px] font-semibold text-[black]">Login with Google +</p></div>
                                </div>
                            </div>
                        </div>
                        <div><p className="text-[14px] text-center font-extrabold font-sans my-[20px]">Or</p></div>
                        <div className="grid justify-center gap-[25px] mb-[30px]">
                            <h3 className="text-[18px] font-bold text-center">Profile Picture</h3>
                            <div className="h-[148px] mt-[-15px] w-[153px] border-2 border-[black] grid justify-center" >
                                <i className="fa-solid fa-plus text-[30px] text-center mt-[50px] text-[#cdcdcd]"></i>
                                <p className="text-[12px] text-[#cdcdcd]">Upload Image</p>
                            </div>
                        </div>
                        <div className="mx-[202px]">
                            <div  className=""><h2 className="text-[18px] font-bold ">Personal Details</h2></div>
                            <div className="flex justify-between gap-[25px] mb-[40px]">
                                <div>
                                    <div className="relative">
                                        <label className="text-[14px] font-semibold">Email<p className="absolute ml-[39px] mt-[-28px]">*</p></label>
                                        <div><input type="text" className="border-2 rounded-0 text-[14px] border-[black] h-[40px] w-[270px] pl-[10px] translate-y-[-5px] mb-[8px]"/></div>
                                    </div>
                                    <div className="relative">
                                        <label className="text-[14px] font-semibold">Email Address<p className="absolute ml-[98px] mt-[-28px]">*</p></label>
                                        <div><input type="text" className="border-2 rounded-0 text-[14px] border-[black] h-[40px] w-[270px] pl-[10px] translate-y-[-5px] mb-[8px]"/></div>
                                    </div>
                                </div>
                                <div>
                                    <div className="relative">
                                        <label className="text-[14px] font-semibold">Full Name<p className="absolute ml-[70px] mt-[-28px]">*</p></label>
                                        <div><input type="text" className="border-2 rounded-0 text-[14px] border-[black] h-[40px] w-[270px] pl-[10px] translate-y-[-5px] mb-[8px]"/></div>
                                    </div>
                                    <div className="relative">
                                        <label className="text-[14px] font-semibold">Mobile Number<p className="absolute ml-[107px] mt-[-28px]">*</p></label>
                                        <div><input type="number" className="border-2 rounded-0 text-[14px] border-[black] h-[40px] w-[270px] pl-[10px] translate-y-[-5px] mb-[8px]"/></div>
                                    </div>
                                </div>
                            </div>

                            <div  className=""><h2 className="text-[18px] font-bold ">Address</h2></div>
                            <div className="flex justify-between gap-[25px] mb-[35px]">
                                <div>
                                    <div className="relative">
                                        <label className="text-[14px] font-semibold">Street</label>
                                        <div><input type="text" className="border-2 rounded-0 text-[14px] border-[black] h-[40px] w-[270px] pl-[10px] translate-y-[-5px] mb-[8px]"/></div>
                                    </div>
                                    <div className="relative">
                                        <label className="text-[14px] font-semibold">Nationality</label>
                                        <div><input type="text" className="border-2 rounded-0 text-[14px] border-[black] h-[40px] w-[270px] pl-[10px] translate-y-[-5px] mb-[8px]"/></div>
                                    </div>
                                </div>
                                <div>
                                    <div className="relative">
                                        <label className="text-[14px] font-semibold">Area</label>
                                        {/* <div><input type="text" className="border-2 rounded-0 text-[14px] border-[black] h-[40px] w-[270px] pl-[10px] translate-y-[-5px] mb-[8px]"/></div> */}
                                        <div>
                                            <select className="border-2 rounded-0 text-[14px] border-[black] h-[40px] w-[270px] pl-[10px] translate-y-[-5px] mb-[8px]">
                                                <option value="0">Choose :</option>
                                                <option value="1">Miền Bắc</option>
                                                <option value="2">Miền Trung</option>
                                                <option value="3">Miền Nam</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-center">
                                <button className=" text-[16px] font-bold w-[160px] h-[63px] border-2 border-black  text-[#fff] bg-[#000] hover:bg-[#fff] hover:text-[#000]" >SHOP NOW</button>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}