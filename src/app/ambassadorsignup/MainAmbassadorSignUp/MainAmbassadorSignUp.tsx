import { ButtonRegister } from "@/app/Btton/Btton";



export default function MainAmbassadorSignUpPage() {
    return (
        <div className="bg-[#f1f1f1]  mt-[-30px] pt-[45px] pb-[50px] pl-[10px]">
            <div className="mt-[30px] mx-[220px]">
                <div className=" text-[28px] font-bold mt-[30px]">
                    <div className="h-[1080px] bg-[#fff] pt-[45px] ">
                        <div className="flex justify-center gap-[25px] ">

                        </div>
                        <h2 className="text-[25px] font-semibold text-center mb-[50px] ml-[220px]">Welcome NAME SURNAME</h2>
                        <p className="text-[18px] font-semibold text-center mb-[50px]">Please fill in the form below to create an account</p>
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
                                        <label className="text-[14px] font-semibold">First Name</label>
                                        <div><input type="text" placeholder="Name" className="placeholder:text-[black] border-2 rounded-0 text-[14px] border-[black] h-[40px] w-[270px] pl-[10px] translate-y-[-5px] mb-[8px]"/></div>
                                    </div>
                                    <div className="relative">
                                        <label className="text-[14px] font-semibold">Display Name</label>
                                        <div><input type="text" className="border-2 rounded-0 text-[14px] border-[black] h-[40px] w-[270px] pl-[10px] translate-y-[-5px] mb-[8px]"/></div>
                                    </div>
                                    <div className="relative">
                                        <label className="text-[14px] font-semibold">Email Address</label>
                                        <div><input type="email" placeholder="namelastname@email.com" className="placeholder:text-[black] border-2 rounded-0 text-[14px] border-[black] h-[40px] w-[270px] pl-[10px] translate-y-[-5px] mb-[8px]"/></div>
                                    </div>
                                    <div className="relative">
                                        <label className="text-[14px] font-semibold">Instagram</label>
                                        <div><input type="text" className="border-2 rounded-0 text-[14px] border-[black] h-[40px] w-[270px] pl-[10px] translate-y-[-5px] mb-[8px]"/></div>
                                    </div>
                                    <div className="relative">
                                        <label className="text-[14px] font-semibold">Set Password</label>
                                        <div><input type="text" className="border-2 rounded-0 text-[14px] border-[black] h-[40px] w-[270px] pl-[10px] translate-y-[-5px] mb-[8px]"/></div>
                                    </div>
                                </div>
                                <div>
                                    <div className="relative">
                                        <label className="text-[14px] font-semibold">Last Name</label>
                                        <div><input type="email" placeholder="namelastname@email.com" className="placeholder:text-[black] border-2 rounded-0 text-[14px] border-[black] h-[40px] w-[270px] pl-[10px] translate-y-[-5px] mb-[8px]"/></div>
                                    </div>
                                    <div className="relative">
                                        <label className="text-[14px] font-semibold">Gender</label>
                                        <div className="border-2 border-[black] flex items-center p-2 mb-[14px]">
                                            <label className="flex items-center">
                                                <input type="radio" name="gender" value="male" className="mr-2" />
                                                <span className="text-[14px]">Male</span>
                                            </label>
                                            <label className="flex items-center ml-[70px]">
                                                <input type="radio" name="gender" value="female" className="mr-2" />
                                            <span className="text-[14px]">Female</span>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="relative">
                                        <label className="text-[14px] font-semibold">Mobile Number</label>
                                        <div><input type="number" placeholder="50 555 5555" className="placeholder:text-[black] border-2 rounded-0 text-[14px] border-[black] h-[40px] w-[270px] pl-[10px] translate-y-[-5px] mb-[8px]"/></div>
                                    </div>
                                    <div className="relative">
                                        <label className="text-[14px] font-semibold">Youtube</label>
                                        <div><input type="text" className="border-2 rounded-0 text-[14px] border-[black] h-[40px] w-[270px] pl-[10px] translate-y-[-5px] mb-[8px]"/></div>
                                    </div>
                                    <div className="relative">
                                        <label className="text-[14px] font-semibold">Repeat Password</label>
                                        <div><input type="text" className="border-2 rounded-0 text-[14px] border-[black] h-[40px] w-[270px] pl-[10px] translate-y-[-5px] mb-[8px]"/></div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center mt-[-10px]">
                                <input type="checkbox"/>
                                <p className=" ml-[20px] text-[14px] font-semibold">I agree to the <a href="#" className="underline hover:text-[blue]">Terms & Conditions</a></p>
                            </div>
                           
                            
                            <div className="flex justify-center items-center mt-[20px]">
                                <ButtonRegister />
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}